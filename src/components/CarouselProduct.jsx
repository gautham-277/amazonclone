import { Swiper,SwiperSlide}from 'swiper/react';
import {Navigation} from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import {Link} from 'react-router-dom';
const CarouselProduct = () => {
  return (
    <div className='bg-white m-3'>
      <div className="text-2xl font-semibold p-3">Best Seller</div>
        <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        // if (className="xs:hidden") {
        //     loop={true}
        // }
        modules={Navigation}>
     {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
           <Link to={`/products/${i}`}>
              <img className='object cover'
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
              />
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default CarouselProduct