interface WaitingMessageAtomProps {
  message: string
}

const WaitingMessageAtom: React.FC<WaitingMessageAtomProps> = ({ message }) => {
  return <article className="game__waiting-message">{message}</article>
}

export default WaitingMessageAtom
