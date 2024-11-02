import { Outlet, Link } from "react-router-dom"; // must be nested in a BrowserRouter component
import { Fragment } from "react"; // allow to use a wrapping div without rendering an actual <div> in the DOM
import "./navigation.scss";

const Navigation = () => {
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo_container" to="/">
          <img src="https://drive.google.com/thumbnail?id=1Q6doHPrZbbX4-1WmL7zSpxB7uH2C0mro&sz=w1000" alt="?" className="logo"></img>
        </Link>
        <div className="nav_links_container">
          <Link className="nav_link" to="/gallery">
            WORK
          </Link>
          <Link className="nav_link" to="/intro">
            ABOUT ME
          </Link>
          <Link className="nav_link" to="/contacts">
            CONTACT
          </Link>
        </div>
      </div>

      <hr/>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
