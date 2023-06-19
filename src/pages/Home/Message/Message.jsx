import SectionHeader from "../../../elements/SectionHeader";
import SectionImgBg from "../../../elements/SectionImgBg";

const Message = () => {
  return (
    <SectionImgBg
      bg_img={
        "https://images.pexels.com/photos/1367188/pexels-photo-1367188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    >
        <SectionHeader heading="Leave us a message" subHeading="Our customer service executive are 24/7 ready to deal with any of you query"/>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Unleash Your Inner Warrior! Join Bushido Camp Today 🥋
            </h1>
            <p className="py-6">
              "Dear Martial Arts Enthusiasts, Are you ready to embark on an
              extraordinary journey of self-discovery, discipline, and honor?
              Look no further than Bushido Camp, where we bring the art of
              martial arts to life! Whether you're a beginner or an experienced
              practitioner, Bushido Camp offers a transformative experience like
              no other. Our expert instructors are dedicated to helping you
              unlock your full potential and guide you towards becoming the best
              version of yourself. Immerse yourself in our comprehensive courses
              that cover a wide range of martial arts disciplines. From striking
              techniques to grappling maneuvers, our carefully crafted programs
              will challenge you, build your strength, and enhance your mental
              focus.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn-custom">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionImgBg>
  );
};

export default Message;
