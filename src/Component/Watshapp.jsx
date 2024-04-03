import { ImWhatsapp } from "react-icons/im";
import '../styles/whatsapp.css';

const Whatsapp = () => {
    return (
        <div>
            <a target="_blank" href="https://web.whatsapp.com/send?l=es&amp;phone=5491151364852&amp;text=" rel="noopener noreferrer">
                <ImWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    );
};

export default Whatsapp;