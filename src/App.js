import Home from './Components/Home/Home';
import Bio from './Components/Bio/Bio';
import Instagram from './Components/Instagram/Instagram';
import Music from './Components/Music/Music';
import Videos from './Components/Videos/Videos';
import Topbar from './Components/Topbar/Topbar';
import Botbar from './Components/Botbar/Botbar';

function App() {
  return (
    <>
    <div>
      <Topbar />
      <Home />
      <Music />      
      <Bio />
      <Videos />
      <Instagram />
      <Botbar/>
    </div>
    </>
  );
}

export default App;
