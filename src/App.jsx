import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component
import Gallery from "./routes/gallery/gallery.jsx";
import LandingPage from "./routes/landing/landing.jsx";
import Intro from "./routes/intro/intro.jsx";
import WorkGuardia25 from "./routes/work/work.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/work' element={<WorkGuardia25 />} />
      </Route>
    </Routes>
  );
};

export default App;


