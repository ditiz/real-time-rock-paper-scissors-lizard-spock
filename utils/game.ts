import { GameResult, ImageOption, Option } from "@/types/game"

export const imageOptions: ImageOption[] = [
  {
    name: "rock",
    path: "icons/rock.svg",
    alt: "rock icon",
    value: Option.rock,
  },
  {
    name: "paper",
    path: "icons/paper.svg",
    alt: "paper icon",
    value: Option.paper,
  },
  {
    name: "scissors",
    path: "icons/scissors.svg",
    alt: "scissors icon",
    value: Option.scissors,
  },
  {
    name: "lizard",
    path: "icons/lizard.svg",
    alt: "lizard icon",
    value: Option.lizard,
  },
  {
    name: "spock",
    path: "icons/spock.svg",
    alt: "spock icon",
    value: Option.spock,
  },
]

// Object that define against what an option win
const actions = {
  [Option.rock]: [Option.scissors, Option.lizard],
  [Option.paper]: [Option.rock, Option.spock],
  [Option.scissors]: [Option.paper, Option.lizard],
  [Option.lizard]: [Option.paper, Option.spock],
  [Option.spock]: [Option.rock, Option.scissors],
}

/**
 * Say who win the game
 * @param choice
 * @param opponentChoice
 * @returns 0 for tie, 1 for win, -1 for lose
 */
export function playGame(choice: Option, opponentChoice: Option): GameResult {
  // Check tie
  if (choice === opponentChoice) {
    return GameResult.tie
  }

  // Check if win
  if (actions[choice].includes(opponentChoice)) {
    return GameResult.win
  }

  // If no tie or win, it's lose
  return GameResult.lose
}
