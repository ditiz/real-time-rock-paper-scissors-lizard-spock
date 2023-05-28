import Link from "next/link"
import React, { ReactNode } from "react"
import styles from "./GameSelectionOption.module.css"

interface GameSelectionOptionMoleculeProps {
  name: string
  link: string
  children?: ReactNode
}

const GameSelectionOptionMolecule: React.FC<
  GameSelectionOptionMoleculeProps
> = ({ name, link, children }) => {
  return (
    <article className={styles.card}>
      <Link href={link}>
        <div>
          <h2>{name}</h2>

          {children}
        </div>
      </Link>
    </article>
  )
}

export default GameSelectionOptionMolecule
