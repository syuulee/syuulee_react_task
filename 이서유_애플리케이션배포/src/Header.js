// import { IconName } from "react-icons/io";

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <h1>
                        <a href=''>
                            <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="" />
                        </a>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            <li><a href="">홈</a></li>
                            <li><a href="">체험/구매</a></li>
                            <li><a href="">갤러리</a></li>
                            <li><a href="">브랜드스토리</a></li>
                        </ul>
                    </nav>
                    <div className="icon">
                        <i className="xi-basket"></i>
                        <i className="xi-emoticon-smiley-o"></i>
                        <i className="xi-search"></i>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;