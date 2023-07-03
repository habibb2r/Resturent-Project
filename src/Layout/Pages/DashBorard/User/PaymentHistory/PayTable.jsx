

const PayTable = ({item, index}) => {
    const getdate = new Date(item.date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const date = getdate.toLocaleString('en-US', options);
      console.log(date)
    return (
        <tr className="text-center text-base">
                <td>
                <label>
                    <p>{index+1}</p>
                </label>
                </td>
                <td>
                <p>{item.email}</p>
                </td>
                <td>
                <p>{item.transactionId}</p>
                </td>
                <td className="">${item.price}</td>
                <td className="">{item.quantity}</td>
                <td>
                <p>{date}</p>
                </td>
        </tr>
    );
};

export default PayTable;