import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// const SLIDE = [
//     { id: 1, content: "01. The world expands along the new path created", desc: "14년 연속 1위로 대한민국 엘리베이터의 역사를 만들어 갑니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
//     { id: 2, content: "02. The world expands along the new path created", desc: "14년 연속 1위로 대한민국 엘리베이터의 역사를 만들어 갑니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
// ]

const MainVisual = () => {
    // const [IDX, setIDX] = useState();
    // useEffect(() => {
    //     setIDX(0)
    // }, []);
    // const mainSlide = useRef(null);
    // const setting = {
    //     arrows: false,
    //     // dots: true,
    //     // afterChange: index => setIDX(index),
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     fade: true,
    // }
    return (
        <section className="MainVisual">
            <div className="container">
                <div className="itm">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/mv_01.jpg"} alt="" />
                    </figure>
                </div>
            </div>
            {/* <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? 'on' : '')}>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className="xi-arrow-left"></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className="xi-arrow-right"></i></button>
            </div> */}
            <div className="scroll">
                <span className="bar"></span>
            </div>
            <div className="colored">
                <span className="colored_bar"></span>
            </div>
        </section >
    )
}

export default MainVisual;