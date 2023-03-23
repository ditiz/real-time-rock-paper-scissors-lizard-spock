import { TextAtom } from "@/components/atoms"
import rulesImage from "@/public/imgs/rules.webp"
import Image from "next/image"

export default function Rules() {
  return (
    <article className="rules">
      <section>
        <TextAtom>
          The game is an expansion on the game Rock, Paper, Scissors. Each
          player picks a variable and reveals it at the same time. The winner is
          the one who defeats the others. In a tie, the process is repeated
          until a winner is found.
        </TextAtom>
      </section>
      <section className="rules__details">
        <div>
          <Image src={rulesImage} alt="rules" width={500} height={500} />
        </div>
        <div>
          <TextAtom>Scissors cuts Paper</TextAtom>
          <TextAtom>Paper covers Rock</TextAtom>
          <TextAtom>Rock crushes Lizard</TextAtom>
          <TextAtom>Lizard poisons Spock</TextAtom>
          <TextAtom>Spock smashes Scissors</TextAtom>
          <TextAtom>Scissors decapitates Lizard</TextAtom>
          <TextAtom>Lizard eats Paper</TextAtom>
          <TextAtom>Paper disproves Spock</TextAtom>
          <TextAtom>Spock vaporizes Rock</TextAtom>
          <TextAtom>(and as it always has) Rock crushes Scissors</TextAtom>
        </div>
      </section>
    </article>
  )
}
