import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
    <div className='header-container'>
        <img className="logo" src={logo} alt="" />
        <ul className='nav'>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglages</li>
            <li>Communauté</li>
        </ul>
    </div>
    )
}


export default Header