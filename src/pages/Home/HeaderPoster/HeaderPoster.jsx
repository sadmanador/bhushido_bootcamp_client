import Banner from "../Banner/Banner";
import { Fade, Slide } from "react-awesome-reveal";

const HeaderPoster = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('assets/image/banner/bg/banner.avif')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-gradient-to-r from-slate-600">
        <div className="grid grid-cols-2  gap-40 py-32 lg:mx-28">
          <div className="text-white ml-20">
            <Fade
              delay={1e3}
              cascade
              damping={1e-1}
              className="text-3xl font-semibold lg:text-4xl mb-5 russo-one-regular"
            >
              Discover the Way of the Warrior at <br />
              <span>Bushido Bootcamp</span>: Unleash Your Potential!
            </Fade>
            <div className="hidden lg:block">
              <Slide direction="up" duration="3000">
                Welcome to Bushido Bootcamp, the ultimate destination for
                martial arts enthusiasts seeking a transformative summer
                experience! Immerse yourself in the ancient traditions of the
                warrior&apos;s code as you embark on a thrilling journey of
                self-discovery and personal growth. Our camp is a haven where
                discipline, honor, and physical prowess merge to create an
                unforgettable adventure.
              </Slide>
            </div>
          </div>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HeaderPoster;
