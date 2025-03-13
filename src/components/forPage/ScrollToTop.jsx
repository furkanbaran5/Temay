import { useEffect } from "react";
import { useLocation } from "wouter"; // ✅ wouter'dan import ediyoruz

const ScrollToTop = () => {
    const [location] = useLocation(); // ✅ wouter'da useLocation böyle kullanılır

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); // ✅ Sayfa değiştiğinde en üste kaydır

    return null;
};

export default ScrollToTop;
