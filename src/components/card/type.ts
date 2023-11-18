export enum CardBGColor {
  RED,
  BLUE,
  YELLOW,
}

export interface CardProps {
  desc: string;
  bgColor: CardBGColor;
}
