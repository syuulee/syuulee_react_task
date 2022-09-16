import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SOLUTION = [
    { id: 1, content: "LG 디오스 오브제컬렉션 김치톡톡", price: <div>2,498,000원</div>, secondprice: "2,250,000원", link: "/" },
    { id: 2, content: "LG 디오스 오브제컬렉션 노크온 더블매직스페이스", price: <div>4,607,000원</div>, secondprice: " 4,150,000원", link: "/" },
    { id: 3, content: "LG 퓨리케어 오브제컬렉션 정수기(맞춤 출수, 냉온정)", price: <div>1,372,000원</div>, secondprice: "1,236,000원", link: "/" },
    { id: 4, content: "LG 디오스 오브제컬렉션 광파오븐", price: <div>1,055,000원</div>, secondprice: "950,000원", link: "/" },
    { id: 5, content: "LG 컨버터블 패키지 오브제컬렉션(냉장전용고)", price: <div>1,610,000원</div>, secondprice: "1,450,000원", link: "/" },
    { id: 6, content: "LG 트롬 오브제컬렉션 워시타워", price: <div>4,540,000원</div>, secondprice: "4,150,000원", link: "/" },
    { id: 7, content: "LG 디오스 오브제컬렉션 식기세척기", price: <div>1,490,000원</div>, secondprice: " 1,401,000원", link: "/" },
    { id: 8, content: "LG 올레드 오브제컬렉션 Easel", price: <div>10,434,000원</div>, secondprice: " 9,400,000원", link: "/" },
]

const Popular = () => {
    const [slideNum, setslideNum] = useState(0);
    const SLIDE = useRef(null);
    return (
        <section className="popular">
            <div className="container">
                <h2>최근 가장 많이 팔린 상품</h2>
            </div>
            <div className="product_slide">
                <div className="box">
                    <strong>{SOLUTION[slideNum].content}</strong>
                    <p className="price">{SOLUTION[slideNum].price}</p>
                    <p className="modified">{SOLUTION[slideNum].secondprice}</p>
                    <a href="/">색상변경</a>
                </div>
                <div className="s_content">
                    <Slider
                        arrows={false}
                        slidesToShow={2}
                        afterChange={index => setslideNum(index)}
                        className={'solution_slide'}
                        ref={SLIDE}>
                        {
                            SOLUTION.map((img, idx) => {
                                return (
                                    <figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                        <img src={process.env.PUBLIC_URL + "/img/slide_0" + img.id + ".jpg"} alt="" />
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className="arrows">
                <i className="xi-arrow-left" onClick={() => SLIDE.current.slickNext()}></i>
                <i className="xi-arrow-right" onClick={() => SLIDE.current.slickPrev()}></i>
            </div>
            <ul className="dots">
                {
                    SOLUTION.map((dot, idx) => <li
                        key={dot.id}
                        onClick={() => SLIDE.current.slickGoTo(idx)} className={slideNum === idx ? 'on' : ''}>
                        {dot.id}
                    </li>)
                }
            </ul>
        </section>
    )
}

export default Popular;
