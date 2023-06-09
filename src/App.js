
import AllCards from './component/AllCards/AllCards';
import Header from './component/Header/Header';
import JourneyBorad from './component/JourneyBorad/JourneyBorad';
import MangeExplore from './component/MangeExplore/MangeExplore';
import Sidebar from './component/Sidebar/Sidebar';
import TechnicMange from './component/TechnicMange/TechnicMange';

function App() {
  return (
    <div style={{ maxWidth: "1400px" }}>
      <Header></Header>
      <JourneyBorad></JourneyBorad>
      <Sidebar></Sidebar>
      <TechnicMange></TechnicMange>
      <MangeExplore></MangeExplore>
      <AllCards></AllCards>
    </div>
  );
}

export default App;
