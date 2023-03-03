import { GameResult } from "@/types/game";

interface GameResultProps {
  result: GameResult | undefined;
}

const DisplayGameResult: React.FC<GameResultProps> = ({ result: result }) => {
  // If no result, we display nothing
  if (!result) {
    return <></>;
  }

  return (
    <article className="game__result">
      {result === GameResult.tie ? <section>It&apos;s a tie</section> : null}

      {result === GameResult.win ? <section>You win !</section> : null}

      {result === GameResult.lose ? <section>You lose...</section> : null}
    </article>
  );
};

export default DisplayGameResult;
