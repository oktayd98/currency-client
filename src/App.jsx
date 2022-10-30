import Container from './components/Container';
import Converter from './components/Converter';
import PairForm from './components/PairForm';
import PairList from './components/PairList';

function App() {
  return (
    <Container>
      <Converter />
      <div className="flex flex-col gap-3 w-full max-w-md">
        <PairForm />
        <PairList />
      </div>
    </Container>
  );
}

export default App;
