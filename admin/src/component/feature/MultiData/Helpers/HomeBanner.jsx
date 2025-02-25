import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { create } from '../../../../services/HomeService'
import { useDispatch, useSelector } from "react-redux"
import { handlePostBanner } from "../../../../redux/AdminDataSlice"

const HomeBanner = () => {


    const dispatch = useDispatch()

    const banner = useSelector((state) => state.AdminDataSlice.banner)

    const [isLoading, setIsLoading] = useState(false)
    const [bannerData, setBannerData] = useState({
        mainHeading: ''
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if(banner) {
            setBannerData(banner)
        }
    }, [banner])


    const handleChange = (e) => {
        const { name, value } = e.target
        setBannerData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        if (!bannerData.mainHeading.trim()) {
            newErrors.mainHeading = 'Main heading is required'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const submitData = async() => {
        if (!validateForm()) {
            toast.error('Please fill all required fields')
            return
        }

        try {
            setIsLoading(true)
            const response = await create(bannerData)
            if(response.success) {
                toast.success('Banner Updated Successfully !!')
                // setBannerData({ mainHeading: '' }) 
                dispatch(handlePostBanner(response.data))
            } else {
                toast.error(response.message || 'Failed to update banner')
            }
        } catch (error) {
            toast.error('Something went wrong!')
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <>
        <div className="card">
            <div className="card-header flex-cs header pt-4 pb-2">
                <h5>Home Banner</h5>
                <button 
                    className="btn btn-primary btn-md" 
                    onClick={submitData} 
                    type="submit" 
                    disabled={isLoading}
                >
                    <i className="fa-solid fa-floppy-disk" /> &nbsp; Save {isLoading && <Spinner />}
                </button>
            </div>
            <div className="card-body pt-2">
                <div className="my-3">
                    <input 
                        type="text" 
                        placeholder="Write Main Heading" 
                        name="mainHeading"
                        value={bannerData.mainHeading}
                        onChange={handleChange}
                        className={`form-control ${errors.mainHeading ? 'is-invalid' : ''}`}
                    />
                    {errors.mainHeading && (
                        <div className="invalid-feedback">
                            {errors.mainHeading}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeBanner