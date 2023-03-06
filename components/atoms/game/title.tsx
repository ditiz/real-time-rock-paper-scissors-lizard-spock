interface GameTitleProps {
  children: React.ReactNode
}

const GameTitle: React.FC<GameTitleProps> = ({ children }) => {
  return <h2 className="game__title">{children}</h2>
}

export default GameTitle
