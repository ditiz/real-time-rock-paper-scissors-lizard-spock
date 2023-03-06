export enum Option {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  lizard = "lizard",
  spock = "spock",
}

export enum GameResult {
  tie = "tie",
  win = "win",
  lose = "lose",
}

export interface ImageOption {
  name: string
  path: string
  alt: string
  value: Option
}
