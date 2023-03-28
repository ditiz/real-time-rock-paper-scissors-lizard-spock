import rulesImage from "@/public/imgs/rules.webp"
import Image from "next/image"
import { TextAtom } from "../atoms"
import styles from "./RulesDetails.module.css"

interface RulesDetailsOrganismProps {}

const RulesDetailsOrganism: React.FC<RulesDetailsOrganismProps> = () => {
  return (
    <section className={styles.rules__details}>
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
  )
}

export default RulesDetailsOrganism
