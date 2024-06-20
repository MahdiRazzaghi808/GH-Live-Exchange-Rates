import React from 'react';
import { Modal } from 'antd';

const ModalCryptoDetails = ({ isOpen, cryptoData, onClose }) => {
  const { symbol, last, buy, sell, changeRate, changePrice, high, low, vol, volValue, averagePrice, takerFeeRate, makerFeeRate } = cryptoData;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={[]}
      title={`${symbol.split('-')[0]} Details`}
      className="crypto-modal"
    >
      <div className='modal-wrapper'>
        <ul className='modal-details'>
          <li><strong>Last Price:</strong> {parseFloat(last).toFixed(2)}</li>
          <li><strong>Buy:</strong> {parseFloat(buy).toFixed(2)}</li>
          <li><strong>Sell:</strong> {parseFloat(sell).toFixed(2)}</li>
          <li><strong>Change Rate:</strong> <span className={changeRate > 0 ? 'increase' : changeRate === 0 ? 'normal' : 'decrease'}>{parseFloat(changeRate).toFixed(2)}</span></li>
          <li><strong>Change Price:</strong> <span className={changePrice > 0 ? 'increase' : changePrice === 0 ? 'normal' : 'decrease'}>{parseFloat(changePrice).toFixed(2)}</span></li>
          <li><strong>High:</strong> {parseFloat(high).toFixed(2)}</li>
          <li><strong>Low:</strong> {parseFloat(low).toFixed(2)}</li>
          <li><strong>Volume:</strong> {parseFloat(vol).toFixed(2)}</li>
          <li><strong>Volume Value:</strong> {parseFloat(volValue).toFixed(2)}</li>
          <li><strong>Average Price:</strong> {parseFloat(averagePrice).toFixed(2)}</li>
          <li><strong>Taker Fee Rate:</strong> {parseFloat(takerFeeRate).toFixed(2)}</li>
          <li><strong>Maker Fee Rate:</strong> {parseFloat(makerFeeRate).toFixed(2)}</li>
        </ul>
      </div>
    </Modal>
  );
};

export default ModalCryptoDetails;
