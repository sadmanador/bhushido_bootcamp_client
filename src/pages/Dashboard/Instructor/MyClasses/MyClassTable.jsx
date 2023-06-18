import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyClassTable = ({ item }) => {

  const { name, image, enrolled, status, feedback, price, _id, seats } = item;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Price: ${price}</div>
            <div className="text-sm opacity-50">Seats available: {seats}</div>
          </div>
        </div>
      </td>
      <td>{enrolled}</td>
      <td>{status == 'denied' ? <span className="text-red-600">{status}</span>:<span className="text-green-500">{status}</span>}</td>
      <td>{feedback ? feedback : "no feedbacks"}</td>
      <th>
        <Link to={`${_id}`} className="btn btn-ghost btn-xs">
          <AiFillEdit className="text-xl" /> Edit
        </Link>
      </th>
    </tr>
  );
};

export default MyClassTable;
