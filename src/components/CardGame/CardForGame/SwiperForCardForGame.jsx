// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { words } from "../../../API/words";
import CardForGame from "./CardForGame";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperForCardForGame.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperForCardForGame() {
    return (
        <>
            <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {words.map((item) => {
                return (
                    <SwiperSlide>
                        <CardForGame
                        key={item.id}
                        category={item.tags}
                        word={item.english}
                        transcription={item.transcription}
                        translation={item.russian}
                        />
                    </SwiperSlide>
                );
                })}
            </Swiper>
        </>
    );
}