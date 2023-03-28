import { ReactNode } from "react"
import styles from "./Navbar.module.css"

interface NavbarAtomProps {
  children: ReactNode
}

const NavbarAtom: React.FC<NavbarAtomProps> = ({ children }) => {
  return <nav className={styles.navbar}>{children}</nav>
}

export default NavbarAtom
