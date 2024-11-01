import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component

import Gallery from "./routes/gallery/Gallery.jsx";
import Intro from "./routes/intro/intro.jsx";
import Contacts from "./routes/contacts/contacts.jsx";

import CasaFederico from "./routes/w_casa_federico/casa_federico.jsx"
import Guardia25 from "./routes/w_guardia25/guardia25.jsx";
import Misa32 from "./routes/w_misa32/misa32.jsx";
import Torre from "./routes/w_torre/torre.jsx";
import TerrazzaNancy from "./routes/w_terrazza_nancy/w_terrazza_nancy.jsx";
import WaterAndRoses from "./routes/w_water_and_roses/w_water_and_roses.jsx";
import Skyclimber from "./routes/w_skyclimber/skyclimber.jsx";
import GardenBall from "./routes/w_garden_ball/garden_ball.jsx";
import Muba from "./routes/w_muba/muba.jsx";
import Fair from "./routes/w_fair/fair.jsx";
import Nordstadt from "./routes/w_nordstadt/nordstadt.jsx";
import SavaValley from "./routes/w_sava_valley/sava_valley.jsx";
import CasaAndrea from "./routes/w_casa_andrea/casa_andrea.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Gallery />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/intro' element={<Intro />} />

        <Route path='/casa federico' element={<CasaFederico />} />
        <Route path='/casa andrea' element={<CasaAndrea />} />

        <Route path='/guardia25' element={<Guardia25 />} />
        <Route path='/misa32' element={<Misa32 />} />
        <Route path='/la torre' element={<Torre />} />
        <Route path='/terrazza nancy' element={<TerrazzaNancy />} />
        <Route path='/water and roses' element={<WaterAndRoses />} />
        <Route path='/skyclimber ticinum' element={<Skyclimber />} />
        <Route path='/garden ball' element={<GardenBall />} />
        <Route path='/muba' element={<Muba />} />
        <Route path='/fair booth' element={<Fair />} />
        <Route path='/nordstadt' element={<Nordstadt />} />
        <Route path='/sava valley' element={<SavaValley />} />

        
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;


