import './Header.css';
import logo from '../../../public/test1.png';

function Header() {
  return (
    <div className="background-header">
      <div className="bloc">
        <img src={logo} className="logo" alt="Logo voltasic" />
        <input placeholder="Search" className="search-bar" />
      </div>
    </div>
  );
}
export default Header;
