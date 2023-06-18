const HistoryTable = ({ item, index }) => {
  const { email, date, courseId, name, price, transactionId } = item;

  const dateStr = new Date(date);

  const hours = String(dateStr.getHours()).padStart(2, '0');
  const minutes = String(dateStr.getMinutes()).padStart(2, '0');
  const ampm = dateStr.getHours() >= 12 ? 'PM' : 'AM';
  const day = String(dateStr.getDate()).padStart(2, '0');
  const month = String(dateStr.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
  const year = String(dateStr.getFullYear()).slice(-2); // Extract the last two digits of the year
  
  const formattedDate = `${hours}:${minutes} ${ampm} ${day}/${month}/${year}`;


  console.log(dateStr);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{transactionId}</td>
      <td>{name}</td>
      <td>{courseId}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export default HistoryTable;
