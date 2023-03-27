import { navbarLinks } from "@/utils/navigation"
import Link from "next/link"
import { NavbarAtom } from "../atoms"

interface NavbarOrganismProps {}

const NavbarOrganism: React.FC<NavbarOrganismProps> = () => {
  return (
    <NavbarAtom>
      <div>
        {navbarLinks.map((link) => (
          <Link href={link.path}>{link.name}</Link>
        ))}
      </div>
    </NavbarAtom>
  )
}

export default NavbarOrganism
