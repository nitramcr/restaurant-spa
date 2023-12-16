import { useState } from 'react'
import './Navbar.css'
import images from '../../constants/images'
import { GiHamburgerMenu as MenuBtn } from 'react-icons/gi'
import { MdOutlineRestaurantMenu as RestoMenuBtn } from 'react-icons/md'

const NavbarLi = () => (
    <>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </>
)

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.gericht} alt='app logo' />
            </div>

            <ul className='app__navbar-links'>
                <NavbarLi />
            </ul>

            <div className='app__navbar-login'>
                <a href='#login' className='p__opensans'>Log In / Registration</a>
                <div />
                <a href='/' className='p__opensans'>Book Table</a>
            </div>

            <div className='app__navbar-smallscreen'>
                <MenuBtn color='#fff' fontSize={27} cursor='pointer' onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <RestoMenuBtn fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <NavbarLi />
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}