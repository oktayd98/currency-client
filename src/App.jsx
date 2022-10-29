import Container from './components/Container';
import PairForm from './components/PairForm';
import PairList from './components/PairList';

function App() {
  return (
    <Container>
      <div className="flex flex-col gap-3">
        <PairForm />
        <PairList />
      </div>
    </Container>
  );
}

export default App;
