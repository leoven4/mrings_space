import { Outlet, Link } from "react-router-dom"; // must be nested in a BrowserRouter component
import { Fragment } from "react"; // allow to use a wrapping div without rendering an actual <div> in the DOM
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo_container" to="/">
          <CrwLogo className="logo" />
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
