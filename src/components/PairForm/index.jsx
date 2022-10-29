import { PairContext } from '@/context/pair';
import request from '@/utils/request';
import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import Button from '../Button';

const PairForm = () => {
  const { pairs, setPairs } = useContext(PairContext);
  const [currencies, setCurrencies] = useState([]);
  const [form, setForm] = useState({ base_id: null, target_id: null });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (Object.values(form).some((e) => e === null)) {
      return;
    }

    try {
      setLoading(true);
      const res = await request('/conversation_pairs', {
        method: 'post',
        body: JSON.stringify({
          pair: { base_id: form.base_id.value, target_id: form.target_id.value },
        }),
      });
      setPairs([res.data, ...pairs]);
      setForm({ base_id: null, target_id: null });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await request('/currencies');
      setCurrencies(res.data.map((currency) => ({ value: currency.id, label: currency.name })));
    };
    getCurrencies();
  }, []);

  return (
    <form
      className="flex items-center gap-3 bg-white shadow-lg p-4 rounded-md sticky top-1"
      onSubmit={submit}
    >
      <Select
        name="base_id"
        className="w-32 min-w-[8rem]"
        options={currencies}
        isClearable={true}
        isSearchable={true}
        placeholder="Base"
        onChange={(value) => setForm({ ...form, base_id: value })}
        value={form.base_id}
      />
      <Select
        name="target_id"
        className="w-32 min-w-[8rem]"
        options={currencies}
        isClearable={true}
        isSearchable={true}
        placeholder="Target"
        onChange={(value) => setForm({ ...form, target_id: value })}
        value={form.target_id}
      />
      <Button disabled={loading}>Kaydet</Button>
    </form>
  );
};

export default PairForm;
