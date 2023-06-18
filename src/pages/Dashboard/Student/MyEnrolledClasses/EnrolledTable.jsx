const EnrolledTable = ({ item }) => {
    const {name, image, _id, price} = item

    console.log(item)
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {_id}
        </td>
        <td>
            ${price}
        </td>
        
        
      </tr>
    </>
  );
};

export default EnrolledTable;
