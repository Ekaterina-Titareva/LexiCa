import { Swiper, SwiperSlide } from "swiper/react";
import { words } from "../../../API/words";
import CardForGame from "./CardForGame";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperForCardForGame.css";
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperForCardForGame({ incrementLearnedCount }) {
    
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
                    <SwiperSlide key={item.id}>
                        <CardForGame
                        key={item.id}
                        category={item.tags}
                        word={item.english}
                        transcription={item.transcription}
                        translation={item.russian}
                        incrementLearnedCount={incrementLearnedCount}
                        />
                        
                    </SwiperSlide>
                    
                );
                })}
            </Swiper>
        </>
    );
}