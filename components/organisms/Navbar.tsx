import Logo from "@/public/imgs/logo.png"
import { navbarLinks } from "@/utils/navigation"
import Image from "next/image"
import Link from "next/link"
import { NavbarAtom } from "../atoms"
import styles from "./Navbar.module.css"

interface NavbarOrganismProps {}

const NavbarOrganism: React.FC<NavbarOrganismProps> = () => {
  return (
    <NavbarAtom>
      <div className={styles.navbar__logo}>
        <Image src={Logo} alt="logo" height={25} width={25} />
      </div>
      <div className={styles.navbar__links}>
        {navbarLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </NavbarAtom>
  )
}

export default NavbarOrganism
