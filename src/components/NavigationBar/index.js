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
   <nav>
   <AiOutlineHome />
   <p>Home</p>
   <CgOrganisation />
   <p>Organization</p>
   <HiOutlineCube />
   <p>Assets</p>
   <BsArrowDownUp />
   <p>Trade</p>
   <CgSandClock />
   <p>History</p>
   <RiWallet3Line />
   <p>Wallet</p>
   <IoIosNotificationsOutline />
   <p>Notification</p>
   <MdOutlineContactSupport />
   <p>Support</p>
   <IoSettingsOutline />
   <p>Settings</p>
   </nav>
   

</div>
)

export default NavigationBar