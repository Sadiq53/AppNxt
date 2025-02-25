import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const Step2 = ({ onDataChange }) => {

    const stepRef = useRef()

    const [bannerView, setBannerView] = useState()
    const [data, setData] = useState({
        title: '',
        description: '',
        banner: null
    })

    const bannerUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData({...data, banner: file})
        
            // Generate preview
            const reader = new FileReader();
            reader.onload = () => setBannerView(reader.result);
            reader.readAsDataURL(file);
        }
    };

    useEffect(()=>{
        onDataChange(data)
    }, [data])


  return (
    <>
        <div className="card my-3">
            <div className="card-header pt-4 pb-2">
                <h6>Step 2</h6>
            </div>
            <div className="card-body py-2">
                <input type="file" ref={stepRef} onChange={(e)=>bannerUpload(e)} name="" className="hide-me" id="" />
                <div className="work-process-card">
                    <div onClick={()=>stepRef.current?.click()} className="part1 flex-cs">
                        {
                            bannerView ? (
                                <img src={bannerView} alt="" />
                            ) : (
                                <i class="fa-solid fa-plus fa-2xl" /> 
                            )
                        }
                    </div>  
                    <div className="part2">
                        <div className="my-3">
                            <input type="text" onChange={(e)=>{setData({...data, title: e.target.value})}} placeholder="Write Title" className="form-control" name="title" id="" />
                        </div>
                        <div className="my-3">
                            <textarea rows={3} type="text" onChange={(e)=>{setData({...data, description: e.target.value})}} placeholder="Write Description" className="form-control" name="description" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Step2