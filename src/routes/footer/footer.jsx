import {FiLinkedin, FiMail} from "react-icons/fi";
import "./footer.scss";

let currentYear = new Date().getFullYear()

const socialLinks = [
  {
    id: 1,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/",
  },
  {
    id: 2,
    icon: <FiMail />,
    url: "https://www.linkedin.com/in/",
  },

];

const Footer = () => {
  return (
    <div className="footer_container">
      <p className="footer_text">
        {currentYear} @ Martina Anelli
      </p>
      <ul className="footer_link_container">
        {socialLinks.map((link) => (
          <a href={link.url} target="__blank" key={link.id} className="footer_link" >
            <i className="footer_link_icon">{link.icon}</i>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;