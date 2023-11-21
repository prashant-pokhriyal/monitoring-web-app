import { useState } from 'react';
import { SelfCheckoutCard } from './components/self-checkout-card';
import {
  SelfCheckoutCardProps,
  SelfCheckoutCardState,
} from './components/self-checkout-card/type';
import TransactionModal from './components/transaction-modal/TransactionModal';
import { TransactionItem } from './components/transaction-modal/type';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
  const [selectedSelfCheckoutCard, setSelfCheckoutCard] = useState<
    SelfCheckoutCardProps | undefined
  >();
  const [transactionItems, setTransactionItems] = useState<TransactionItem[]>(
    []
  );
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const selfCheckoutCards = [
    { state: SelfCheckoutCardState.NON_SALE, registerId: 171 },
    { state: SelfCheckoutCardState.SALE_PLUS_HELP, registerId: 172 },
    { state: SelfCheckoutCardState.HELP_REQUEST, registerId: 173 },
    { state: SelfCheckoutCardState.IDLE, registerId: 174 },
    { state: SelfCheckoutCardState.SALE, registerId: 174 },
    { state: SelfCheckoutCardState.SALE, registerId: 175 },
  ];

  const fetchItems = (registerId: number): Promise<TransactionItem[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            description: 'Dog treats',
            amount: 5.0,
          },
          {
            description: 'Apples',
            amount: 1.5,
          },
          {
            description: 'Oranges',
            amount: 4.99,
          },
          {
            description: 'Bird seed',
            amount: 10.0,
          },
          {
            description: 'Cookies',
            amount: 9.99,
          },
          {
            description: 'Wine',
            amount: 10.0,
          },
        ]);
      }, 3 * 1000);
    });
  };

  const handleClick = (card: SelfCheckoutCardProps) => {
    setShow(true);
    setLoading(true);
    setSelfCheckoutCard(card);
    fetchItems(card.registerId).then((data) => {
      setTransactionItems(data);
      setLoading(false);
    });
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <Container className="App">
      <Row className="gap-1">
        {selfCheckoutCards.map((card) => (
          <Col key={card.registerId}>
            <SelfCheckoutCard {...card} onClick={() => handleClick(card)} />
          </Col>
        ))}
      </Row>

      {selectedSelfCheckoutCard && (
        <TransactionModal
          show={show}
          isLoading={isLoading}
          onHide={handleHide}
          registerId={selectedSelfCheckoutCard.registerId}
          items={transactionItems}
          currencySymbol="$"
        >
          <SelfCheckoutCard {...selectedSelfCheckoutCard} />
        </TransactionModal>
      )}
    </Container>
  );
};

export default App;
