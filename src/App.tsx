import { SelfCheckoutCard } from './components/self-checkout-card';
import { SelfCheckoutCardState } from './components/self-checkout-card/type';

const App = () => {
  return (
    <div className="App d-flex flex-direction-row gap-1">
      <SelfCheckoutCard
        state={SelfCheckoutCardState.NON_SALE}
        registerId={171}
      />
      <SelfCheckoutCard
        state={SelfCheckoutCardState.SALE_PLUS_HELP}
        registerId={172}
      />
      <SelfCheckoutCard
        state={SelfCheckoutCardState.HELP_REQUEST}
        registerId={173}
      />
      <SelfCheckoutCard state={SelfCheckoutCardState.IDLE} registerId={174} />
      <SelfCheckoutCard state={SelfCheckoutCardState.SALE} registerId={174} />
    </div>
  );
};

export default App;
