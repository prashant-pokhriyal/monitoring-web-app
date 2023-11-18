import { useEffect, useState } from 'react';
import './App.css';
import { CardBGColor, CardProps } from './components/card/type';
import Cards from './components/cards/Cards';

function App() {
  let [cards, setCards] = useState<Array<CardProps>>([]);
  let [isLoading, setLoading] = useState(false);
  let [shouldReload, setShouldReload] = useState(new Date());

  const handleClick = () => {
    setShouldReload(new Date());
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const newCards = [
        {
          desc: 'Card 1',
          bgColor: CardBGColor.BLUE,
        },
        {
          desc: 'Card 2',
          bgColor: CardBGColor.YELLOW,
        },
        {
          desc: 'Card 3',
          bgColor: CardBGColor.RED,
        },
      ];

      setCards(newCards);
      setLoading(false);
      console.log('useEffect with setTimeout has been called after 3 seconds');
    }, 3000);
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        Reload
      </button>
      {isLoading && <div className="loader"></div>}
      {!isLoading && <Cards cards={cards} />}
    </div>
  );
}

export default App;
