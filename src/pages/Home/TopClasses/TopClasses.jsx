import { Link, useLoaderData } from "react-router-dom";
import ClassCard from "../../../elements/ClassCard";
import SectionHeader from "../../../elements/SectionHeader";
import SectionImgBg from "../../../elements/SectionImgBg";

const TopClasses = () => {
  const classes = useLoaderData();


  return (
    <SectionImgBg
      bg_img={
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Chinese-Background-Download-Free.jpg"
      }
    >
      <div className="pb-10">
        <SectionHeader
          heading="Our Most Popular Class"
          subHeading="Welcome to our most sold classes"
        ></SectionHeader>
        <div className="flex justify-center">
          <div className="lg:grid grid-cols-3 gap-5">
            {classes.map((item, index) => {
              return <ClassCard key={index} item={item}></ClassCard>;
            })}
          </div>
        </div>
          <div className="text-center pt-10">
            <Link to='/classes' className="btn-custom">See more</Link>
          </div>
      </div>
    </SectionImgBg>
  );
};

export default TopClasses;
