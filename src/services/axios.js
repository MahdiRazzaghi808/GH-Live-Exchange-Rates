import axios from 'axios';
import { symbols } from '../helper/symbols';

export const fetchCryptoData = async (setCryptoData) => {
    try {
        const promises = symbols.map(symbol =>
            axios.get(`https://api.kucoin.com/api/v1/market/stats?symbol=${symbol.name}-USDT`)
        );
        const responses = await Promise.all(promises);
        const data = responses.map(response => response.data.data);
        setCryptoData(data);
    } catch (error) {
        console.error('Error fetching the crypto data', error);
    }
};
