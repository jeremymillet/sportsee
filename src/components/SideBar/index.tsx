import SidebarIcon from '../SideBarIcon/index';
import SidebarImg1 from '../../assets/sidebar-logo-1.svg'
import SidebarImg2 from '../../assets/sidebar-logo-2.svg'
import SidebarImg3 from '../../assets/sidebar-logo-3.svg'
import SidebarImg4 from '../../assets/sidebar-logo-4.svg'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-icons-container'>
                <SidebarIcon imgSrc={SidebarImg1} />
                <SidebarIcon imgSrc={SidebarImg2} />
                <SidebarIcon imgSrc={SidebarImg3} />
                <SidebarIcon imgSrc={SidebarImg4}/>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidebar



