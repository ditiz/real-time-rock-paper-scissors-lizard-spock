import { navbarLinks } from "@/utils/navigation"
import Link from "next/link"
import { NavbarAtom } from "../atoms"
import styles from "./Navbar.module.css"

interface NavbarOrganismProps {}

const NavbarOrganism: React.FC<NavbarOrganismProps> = () => {
  return (
    <NavbarAtom>
      <div className={styles.navbar__logo}></div>
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
