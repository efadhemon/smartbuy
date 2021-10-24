import { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, []);

    const handleBackToTop = () => {
        window.scrollTo(500, 0);
    }

    const style: object = {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        backgroundColor: "#2e2d2d",
        color: "#ffffff",
        border: "none",
        outline: "none",
        height: "40px",
        width: "40px",
        fontSize: "18px",
        display: "grid",
        placeContent: "center",
        borderRadius: "100%",
        zIndex: "999999",
    }

    return (
        <button style={isVisible ? style : {display:"none"}} onClick={handleBackToTop} title="Back To Top">
            <FaArrowUp />
        </button>
    );
};

export default BackToTop;