import { useEffect, useState } from "react";
import './ScrollTop.css'



const ScrollTop = () => {
   
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    // if (window.pageYOffset > 300) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img
            src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
            alt="Go to top"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
