import React, { useState, useEffect } from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineCurrencyEuro } from "react-icons/hi2";
import { PiCurrencyGbpFill } from "react-icons/pi";
import { HiCurrencyDollar } from "react-icons/hi2";
import axios from 'axios';
import './index.css';

const CryptoCurrency=()=> {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrices(response.data.bpi);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const currencyLogos = {
    USD:  <HiCurrencyDollar />,
    GBP: <PiCurrencyGbpFill />,
    EUR:<HiOutlineCurrencyEuro />,
  };
  return (
    <div className="crypto-bg-container">
      <h1 className='assets-heading'>Assets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="price-cards">
          {Object.entries(prices).map(([currency, data]) => (
            <div key={currency} className="price-card">
                <div className='logo-name-container'>
                    <div className='currency-logo'>{currencyLogos[currency]}</div>
                    <h1 className='code'>{data.code}</h1>
                </div>
              <h2 className='description'>{data.description}</h2>
              <div className='value-container'>
              <p>{(data.rate_float)}</p>
                <p  dangerouslySetInnerHTML={{ __html: data.symbol }}/>
                
              </div>
              <div className='info-button-container'>
                <IoIosInformationCircleOutline  className='info-icon'/>
                <button type="button" className='button'>Trade</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoCurrency;
