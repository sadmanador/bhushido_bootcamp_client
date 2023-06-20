import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SectionHeader from "../../../elements/SectionHeader";

const Gallery = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="bg-gray-400 mx-auto max-w-7xl">
      <SectionHeader heading="Gallery" subHeading="Check out our gallery" />
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 relative">
          <h2 className="absolute top-10 text-2xl italic">"Achieve what you wish for"</h2>
          <img src="assets/image/gallery/gallery1.png" alt="" />
        </div>
        <div className="keen-slider__slide number-slide2 relative">
          <h2 className="absolute top-10 text-2xl italic">
            "Learn, obedience, and peace is the key of martial art"
          </h2>
          <img src="assets/image/gallery/gallery2.webp" alt="" />
        </div>
        <div className="keen-slider__slide number-slide3 relative">
          <h2 className="absolute top-10 text-2xl italic">"Fire up your inner worrier"</h2>
          <img src="assets/image/gallery/gallery3.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide4 relative">
          <h2 className="absolute top-10 text-2xl italic">
            Consistent one will alway stay ahead
          </h2>
          <img src="assets/image/gallery/gallery4.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide5 relative">
          <h2 className="absolute top-10 text-2xl italic">
            It does not matter where you are from <br />
            Only matter is what you become
          </h2>
          <img src="assets/image/gallery/gallery5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
