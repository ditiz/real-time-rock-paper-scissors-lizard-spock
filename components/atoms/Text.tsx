import { ReactNode } from "react"
import styles from "./Text.module.css"

interface TextAtomProps {
  children: ReactNode
}

const TextAtom: React.FC<TextAtomProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>
}

export default TextAtom
