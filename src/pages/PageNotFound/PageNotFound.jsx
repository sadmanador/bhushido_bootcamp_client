import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center text-center">
      <div>
        <div>
          <img src="assets/image/404/404.jpg" alt="" />
        </div>
        <div className="mt-10">
          <Link className="btn-custom" to="/">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
