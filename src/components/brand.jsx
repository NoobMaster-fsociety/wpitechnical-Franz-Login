import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';


const brandsData = [
  {
    image: 'img/brands/A_D Tokyo Japan.png',
    title: 'A_D Tokyo Japan',
  },
  {
    image: 'img/brands/AMBU.png',
    title: 'AMBU',
  },
  {
    image: 'img/brands/CHINESPORT.png',
    title: 'CHINESPORT',
  },
  {
    image: 'img/brands/CORPULS.png',
    title: 'CORPULS',
  },
  {
    image: 'img/brands/GINEVRI.png',
    title: 'GINEVRI',
  },
  {
    image: 'img/brands/GULDMANN.png',
    title: 'GULDMANN',
  },
  {
    image: 'img/brands/HADECO.png',
    title: 'HADECO',
  },
  {
    image: 'img/brands/KAWE.png',
    title: 'KAWE',
  },
  {
    image: 'img/brands/KINGVISION.png',
    title: 'KINGVISION',
  },
  {
    image: 'img/brands/MAICO.png',
    title: 'MAICO',
  },
  {
    image: 'img/brands/MAMIVAc.png',
    title: 'MAMIVAc',
  },
  {
    image: 'img/brands/KOIKE MEDICAL.png',
    title: 'KOIKE MEDICAL',
  },
  {
    image: 'img/brands/MEDLAB.png',
    title: 'MEDLAB',
  },
  {
    image: 'img/brands/NAVEH.png',
    title: 'NAVEH',
  },
  {
    image: 'img/brands/OPHARDT hygiene.png',
    title: 'OPHARDT hygiene',
  },
  {
    image: 'img/brands/SCHAERER MEDICAL.png',
    title: 'SCHAERER MEDICAL',
  },
  {
    image: 'img/brands/SECA.png',
    title: 'SECA',
  },
  {
    image: 'img/brands/SECULIFE.png',
    title: 'SECULIFE',
  },
  {
    image: 'img/brands/SINAPI - 1.png',
    title: 'SINAPI 1',
  },
  {
    image: 'img/brands/SINAPI - 2.png',
    title: 'SINAPI 2',
  },
  {
    image: 'img/brands/SURGIRIS.png',
    title: 'SURGIRIS',
  },
  {
    image: 'img/brands/TECNIMED.png',
    title: 'TECNIMED',
  },
  {
    image: 'img/brands/TRISMED.png',
    title: 'TRISMED',
  },
  {
    image: 'img/brands/VISIOFOCUS.png',
    title: 'VISIOFOCUS',
  },
];

const style = {
  width: '20%', // Set the width to 100% to fill the container
  height: 'auto', // Allow the height to adjust based on the aspect ratio of the images
};

const Brand = () => (
  <div id="brands" className="text-center">
    <div className="container">
      <div className="col-md-8 col-md-offset-2 section-title">
        <h2>Brands</h2>
      </div>
      <Swiper
        spaceBetween={20} // Adjust as needed for space between slides
        slidesPerView={5} // Display 5 slides at once
        loop={true}
    
        className="mySwiper" // Add your custom CSS class if needed
      >
        {brandsData.map((brand, index) => (
          <SwiperSlide key={index}>
            <img alt={brand.title} src={brand.image} style={style} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Brand;

