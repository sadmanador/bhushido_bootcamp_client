const InstructorCard = ({ item, email }) => {
  const { name, instructor, seats, price, instructor_img, image } = item;
  return (
    <div className="card lg:w-96 glass shadow-xl rounded-3xl rounded-tl-none rounded-br-none lg:m-0 m-4">
      <div className="avatar">
        <div className="lg:w-96 rounded-full">
          <img src={instructor_img} />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <p className="font-semibold font-xl">Master: {instructor}</p>
        <p>Email: {item?.email}</p>
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Seats: {seats}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
