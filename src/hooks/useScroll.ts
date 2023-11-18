import { useState, useEffect } from "react";

const useScroll = () => {

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {

        const trackScroll = () => {
            // when scrollY is bigger than 50px setBg to true, else false
            return window.scrollY > 50 ? setIsScrolling(true) : setIsScrolling(false);
        }

        // add event listener
        window.addEventListener("scroll", trackScroll);

        return () => {
            window.removeEventListener("scroll", trackScroll);
        }
    });

    return isScrolling;
}

export default useScroll