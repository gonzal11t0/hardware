import { useEffect, useState } from "react";
import { PiArrowCircleUpDuotone } from "react-icons/pi";
import '../styles/toUp.css';
import '../styles/mediaToUp.css';
const ToUp=()=>{

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
});
}
    return(
        <div className={`container-button ${showButton ? "show" : ""}`}>
            <PiArrowCircleUpDuotone onClick={scrollToTop } className="toUp"/>
        </div>
    );
};
export default ToUp;