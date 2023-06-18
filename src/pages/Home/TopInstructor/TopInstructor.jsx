import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../../elements/SectionHeader";
import InstructorCard from "../../../elements/InstructorCard";
import SectionImgBg from "../../../elements/SectionImgBg";

const TopInstructor = () => {
  const classes = useLoaderData();
  return (
    <SectionImgBg
      bg_img={
        "https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMTUvNnUwYmw4a3FobF9UaGFpbGFuZF9XUE5fVHVkb25nXzY2LmpwZyJdXQ/a7840afb6e7d1efe/Thailand_WPN_Tudong_66.jpg"
      }
    >
      <div className="pb-10">
        <SectionHeader
          heading="Most Popular Masters"
          subHeading="Feel the ZEN of a real 'shaolin master'"
        />
        <div className="flex justify-center">
          <div className="lg:grid grid-cols-3 gap-5">
            {classes.map((item, index) => {
              return (
                <InstructorCard
                  key={index}
                  item={item}
                  email={true}
                  btn={true}
                ></InstructorCard>
              );
            })}
          </div>
        </div>
      </div>
    </SectionImgBg>
  );
};

export default TopInstructor;
