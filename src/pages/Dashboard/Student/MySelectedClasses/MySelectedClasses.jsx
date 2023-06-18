import SectionHeader from "../../../../elements/SectionHeader";
import useBusket from "../../../../hooks/useBusket";
import ClassTable from "../../../shared/ClassTable/ClassTable";

const MySelectedClasses = () => {
  const { busket } = useBusket();

  return (
    <div>
      <SectionHeader
        heading={"Payment pending"}
        subHeading={
          "Select those that you wanted to pay for, You can also delete"
        }
      ></SectionHeader>
      <div className="overflow-x-auto mb-20">
        <table className="table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {busket.map((item) => {
              return <ClassTable key={item._id} item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
