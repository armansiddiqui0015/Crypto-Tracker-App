import { createContext, useEffect, useState } from "react";


export const CoinContext = createContext()

const CoinContextProvider = (props) => {

  const [allCoin, setAllCoin] = useState([])
  const [currency , setCurrency] = useState({
    name: "usd",
    symbol : '$'
  })


  const fetchAllCoinData = async () =>{

  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ARbMgNQy7QZhCt9jr2JjqJGj'}
  };
  
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
    .then(response => response.json())
    .then(response => setAllCoin(response))
    .catch(err => console.error(err));

}

useEffect(()=>{

  fetchAllCoinData()
},[currency])
  

  return(
    <CoinContext.Provider value={{
      allCoin,
      currency,
      setCurrency
    }} >
      {props.children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider