import './Header.css';
import logo from '../../../public/logo.png';

function Header() {
  return (
    <div className="background-header">
      <p>Hello</p>
      <img src={logo} className="logo" alt="Logo voltasic" />
      <input placeholder="Search" />
    </div>
  );
}
export default Header;
