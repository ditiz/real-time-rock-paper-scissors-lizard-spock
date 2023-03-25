import { ReactNode } from "react"

interface NavbarAtomProps {
  children: ReactNode
}

const NavbarAtom: React.FC<NavbarAtomProps> = ({ children }) => {
  return <nav className="navbar">{children}</nav>
}

export default NavbarAtom
