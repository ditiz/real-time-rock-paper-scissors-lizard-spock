import { TextAtom } from "@/components/atoms"
import { RulesDetailsOrganism } from "@/components/organisms"

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

      <RulesDetailsOrganism />
    </article>
  )
}
