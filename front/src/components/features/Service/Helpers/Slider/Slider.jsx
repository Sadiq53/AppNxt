import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Header from './Header';
import { splitter } from '../../../../../utils/Splitter'

const Slider = () => {

    const Cards = ({ icon, heading, content }) => {
        return (
            <>
                <div className="cards">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <div className="header">
                        <h4>{splitter(heading, 0, 1)} <span1>{splitter(heading, 1, 2)}</span1> <span>{splitter(heading, 2)}</span></h4>
                    </div>
                    <div className="content">
                            <p className="font-sm fs-16 text-start">{content}</p>
                    </div>
                </div>
            </>
        )
    }

  return (
    <>      
        <div className="container pt-cs">
            <div className="slider-service">
                <div className="row">
                    <div className="col-md-12">
                        <Header />
                        <div className="body">
                            <Swiper
                            modules={[Navigation]}
                            // navigation={true}
                            slidesPerView={window.innerWidth >= 767 ? 3.5 : 1}
                            spaceBetween={window.innerWidth >= 767 ? 30 : 20}
                            className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Cards 
                                        icon={'/assets/img/swipe-img-1.svg'}
                                        heading={'Custom Development Solutions'}
                                        content={'At APPNXT PVT. LTD., we provide comprehensive custom software services tailored to perfectly fit your enterprise requirements, ensuring optimal solutions for your business needs.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Cards 
                                        icon={'/assets/img/swipe-img-1.svg'}
                                        heading={'Custom Development Solutions'}
                                        content={'At APPNXT PVT. LTD., we provide comprehensive custom software services tailored to perfectly fit your enterprise requirements, ensuring optimal solutions for your business needs.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Cards 
                                        icon={'/assets/img/swipe-img-1.svg'}
                                        heading={'Custom Development Solutions'}
                                        content={'At APPNXT PVT. LTD., we provide comprehensive custom software services tailored to perfectly fit your enterprise requirements, ensuring optimal solutions for your business needs.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Cards 
                                        icon={'/assets/img/swipe-img-1.svg'}
                                        heading={'Custom Development Solutions'}
                                        content={'At APPNXT PVT. LTD., we provide comprehensive custom software services tailored to perfectly fit your enterprise requirements, ensuring optimal solutions for your business needs.'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Cards 
                                        icon={'/assets/img/swipe-img-1.svg'}
                                        heading={'Custom Development Solutions'}
                                        content={'At APPNXT PVT. LTD., we provide comprehensive custom software services tailored to perfectly fit your enterprise requirements, ensuring optimal solutions for your business needs.'}
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider