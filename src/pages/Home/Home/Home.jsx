import Gallery from "../Gallery/Gallery";
import HeaderPoster from "../HeaderPoster/HeaderPoster";
import Message from "../Message/Message";
import OurPartners from "../OurPartners/OurPartners";
import TopClasses from "../TopClasses/TopClasses";
import TopInstructor from "../TopInstructor/TopInstructor";

const Home = () => {
  return (
    <>
      <HeaderPoster></HeaderPoster>
      <TopClasses></TopClasses>
      <OurPartners/>
      <TopInstructor></TopInstructor>
      <Gallery/>
      <Message/>
    </>
  );
};

export default Home;
