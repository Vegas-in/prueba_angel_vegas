import logo from '../../assets/logo_Podo.png';
import './Header.css';

const Header = () => {
  console.log(logo);
  return (
    <header className="header">
      <img src={logo} alt="Logo Podo" className="imgLogo" />
    </header>
  );
};

export default Header;