import "./Header.scss";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import ArtistImage from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__links">
          <li className="header__link">
            <Link to={"/"}>
              <img className="header__logo" src={Logo} alt="Logo" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__container">
        <form className="header__form">
          <div className="header__search-container">
            <input
              className="header__search"
              type="search"
              placeholder="Search"
            />
            <img
              className="header__avatar"
              src={ArtistImage}
              alt="Artist Avatar"
            />
          </div>
          <label for="file-upload" class="header__upload">
            <div className="header__upload-img"></div>UPLOAD
          </label>
          <Link to={"/upload/"}>
            <input
              className="header__upload-form"
              id="file-upload"
              type="file"
            />
          </Link>
        </form>
        <img
          className="header__avatar-td"
          src={ArtistImage}
          alt="Artist Avatar"
        />
      </div>
    </header>
  );
}

export default Header;
