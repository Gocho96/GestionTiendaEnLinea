import { useState, useEffect } from "react";
import bannerDesktop from "../assets/BannerDesktop.svg";
import bannerMobile from "../assets/BannerMobile.svg";

const Banner = () => {
  const [banner, setBanner] = useState(bannerDesktop);

  useEffect(() => {
    const handleResize = () => {
      setBanner(window.innerWidth <= 768 ? bannerMobile : bannerDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="banner position-relative text-white text-center">
        <img src={banner} className="img-fluid" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
