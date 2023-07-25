import "./Header.scss";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import ArtistImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__links">
          <li className="header__link">
            <img className="header__logo" src={Logo} alt="Logo" />
          </li>
        </ul>
      </nav>
      <div className="header__container">
        <form className="header__form">
          <input
            className="header__search"
            type="search"
            placeholder="Search"
          />
        </form>
        <img className="header__avatar" src={ArtistImage} alt="Artist Avatar" />
      </div>
    </header>
  );
}

export default Header;
