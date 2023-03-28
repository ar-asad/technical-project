
import AllCards from './component/AllCards/AllCards';
import Header from './component/Header/Header';
import MangeExplore from './component/MangeExplore/MangeExplore';
import TechnicMange from './component/TechnicMange/TechnicMange';

function App() {
  return (
    <div>
      <Header></Header>
      <TechnicMange></TechnicMange>
      <MangeExplore></MangeExplore>
      <AllCards></AllCards>
    </div>
  );
}

export default App;
