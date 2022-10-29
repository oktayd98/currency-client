import useFetch from '@/hooks/useFetch';
import { createContext } from 'react';

export const PairContext = createContext();

const PairProvider = ({ children }) => {
  const { data, setData } = useFetch({ url: '/conversation_pairs', initialData: [] });

  return (
    <PairContext.Provider value={{ pairs: data, setPairs: setData }}>
      {children}
    </PairContext.Provider>
  );
};

export default PairProvider;
