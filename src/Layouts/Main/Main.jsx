import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
