import { RulesMainMolecule } from "@/components/molecules"
import { NavbarOrganism, RulesDetailsOrganism } from "@/components/organisms"

export default function Rules() {
  return (
    <>
      <NavbarOrganism />
      <article className="rules">
        <RulesMainMolecule />
        <RulesDetailsOrganism />
      </article>
    </>
  )
}
