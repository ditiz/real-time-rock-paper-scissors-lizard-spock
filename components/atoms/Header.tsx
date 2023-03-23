import { ReactNode } from "react"
import styles from "./Header.module.css"

interface HeaderAtomProps {
  children: ReactNode
}

const HeaderAtom: React.FC<HeaderAtomProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>
}

export default HeaderAtom
