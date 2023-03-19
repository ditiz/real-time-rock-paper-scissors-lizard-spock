import { ReactNode } from "react"

interface HeaderAtomProps {
  children: ReactNode
}

const HeaderAtom: React.FC<HeaderAtomProps> = ({ children }) => {
  return <header className="header">{children}</header>
}

export default HeaderAtom
