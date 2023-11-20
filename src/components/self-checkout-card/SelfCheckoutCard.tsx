import { Card } from 'react-bootstrap';
import './SelfCheckoutCard.scss';
import { SelfCheckoutCardState, type SelfCheckoutCardProps } from './type';
import classNames from 'classnames';
import { SelfCheckoutIcon } from '../self-checkout-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faGear,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

const SelfCheckoutCard = (props: SelfCheckoutCardProps) => {
  const { registerId, state } = props;
  const classes = {
    [SelfCheckoutCardState.NON_SALE]: 'non-sale',
    [SelfCheckoutCardState.IDLE]: 'idle',
    [SelfCheckoutCardState.SALE]: 'sale',
    [SelfCheckoutCardState.SALE_PLUS_HELP]: 'sale-plus-help',
    [SelfCheckoutCardState.PAYMENT_PROCESSING]: 'payment-processing',
    [SelfCheckoutCardState.PAYMENT_FAILURE]: 'payment-failure',
    [SelfCheckoutCardState.HELP_REQUEST]: 'help-request',
    [SelfCheckoutCardState.ATTEND]: 'attend',
    [SelfCheckoutCardState.OFFLINE]: 'offline',
    [SelfCheckoutCardState.CASHIER_LOGIN]: 'cashier-login',
    [SelfCheckoutCardState.TRANSACTION_SUSPENDED]: 'transaction-suspended',
  };

  return (
    <Card
      className={classNames(
        'self-checkout-card-root',
        'flex-row',
        'shadow',
        classes[state]
      )}
    >
      <div className="self-checkout-icon-root position-relative p-1 idle-dark">
        <SelfCheckoutIcon />
        <span className="self-checkout-card-icon">
          {state === SelfCheckoutCardState.NON_SALE && (
            <FontAwesomeIcon icon={faGear} spin />
          )}
          {state === SelfCheckoutCardState.SALE_PLUS_HELP && (
            <FontAwesomeIcon icon={faCartShopping} />
          )}
          {state === SelfCheckoutCardState.HELP_REQUEST && (
            <FontAwesomeIcon icon={faQuestion} beatFade />
          )}
        </span>
      </div>
      <div className="self-checkout-register-id-root text-end flex-grow-1 p-1 idle-light text-white">
        {registerId}
      </div>
    </Card>
  );
};

export default SelfCheckoutCard;
