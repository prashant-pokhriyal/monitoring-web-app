export enum SelfCheckoutCardState {
  NON_SALE,
  IDLE,
  SALE,
  SALE_PLUS_HELP,
  PAYMENT_PROCESSING,
  PAYMENT_FAILURE,
  HELP_REQUEST,
  ATTEND,
  OFFLINE,
  CASHIER_LOGIN,
  TRANSACTION_SUSPENDED,
}

export interface SelfCheckoutCardProps {
  registerId: number;
  state: SelfCheckoutCardState;
  onClick?: () => void;
}
