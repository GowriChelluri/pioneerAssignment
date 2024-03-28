import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io"
import { AiOutlineHome } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { HiOutlineCube } from "react-icons/hi2";
import { BsArrowDownUp } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { RiWallet3Line } from "react-icons/ri"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavigationBar=()=>(
<div className='bg-container'>
   <div className="logo-name-hamberger-menu-container">
         <img src="https://res.cloudinary.com/dzcwfwoom/image/upload/v1711534744/logo2_dtyl0n.png" alt="not found" className='logo'/>
         <GiHamburgerMenu className='hamburger-icon'/>
   </div>
   <div className='search-container'>
      <IoIosSearch className="search-icon"/>
      <input type="search" placeholder="Search" className='input'/>
   </div>
   <div className='nav-bottom-container'>
      <nav className='nav-container'>
         <div className='each-item-container'>
            <AiOutlineHome className='each-icon active'/>
            <p className='each-icon-name active'>Home</p>
         </div>
         <div className='each-item-container'>
            <CgOrganisation className='each-icon'/>
            <p className='each-icon-name'>Organization</p>
         </div>
         <div className='each-item-container'>
            <HiOutlineCube className='each-icon'/>
            <p className='each-icon-name'>Assets</p>
         </div>
         <div className='each-item-container'>
            <BsArrowDownUp className='each-icon'/>
            <p className='each-icon-name'>Trade</p>
         </div>
         <div className='each-item-container'>
            <CgSandClock className='each-icon'/>
            <p className='each-icon-name'>History</p>
         </div>
         <div className='each-item-container'>
            <RiWallet3Line className='each-icon'/>
            <p className='each-icon-name'>Wallet</p>
         </div>
         
      </nav>
      <div className='bottom-container'>
         <div className='each-item-container'>
               <IoIosNotificationsOutline className='each-icon'/>
               <p className='each-icon-name'>Notification</p>
         </div>
         <div className='each-item-container'>
            <MdOutlineContactSupport className='each-icon'/>
            <p className='each-icon-name'>Support</p>
         </div>
         <div className='each-item-container'>
            <IoSettingsOutline className='each-icon'/>
            <p className='each-icon-name'>Settings</p>
         </div>
         <div className='user-name-box-container'>
            <CgProfile className='user-profile'/>
            <div className="name-email-container">
               <h1 className='name'>Chelluri GowriPriya</h1>
               <p className='email'>gowrichelluri08@gmail.com</p>
            </div>
            <BsThreeDotsVertical className='three-dots'/>
         </div>
      </div>
      
   </div>

</div>
)

export default NavigationBar