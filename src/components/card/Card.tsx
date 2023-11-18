import './Card.css';
import { CardBGColor, type CardProps } from './type';

const Card = (props: CardProps) => {
  const getBGColor = () => {
    switch (props.bgColor) {
      case CardBGColor.BLUE:
        return 'blue';
      case CardBGColor.RED:
        return 'red';
      case CardBGColor.YELLOW:
        return 'yellow';
    }
  };

  return (
    <div className="card-root" style={{ backgroundColor: getBGColor() }}>
      {props.desc}
    </div>
  );
};

export default Card;
