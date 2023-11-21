import { Modal, Table } from 'react-bootstrap';
import { TransactionModalProps } from './type';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TransactionModal.scss';

const TransactionModal = (props: TransactionModalProps) => {
  const { registerId, currencySymbol, items, isLoading, children, ...rest } =
    props;
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Modal {...rest} className="transaction-modal-root" fullscreen={'sm-down'}>
      <Modal.Header closeButton>{children}</Modal.Header>
      <Modal.Body className="text-center transaction-modal-body">
        {!isLoading && (
          <Table responsive>
            <tbody>
              {items.map((item) => (
                <tr>
                  <td>{item.description}</td>
                  <td className="text-end">
                    {currencySymbol} {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
            {items.length !== 0 && (
              <tfoot>
                <tr>
                  <td className="fw-bold">{items.length} items</td>
                  <td className="text-end fw-bold">
                    Total {currencySymbol} {total.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            )}
          </Table>
        )}
        {isLoading && <FontAwesomeIcon size="2x" icon={faSpinner} spin />}
      </Modal.Body>
    </Modal>
  );
};

export default TransactionModal;
