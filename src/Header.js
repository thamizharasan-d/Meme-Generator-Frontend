import './Header.css';
import Logo from './Logo.jpg'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <div  className="Header">
            <img id='img' src={Logo} alt="Logo" />
            <h1 id='he1'>MEME GENERATOR</h1>
            <h3 id='h41'><Link to="/" style={{ textDecoration: 'none', color:'white' }}>LOGIN</Link></h3>
            <h3 id='h42'><Link to="/Signup" style={{ textDecoration: 'none',color:'white'  }}>SIGN UP</Link></h3>
        </div>
    </div>
  );
}

export default Header;