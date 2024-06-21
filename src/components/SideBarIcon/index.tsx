import './SideBarIcon.css'

type SideBarIconprops = {
    imgSrc: string
}
const SideBarIcon: React.FC<SideBarIconprops> = ({ imgSrc }) =>{
    return (
        <div className='sidebar-icon'>
            <img src={imgSrc} alt="" />
        </div>
    )
}

export default SideBarIcon