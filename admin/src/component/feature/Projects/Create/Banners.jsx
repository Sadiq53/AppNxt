import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import PreviewBannerModal from "./PreviewBannerModal";

const Banners = ({fetchBanners}) => {

    const bannerRef = useRef()

    const [banners, setBanners] = useState([{
        banner: null, preview: ''
    }])

    // Update a specific banner
    const updateBanner = (index, file) => {
        console.log(index)
        const updatedBanners = [...banners];
        updatedBanners[index].banner = file;

        // Generate preview
        const reader = new FileReader();
        reader.onload = () => {
            updatedBanners[index].preview = reader.result;
            setBanners(updatedBanners);
        };
        reader.readAsDataURL(file);
    };

    const addBanner = () => setBanners([...banners, { banner: null, preview: "" }]);

    // Remove a specific banner
    const removeBanner = (index) => {
        setBanners(banners.filter((_, i) => i !== index));
    };

    useEffect(()=>{
        fetchBanners(banners)
    }, [banners])

  return (
    <>
        <div className="card my-3">
            <div className="card-header pt-4 pb-2">
                <div className="flex-cs  header">
                    <h6>Add Banners 
                        <span data-tooltip="Preview">
                            <button 
                                className='cs-btn'
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#modal-banner"
                            >
                                <i class="fa-regular fa-lg fa-circle-info" style={{color: '#aaa'}} />
                            </button>
                        </span>
                    </h6>
                    
                </div>
            </div>
            <div className="card-body py-2">
                <div className="projects-banners">
                    {
                        banners?.map((value, index) => (
                            <>
                                {
                                index !== 0 && (
                                    <div className="divider"></div>
                                )
                                }
                            <div className="mb-2 flex-cs w-100 header">
                                <h5 className='m-0'>Banner { index !== 0 && index+1}</h5>
                                {
                                    index !== 0 && (
                                        <button type='button' onClick={()=>removeBanner(index)} className='btn bg-gradient-danger m-0'>remove</button>
                                    )
                                }
                            </div>
                            <input className='hide-me' type="file" ref={bannerRef} onChange={(e)=>updateBanner(index, e.target.files[0])} style={{visibility: 'hidden'}} name="" id="" />
                            <div key={index} className="layout">
                                {
                                value.banner ? (
                                    <img src={value.preview} alt="" />
                                ) : (
                                    <button type='button' onClick={()=>bannerRef.current?.click()} className="btn btn-default"><i class="fa-solid fa-plus" /> &nbsp; Banner{index + 1}</button>
                                )
                                }
                            </div>
                            </>
                        ))
                    }
                    <button type='button' onClick={addBanner} className='btn m-0 bg-gradient-success'><i class="fa-solid fa-plus" /> &nbsp; Add More</button>
                </div>
            </div>
        </div>
        <PreviewBannerModal img={'/assets/img/banner.JPG'} />
    </>
  )
}

export default Banners