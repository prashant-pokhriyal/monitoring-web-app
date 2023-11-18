import Card from '../card/Card';
import type { CardsProps } from './type';
import './Cards.css';

const Cards = (props: CardsProps) => {
  return (
    <div className="cards-root">
      {props.cards.map((card) => {
        return <Card key={card.desc} desc={card.desc} bgColor={card.bgColor} />;
      })}
    </div>
  );
};

export default Cards;
