import { useFormik } from 'formik'
import { useState } from 'react'
import { create } from '../../../../services/ProjectService'
import Spinner from '../../../shared/Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Banners from './Banners'
import Content from './Content'
import Thumbnail from './Thumbnail'
import Preview from './Preview'

const CreateProject = () => {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [banners, setBanners] = useState([])
  const [content, setContent] = useState([])
  const [mainBannerPreview, setMainBannerPreview] = useState("");
  const [initialValues, setInitialValues] = useState({
    name: '',
    date: Date.now(),
    heading: '',
    status: 'draft'
  })

  const form = useFormik({
    initialValues,
    onSubmit: async(formData) => {

      const formPayload = new FormData();

      formPayload.append("name", formData.name);
      formPayload.append("date", formData.date);
      formPayload.append("heading", formData.heading);
      formPayload.append("status", formData.status);
      formPayload.append("mainBanner", formData?.mainBanner);
      formPayload.append("content", JSON.stringify(content))

      banners.forEach((banner, index) => {
        if (banner.banner) {
          formPayload.append(`banners[${index}]`, banner.banner);
        }
      });
      setIsLoading(true)
      const response = await create(formData)
      if(response.success) {
        setIsLoading(false)
        navigate('/project')
        toast.success('Project is Created !!')
      }
    }
  })

  // Handle main banner upload
  const handleMainBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      form.setFieldValue("mainBanner", file);

      // Generate preview
      const reader = new FileReader();
      reader.onload = () => setMainBannerPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const fetchBanners = (data) => {
    setBanners(data)
  }
  
  const fetchContent = (data) => {
    setContent(data)
  }

  return (
    <>
        <div className="container-fluid">
          <form onSubmit={form.handleSubmit}>
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header pt-4 pb-2">
                    <h6>Thumbnail</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="my-3">
                      <input type="text" value={form.values.name} onChange={form.handleChange} className="form-control" name="name" placeholder="Project Name" id="" />
                    </div>
                    <div className="my-3">
                      <input type="file" onChange={handleMainBannerUpload} className="form-control" name="banner" id="" />
                    </div>
                    <div className="my-3">
                      <input type="text" value={form.values.heading} onChange={form.handleChange} className="form-control" name="heading" placeholder="Main Header" id="" />
                    </div>
                  </div>
                </div>
                
                <Banners fetchBanners={fetchBanners} /> 

                <Content fetchContent={fetchContent} />
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-header gtc-1-2 grid-cs">
                    <select className="form-control" name='status' onChange={form.handleChange} id="exampleFormControlSelect1">
                      <option value=''>Status</option>
                      <option value='active'>Active</option>
                      <option value='pending'>Pending</option>
                      <option value='draft'>Draft</option>
                    </select>
                    <button type='submit' disabled={isLoading} className='btn btn-primary btn-lg m-0'>Save Project {isLoading && <Spinner />}</button>
                  </div>
                </div>
                
                <Thumbnail img={mainBannerPreview} name={form.values.name} />

                <Preview />

              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default CreateProject