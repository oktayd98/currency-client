import { PairContext } from '@/context/pair';
import request from '@/utils/request';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { useContext } from 'react';
import PairListHead from '../PairListHead';
import PairListItem from '../PairListItem';

const PairList = () => {
  const { pairs, setPairs } = useContext(PairContext);

  const deletePair = async (id) => {
    try {
      await request(`/conversation_pairs/${id}`, { method: 'delete' });
      setPairs(pairs.filter((pair) => pair.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleReceived = (message) => {
    const res = JSON.parse(message);
    setPairs(res.data);
  };

  return (
    <>
      <table className="table-auto">
        <thead>
          <PairListHead />
        </thead>
        <tbody>
          {pairs.map((pair) => (
            <PairListItem key={pair.id} pair={pair} onDeleteClick={deletePair} />
          ))}
        </tbody>
      </table>
      <ActionCableConsumer channel="RatesChannel" onReceived={handleReceived} />
    </>
  );
};

export default PairList;
