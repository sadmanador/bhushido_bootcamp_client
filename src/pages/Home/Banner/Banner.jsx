import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Banner() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper hidden lg:block">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 flex flex-col">
            <img src="assets/image/banner/aikido.jpg" alt="" />
            <p>Aikido</p>
          </div>
          <div className="carousel__cell number-slide2 flex flex-col">
            <img src="assets/image/banner/judo.jpg" alt="" />
            <p>Judo</p>
          </div>
          <div className="carousel__cell number-slide3 flex flex-col">
            <img src="assets/image/banner/kendo.jpg" alt="" />
            <p>Kendo</p>
          </div>
          <div className="carousel__cell number-slide4 flex flex-col">
            <img src="assets/image/banner/kung_fu.jpg" alt="" />
            <p>Kung Fu</p>
          </div>
          <div className="carousel__cell number-slide5 flex flex-col">
            <img src="assets/image/banner/sumo.jpg" alt="" />
            <p>Sumo</p>
          </div>
          <div className="carousel__cell number-slide6 flex flex-col">
            <img src="assets/image/banner/taekwondo.webp" alt="" />
            <p>Teakwondo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
