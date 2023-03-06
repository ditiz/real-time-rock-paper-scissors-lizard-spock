import { ImageOption, Option } from "@/types/game"
import Image from "next/image"

interface GameOptionProps {
  option: ImageOption
  choice: Option | undefined
  setChoice: (option: Option) => void
}

export const GameOption: React.FC<GameOptionProps> = ({
  option,
  choice,
  setChoice,
}) => {
  const handleClick = (pick: Option) => {
    setChoice(pick)
  }

  return (
    <section key={option.name} onClick={() => handleClick(option.value)}>
      <Image
        src={option.path}
        width={50}
        height={50}
        alt={option.alt}
        style={{ border: choice === option.value ? "3px solid red" : "none" }}
      />
    </section>
  )
}
