import { RiHotelLine } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineRoomService } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi'
import { TbClick } from 'react-icons/tb'

export const MenuItems = [
    {
        title: "Home",
        url: '/',
        cName: 'nav-links',
        icon: <RiHotelLine/>
    },
    {
        title: "About",
        url: '/about',
        cName: 'nav-links',
        icon: <FcAbout/>
    },
    {
        title: "Service",
        url: '/service',
        cName: 'nav-links',
        icon: <MdOutlineRoomService/>
    },
    {
        title: "Contact",
        url: '/contact',
        cName: 'nav-links',
        icon: <FiPhoneCall/>
    },
    {
        title: "Sign Up",
        url: '/signup',
        cName: 'nav-links-mobile',
        icon: <TbClick/>
    },

]