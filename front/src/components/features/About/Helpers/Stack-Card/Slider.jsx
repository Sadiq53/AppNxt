import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from './Card';

const Slider = () => {
  return (
    <>
        <div className="container pt-cs">
            <div className="stack-card">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-cs">
                            <Swiper
                            modules={[Navigation]}
                            // navigation={true}
                            slidesPerView={1}
                            spaceBetween={30}
                            className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Card type={'mob'} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card type={'mob'} />
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