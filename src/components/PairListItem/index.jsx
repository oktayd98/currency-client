import { classNames } from '@/utils/classNames';
import { useState } from 'react';

const PairListItem = ({ pair, onDeleteClick = () => null }) => {
  const [loading, setLoading] = useState(false);

  const deleteItem = async () => {
    try {
      setLoading(true);
      await onDeleteClick(pair.id);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <tr className={classNames('group', loading ? 'opacity-30' : '')}>
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
        <button
          className="py-2 px-4 invisible group-hover:visible text-red-600 hover:text-red-500"
          onClick={deleteItem}
          disabled={loading}
        >
          Sil
        </button>
      </td>
    </tr>
  );
};
export default PairListItem;
