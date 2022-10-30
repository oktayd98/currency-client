import { PairContext } from '@/context/pair';
import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';

const Converter = () => {
  const { pairs, setPairs } = useContext(PairContext);
  const [values, setValues] = useState({ base: '', target: '' });
  const [selectedCurrencies, setSelectedCurrencies] = useState({
    base: null,
    target: null,
  });

  const baseCurrencyList = pairs?.reduce((prev, curr) => {
    if (prev.includes(curr.base)) return prev;
    else return [...prev, curr.base];
  }, []);

  const baseCurrencyOptions = baseCurrencyList.map((currency) => ({
    value: currency,
    label: currency,
  }));

  const targetCurrencyList = pairs?.reduce((prev, curr) => {
    if (prev.includes(curr.target)) return prev;
    if (curr.base === selectedCurrencies.base?.value) return [...prev, curr.target];
    return prev;
  }, []);

  const targetCurrencyOptions = targetCurrencyList.map((currency) => ({
    value: currency,
    label: currency,
  }));

  const rate =
    pairs?.find(
      (pair) =>
        pair.base === selectedCurrencies.base?.value &&
        pair.target === selectedCurrencies.target?.value,
    )?.rate || 1;

  const calculateTarget = (value, rate) => {
    const result = Number((Number(value) * Number(rate)).toFixed(4));
    setValues({ ...values, base: value, target: result });
  };

  const calculateBase = (value, rate) => {
    const result = Number((Number(value) * Number(rate)).toFixed(4));
    setValues({ ...values, target: value, base: result });
  };

  useEffect(() => {
    if (values.base && values.target) {
      calculateBase(values.target, 1 / rate);
      calculateTarget(values.base, rate);
    }
  }, [selectedCurrencies.base, selectedCurrencies.target]);

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-12 w-2/3">
      <h1 className="text-2xl">Currency Converter</h1>
      <div className="flex gap-6 justify-between mt-12">
        <div className="w-64 relative">
          <input
            className="border border-gray-200 rounded-md focus:border-blue-400 outline-none text-2xl py-2 pl-2 pr-28 w-full"
            type="text"
            onInput={(e) => calculateTarget(e.target.value, rate)}
            value={values.base}
          />
          <div className="absolute right-1 top-[6px]">
            <Select
              options={baseCurrencyOptions}
              isSearchable={true}
              placeholder="Base"
              onChange={(value) =>
                setSelectedCurrencies({ ...selectedCurrencies, base: value, target: null })
              }
              value={selectedCurrencies.base}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-gray-500">
          <span>Rate</span>
          <span>{rate}</span>
        </div>
        <div className="w-64 relative">
          <input
            className="border border-gray-200 rounded-md focus:border-blue-400 outline-none text-2xl py-2 pl-2 pr-28 w-full"
            type="text"
            onInput={(e) => calculateBase(e.target.value, 1 / rate)}
            value={values.target}
          />
          <div className="absolute right-1 top-[6px]">
            <Select
              options={targetCurrencyOptions}
              isSearchable={true}
              placeholder="Target"
              onChange={(value) => setSelectedCurrencies({ ...selectedCurrencies, target: value })}
              value={selectedCurrencies.target}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
