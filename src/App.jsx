import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component

import Gallery from "./routes/gallery/Gallery.jsx";
import Intro from "./routes/intro/intro.jsx";
import Contacts from "./routes/contacts/contacts.jsx";

import CasaFederico from "./routes/works/casa_federico.jsx"
import CasaMartina from "./routes/works/casa_martina.jsx";
import Torre from "./routes/works/torre.jsx";
import TerrazzaNancy from "./routes/works/terrazza_nancy.jsx";
import WaterAndRoses from "./routes/works/water_and_roses.jsx";
import Skyclimber from "./routes/works/skyclimber.jsx";
import GardenBall from "./routes/works/garden_ball.jsx";
import Muba from "./routes/works/muba.jsx";
import Fair from "./routes/works/fair.jsx";
import Nordstadt from "./routes/works/nordstadt.jsx";
import SavaValley from "./routes/works/sava_valley.jsx";
import CasaAndrea from "./routes/works/casa_andrea.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Gallery />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/intro' element={<Intro />} />

        <Route path='/casa_martina' element={<CasaMartina />} />
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


