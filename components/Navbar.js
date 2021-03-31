import Link from "next/link";
import NavbarStyles from "styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={NavbarStyles.nav}>
			<img src="/banner.png" width="180" height="70" />
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/solution">Our Solution</Link>
				</li>
				<li>
					<Link href="/benifits">Benifits</Link>
				</li>
				<li>
					<Link href="/applications">Applications</Link>
				</li>
				<li>
					<Link href="/about">About Us</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
