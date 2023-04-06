import { RulesMainMolecule } from "@/components/molecules"
import { NavbarOrganism, RulesDetailsOrganism } from "@/components/organisms"

interface RulesTemplateProps {}

const RulesTemplate: React.FC<RulesTemplateProps> = () => {
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

export default RulesTemplate
