// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/wZTpX7BR/home-lover.jpg",
      title: "Bring Nature Into Your Home",
      desc: "Fresh indoor plants that purify air and bring peace to your living space.",
    },
    {
      img: "https://i.ibb.co.com/p6TBgTzJ/ff.webp",
      title: "Nurture Green Life",
      desc: "Explore easy-care plants perfect for beginners and plant lovers.",
    },
    {
      img: "https://i.ibb.co.com/ch0ccrv7/love.webp",
      title: "Grow With Love",
      desc: "Our plant care tips help your plants stay fresh & healthy all year.",
    },
  ];
  return (
    <>
      <div className="w-full">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[500px] md:h-[550px] lg:h-[600px] flex items-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text Content */}
                <div className="relative max-w-2xl mx-auto text-center text-white px-4">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg font-light">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
