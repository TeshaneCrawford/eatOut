import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../../constants/images';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link href="/"><a>Home</a></Link></li>
        <li className="p__opensans"><Link href="/about"><a>About</a></Link></li>
        <li className="p__opensans"><Link href="/menu"><a>Menu</a></Link></li>
        <li className="p__opensans"><Link href="/awards"><a>Awards</a></Link></li>
        <li className="p__opensans"><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
      <div className="app__navbar-login">
        <li className="p__opensans"><Link href="#login"><a>Log In / Registration</a></Link></li>
        <div />
        <li className="p__opensans"><Link href="/" ><a>Book Table</a></Link></li>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link href="/" onClick={() => setToggleMenu(false)}><a>Home</a></Link></li>
              <li><Link href="/about" onClick={() => setToggleMenu(false)}><a>About</a></Link></li>
              <li><Link href="/menu" onClick={() => setToggleMenu(false)}><a>Menu</a></Link></li>
              <li><Link href="/awards" onClick={() => setToggleMenu(false)}><a>Awards</a></Link></li>
              <li><Link href="/contact" onClick={() => setToggleMenu(false)}><a>Contact</a></Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;