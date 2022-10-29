import useFetch from '@/hooks/useFetch';
import PairListHead from '../PairListHead';
import PairListItem from '../PairListItem';

const PairList = () => {
  const { data = [], isLoading, isError } = useFetch({ url: '/conversation_pairs' });

  return (
    <>
      <table className="table-auto">
        <thead>
          <PairListHead />
        </thead>
        <tbody>
          {data.map((pair) => (
            <PairListItem key={pair.id} pair={pair} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PairList;
