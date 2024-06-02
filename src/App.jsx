import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component
import Gallery from "./routes/gallery/Gallery.jsx";
import LandingPage from "./routes/landing/landing.jsx";
import Intro from "./routes/intro/intro.jsx";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path='/gallery' index element={<Gallery />} />
        <Route path='/intro' index element={<Intro />} />
      </Route>
    </Routes>
  );
};

export default App;


