/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useBusket from "../../hooks/useBusket";
import useInstructor from "../../hooks/useInstructor";

const ClassCard = ({ item }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  // TODO: class entire card background will be red
  const { user } = useAuth();
  const { refetch } = useBusket();
  const { _id, image, name, instructor, seats, price } = item;

  const handleAddToBusket = (course) => {
    if (user && user?.email) {
      const courseData = {
        courseId: _id,
        name,
        image,
        price,
        enrolled: "none",
        email: user?.email,
        userName: user?.displayName,
        userId: user?.uid,
      };
      fetch("http://localhost:5000/taken-courses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            Swal.fire({
              position: "top-start",
              icon: "warning",
              title: "This course is already added to your list",
              showConfirmButton: false,
              timer: 1000,
            });
          }
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-start",
              icon: "success",
              title: "The course is added to your course list",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    }
  };

  return (
    <div
      className={`card w-96 shadow-xl ${seats === 0 ? "bg-red-500" : "glass"}`}
    >
      <div className="p-2">
        <div className="avatar">
          <div className=" rounded-md">
            <img src={image} />
          </div>
        </div>
      </div>

      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">{name}</h2>
        <p>Master: {instructor}</p>
        <p>Available seats: {seats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          {isAdmin || isInstructor ? (
            <button className="btn-custom" disabled>
              Enroll
            </button>
          ) : (
            <>
              {user && user?.email && seats >= 1 ? (
                <button
                  className="btn-custom"
                  onClick={() => handleAddToBusket(item)}
                >
                  Enroll
                </button>
              ) : (
                <button className="btn-custom" disabled>
                  Enroll
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
