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

        <Route path='/casa_federico' element={<CasaFederico />} />
        <Route path='/casa_andrea' element={<CasaAndrea />} />
        <Route path='/terrazza_nancy' element={<TerrazzaNancy />} />
        <Route path='/torre' element={<Torre />} />
        <Route path='/water_and_roses' element={<WaterAndRoses />} />
        <Route path='/skyclimber_ticinum' element={<Skyclimber />} />
        <Route path='/garden_ball' element={<GardenBall />} />
        <Route path='/muba' element={<Muba />} />
        <Route path='/fair_booth' element={<Fair />} />
        <Route path='/nordstadt' element={<Nordstadt />} />
        <Route path='/sava_valley' element={<SavaValley />} />
        
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;


