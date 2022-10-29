import Select from 'react-select';
import Button from '../Button';

const options = [
  { value: 1, label: 'USD' },
  { value: 2, label: 'EUR' },
  { value: 3, label: 'TRY' },
];

const PairForm = () => {
  return (
    <form className="flex items-center gap-3 bg-white shadow-lg p-4 rounded-md sticky top-1">
      <Select
        className="w-32 min-w-[8rem]"
        options={options}
        isClearable={true}
        isSearchable={true}
        placeholder="Base"
      />
      <Select
        className="w-32 min-w-[8rem]"
        options={options}
        isClearable={true}
        isSearchable={true}
        placeholder="Target"
      />
      <Button>Kaydet</Button>
    </form>
  );
};

export default PairForm;
