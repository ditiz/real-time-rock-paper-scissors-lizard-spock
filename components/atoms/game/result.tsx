import { ReactNode } from "react"

interface ResultAtomProps {
  children: ReactNode
}

const ResultAtom: React.FC<ResultAtomProps> = ({ children }) => {
  return <section className="game__result">{children}</section>
}

export default ResultAtom
