import { useCallback, useRef } from "react"

const useDropdown = () => {

    const togglerRef = useRef(null);

    const handlemobileDropdownItemClick = useCallback(() => {
        if (window.innerWidth < 767 && togglerRef.current) {
            togglerRef.current.click();
        }
    }, [])


    return { togglerRef, handlemobileDropdownItemClick }

};

export default useDropdown;
