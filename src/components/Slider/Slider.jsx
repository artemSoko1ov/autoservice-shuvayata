import React from "react";
import "./Slider.scss";
import CardSlider from "../CardSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Icon1 from "@/assets/icons/IconsCards/icon-1.svg?react";
import Icon2 from "@/assets/icons/IconsCards/icon-2.svg?react";
import Icon3 from "@/assets/icons/IconsCards/icon-3.svg?react";
import Icon4 from "@/assets/icons/IconsCards/icon-4.svg?react";
import Icon5 from "@/assets/icons/IconsCards/icon-5.svg?react";
import Icon6 from "@/assets/icons/IconsCards/icon-6.svg?react";

const dateCards = [
  {
    icon: <Icon1 />,
    title: "КАМАЗ, МАЗ, ВАЗ, ГАЗ — всё под ключ",
    description: "Работаем с отечественным автопромом любого года.",
  },
  {
    icon: <Icon6 />,
    title: "Шиномонтаж и балансировка",
    description:
      "Смена сезонных шин, балансировка колёс и ремонт бескамерных покрышек — быстро и аккуратно.",
  },
  {
    icon: <Icon2 />,
    title: "Диагностика и ремонт двигателя",
    description: "Быстро выявим и устраним неисправности.",
  },
  {
    icon: <Icon3 />,
    title: "Ходовая часть",
    description: "Ремонт подвески, рулевого управления, тормозов.",
  },
  {
    icon: <Icon4 />,
    title: "Автоэлектрика",
    description:
      "Ремонт генераторов, стартеров, установка сигнализаций и электрики.",
  },
  {
    icon: <Icon5 />,
    title: "Автозвук и мультимедиа",
    description:
      "Установка акустики, сабвуферов, мультимедиа и шумоизоляция салона.",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={140}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
          680: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 24 },
          1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 50 },
          1440: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 140 },
        }}
      >
        {dateCards.map(({ icon, title, description }, i) => (
          <SwiperSlide key={i}>
            <CardSlider icon={icon} title={title} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
