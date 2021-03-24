import Link from "next/link";
import NavbarStyles from "styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
