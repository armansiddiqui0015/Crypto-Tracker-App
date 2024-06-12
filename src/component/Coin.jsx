import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../store/Context";
import LineChart from "./LineChart";

const Coin = () => {
  const { currency } = useContext(CoinContext);
  const { coinId } = useParams();
  const [dataId, setdataId] = useState();
  const [historicaleData, setHistoricaleData] = useState();

  const getDatabyId = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-KH7B7idQN1t87XPh1EzNd21Z",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setdataId(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricaleData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-X9ZKAueckW5Z1NKCpA9y6bj6",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricaleData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDatabyId();
    fetchHistoricaleData();
  }, [currency]);
  if (dataId && historicaleData) {
    return (
      <div className="coin">
        <div className="coinName">
          <img src={dataId.image.large} alt="" />
          <p>
            <b>
              {dataId.name} ({dataId.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coinChart">
          <LineChart historicaleData={historicaleData} />
        </div>
        <div className="coinInfo">
          <ul>
            <li>Market Crypto Rank</li>
            <li>{dataId.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {dataId.market_data.current_price[currency.name]}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol} {dataId.market_data.market_cap[currency.name]}
            </li>
          </ul>
          <ul>
            <li>24 hour high</li>
            <li>
              {currency.symbol} {dataId.market_data.high_24h[currency.name]}
            </li>
          </ul>
          <ul>
            <li>24 hour Low</li>
            <li>
              {currency.symbol} {dataId.market_data.low_24h[currency.name]}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
