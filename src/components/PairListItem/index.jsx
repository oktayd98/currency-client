const PairListItem = ({ pair }) => {
  return (
    <tr className="group">
      <td className="py-2 px-4 text-left group-hover:bg-blue-100 rounded-l-lg">
        <span>{pair.base}</span>
      </td>
      <td className="py-2 px-4 text-left group-hover:bg-blue-100">
        <span>{pair.target}</span>
      </td>
      <td className="py-2 px-4 text-left group-hover:bg-blue-100">
        <span>{pair.rate || 0}</span>
      </td>
      <td className="text-left group-hover:bg-blue-100 rounded-r-lg">
        <button className="py-2 px-4 invisible group-hover:visible text-red-600 hover:text-red-500">
          Sil
        </button>
      </td>
    </tr>
  );
};
export default PairListItem;
