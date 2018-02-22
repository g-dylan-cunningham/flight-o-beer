import axios from 'axios';

export const fetchAllSymbols = () => {
    return {
        type: "FETCH_ALL_SYMBOLS",
        payload: axios.get("https://api.iextrading.com/1.0/ref-data/symbols")
    }
}