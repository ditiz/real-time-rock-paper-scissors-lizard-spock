import rulesImage from "@/public/imgs/rules.webp"
import Image from "next/image"

export default function Rules() {
  return (
    <article className="rules">
      <section>
        <p>
          The game is an expansion on the game Rock, Paper, Scissors. Each
          player picks a variable and reveals it at the same time. The winner is
          the one who defeats the others. In a tie, the process is repeated
          until a winner is found.
        </p>
      </section>
      <section className="rules__details">
        <div>
          <Image src={rulesImage} alt="rules" width={500} height={500} />
        </div>
        <div>
          <p>Scissors cuts Paper</p>
          <p>Paper covers Rock</p>
          <p>Rock crushes Lizard</p>
          <p>Lizard poisons Spock</p>
          <p>Spock smashes Scissors</p>
          <p>Scissors decapitates Lizard</p>
          <p>Lizard eats Paper</p>
          <p>Paper disproves Spock</p>
          <p>Spock vaporizes Rock</p>
          <p>(and as it always has) Rock crushes Scissors</p>
        </div>
      </section>
    </article>
  )
}
