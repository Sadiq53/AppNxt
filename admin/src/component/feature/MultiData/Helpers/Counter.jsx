import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { create } from '../../../../services/CounterService'
import { useFormik } from "formik"
import { validationSchema } from "../../../../schemas/CounterForm"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {


    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const counter = useSelector((state) => state.AdminDataSlice.counter)

    const form = useFormik({
        initialValues : {
            YE : '',    
            SC : '',
            PD : '',
            IR : '',
        },
        validationSchema,
        onSubmit : async(formData) => {
            setIsLoading(true)
            const response = await create(formData)
            if(response.success) {
                setIsLoading(false)
                toast.success('Counter Updated Successfully !!')
            }
        }
    })

    useEffect(() => {
        if (counter) {
            const fields = ['IR', 'PD', 'SC', 'YE'];
            fields.forEach(field => form.values[field] = counter[field] || '');
        }
    }, [counter, form?.values]);



  return (
    <>
        <div className="card">
            <form onSubmit={form.handleSubmit}>
                <div className="card-header flex-cs header pt-4 pb-2">
                    <h5>Counter</h5>
                    <button type="submit" className="btn btn-primary btn-md" disabled={isLoading}>
                        <i className="fa-solid fa-floppy-disk" /> &nbsp; Save {isLoading && <Spinner />}
                    </button>
                </div>

                <div className="card-body pt-2">
                    <div className="grid-cs">
                        <div className="my-3">
                            <label className='lead' htmlFor="Years of Excellence">Years of Excellence</label>
                            <input type="number" onChange={form.handleChange} onBlur={form.handleBlur} className={`form-control ${form.errors.YE && form.touched.YE ? 'is-invalid' : ''}`} placeholder='Years of Excellence' name="YE" id="" />
                        </div>
                        <div className="my-3">
                            <label className='lead' htmlFor="Satisfied Clients">Satisfied Clients</label>
                            <input type="number" onChange={form.handleChange} onBlur={form.handleBlur}  className={`form-control ${form.errors.SC && form.touched.SC ? 'is-invalid' : ''}`} placeholder='Satisfied Clients' name="SC" id="" />
                        </div>
                        <div className="my-3">
                            <label className='lead' htmlFor="Projects Delivered">Projects Delivered</label>
                            <input type="number" onChange={form.handleChange} onBlur={form.handleBlur} className={`form-control ${form.errors.PD && form.touched.PD ? 'is-invalid' : ''}`} placeholder='Projects Delivered' name="PD" id="" />
                        </div>
                        <div className="my-3">
                            <label className='lead' htmlFor="Industry Recognitions">Industry Recognitions</label>
                            <input type="number" onChange={form.handleChange} onBlur={form.handleBlur} className={`form-control ${form.errors.IR && form.touched.IR ? 'is-invalid' : ''}`} placeholder='Industry Recognitions' name="IR" id="" />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </>
  )
}

export default Counter