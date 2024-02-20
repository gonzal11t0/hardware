import { useEffect, useState } from "react";
import { PiArrowCircleUpDuotone } from "react-icons/pi";

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
            <PiArrowCircleUpDuotone onClick={scrollToTop } style={{color: "green",top: "33vh", position: "relative", marginLeft: "90vw", fontSize:"2rem"}} />
        </div>
    );
};
export default ToUp;