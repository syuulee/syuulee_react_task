const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="left">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/sc_1.jpg"} alt="" />
                    </figure>
                </div>
                <div className="right">
                    <h2>"가전으로 공간을 새롭게"</h2>
                    <strong>가전에도 변화가 필요하죠.</strong>
                    <p>집에서 머무는 시간이 늘어난 요즘, 사람들은 더 이상 주어진 공간에 만족하지 않고 공간을 보다 새롭게 만들고 싶어합니다.<br />
                        전통적인 방식으로 공간을 사용하는 것을 넘어 라이프스타일에 맞게 바꾸고<br /> 활용합니다.</p>
                </div>

            </div>
        </section>
    )
}

export default Intro;