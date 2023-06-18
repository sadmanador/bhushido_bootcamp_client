const ClassCard = ({ item }) => {
  const { image, name, instructor, seats, price, instructor_img, enrolled } = item;
  return (
    <div className="card lg:w-96 m-4 lg:m-0 glass shadow-xl rounded-3xl rounded-tr-none rounded-bl-none">
      <div className="relative mb-9">
        <div className="avatar">
          <div className="rounded-3xl rounded-tr-none rounded-bl-none rounded-br-none">
            <img src={image} />
          </div>
        </div>
        <div className="avatar absolute -bottom-10 left-36">
          <div className="w-24 mask mask-hexagon">
            <img src={instructor_img} />
          </div>
        </div>
      </div>
      <div className="card-body items-center text-center">
        <p>Master: {instructor}</p>
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Total students: {enrolled}</p>
        <p>Seats: {seats}</p>
      </div>
    </div>
  );
};

export default ClassCard;
