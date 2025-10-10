import "./Booking.scss";
import Section from "../../layouts/Section";
import Button from "../../components/Button";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import image1 from "@/assets/images/image-1.jpg";
import image2 from "@/assets/images/image-2.jpg";
import image3 from "@/assets/images/image-3.jpg";
import { useModalStore } from "../../store/modalStore.jsx";

const Booking = () => {
  const imagesSlider = [image1, image2, image3];
  const { openModal } = useModalStore();

  return (
    <Section className="booking" title="Запишитесь прямо сейчас">
      <div className="booking__description">
        <p>
          Ваш автомобиль требует внимания? Мы поможем быстро и качественно. В
          “Автосервисе Шуваята” проводится диагностика и ремонт отечественных
          авто: ВАЗ, ГАЗ, КАМАЗ, МАЗ и других марок. Мы используем современное
          оборудование, находим неисправности с точностью и устраняем их без
          лишних затрат. Запишитесь прямо сейчас — и уже сегодня получите
          уверенность, что ваше авто в надёжных руках.
        </p>

        <div className="booking__active">
          <Button onClick={openModal} />
        </div>
      </div>

      <div className="booking__slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {imagesSlider.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                className="booking__image"
                src={src}
                alt={`Фото ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Booking;
