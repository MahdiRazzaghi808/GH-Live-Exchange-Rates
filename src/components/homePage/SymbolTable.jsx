import React, { useState, useEffect } from 'react';
// ant
import { Button, Table } from 'antd';
// helper
import { symbols } from '../../helper/symbols';
// services
import { fetchCryptoData } from '../../services/axios';
// components
import ModalCryptoDetails from './ModalCryptoDetails';

function SymbolTable() {
    const [cryptoData, setCryptoData] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchCryptoData(setCryptoData);
        const interval = setInterval(() => fetchCryptoData(setCryptoData), 5000);

        return () => clearInterval(interval);

    }, []);

    const openModal = (data) => {
        setSelectedCrypto(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'Icon',
            dataIndex: 'symbol',
            key: 'symbol',
            render: name => {
                const symbol = symbols.find(symbol => symbol.name === name.split('-')[0]);
                if (symbol) {
                    return <img src={symbol.src} alt={name} width="32" height="32" />;
                }
                return null;
            }
        },
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
            render: (symbol, record) => (
                <p className='cursorSymbol' onClick={() => openModal(symbol)}>{symbol.split('-')[0]}</p>
            ),
        },
        {
            title: 'Buy',
            dataIndex: 'buy',
            key: 'buy',
            render: value => parseFloat(value).toFixed(2)
        },
        {
            title: 'Sell',
            dataIndex: 'sell',
            key: 'sell',
            render: value => parseFloat(value).toFixed(2)
        },
        {
            title: 'ChangeRate',
            dataIndex: 'changePrice',
            key: 'changePrice',
            render: value => (
                <span className={value > 0 ? 'increase' : value === 0 ? 'normal' : 'decrease'}>
                    {parseFloat(value).toFixed(2)}
                </span>
            )
        },
        {
            title: 'High',
            dataIndex: 'high',
            key: 'high',
            render: value => parseFloat(value).toFixed(2)
        },
        {
            title: 'Low',
            dataIndex: 'low',
            key: 'low',
            render: value => parseFloat(value).toFixed(2)
        }

    ];


    return (
        <>
            <Table
                scroll={{ x: `50rem` }}
                dataSource={cryptoData.map((symbol, index) => ({ ...symbol, key: index }))}
                columns={columns}
            />
            {selectedCrypto && <ModalCryptoDetails isOpen={isModalOpen} symbolName={selectedCrypto} cryptoData={cryptoData} onClose={closeModal} />}
        </>
    );
}

export default SymbolTable;
