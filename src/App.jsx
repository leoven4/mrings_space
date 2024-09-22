import Navigation from "./routes/navigation/navigation.jsx"
import { Routes, Route } from 'react-router-dom'  // must be nested in a BrowserRouter component
import Gallery from "./routes/gallery/gallery.jsx";
import LandingPage from "./routes/landing/landing.jsx";
import Intro from "./routes/intro/intro.jsx";
import Guardia25 from "./routes/guardia25/guardia25.jsx";
import Contacts from "./routes/contacts/contacts.jsx";
import Footer from "./routes/footer/footer.jsx"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Gallery />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/guardia25' element={<Guardia25 />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;


