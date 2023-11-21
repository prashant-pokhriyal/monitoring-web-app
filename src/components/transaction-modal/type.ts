import { ModalProps } from 'react-bootstrap';

export interface TransactionItem {
  description: string;
  amount: number;
}

export interface TransactionModalProps extends ModalProps {
  isLoading?: boolean;
  registerId: number;
  currencySymbol: string;
  items: TransactionItem[];
}
