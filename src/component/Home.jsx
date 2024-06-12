import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../store/Context'
import { Link } from 'react-router-dom'

const Home = () => {

  const {allCoin,currency} = useContext(CoinContext)
  const [displayCoin,setDisplayCoin] = useState([''])
  const [input, setInput] = useState('')
  const inputHandler = (event) => {
    setInput(event.target.value)
    if(event.target.value === ''){
      setDisplayCoin(allCoin)
    }

  }
  const submitHandler = async (event) =>{
   event.preventDefault()
    const coins = await allCoin.filter((item) =>{
       return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(()=>{
    setDisplayCoin(allCoin)
  },[allCoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1><span style={{display: 'block'}}>Largest</span> Crypto MarketPlace</h1>
        <p className='pTage'> welcome to the world largest cryptoCurrency Market Place. SignUp to more explore Crupto Currency </p>
        <form onSubmit={submitHandler}>
          <input onChange={inputHandler} value={input} required list='coinlist' type="text" placeholder='search crypto....'/>

           <datalist id='coinlist'>
             {allCoin.map((item,index) => (<option key={index} value={item.name}></option>))}
           </datalist>
           

          <button>Search</button>
        </form>
      </div>
      <div className="cryptoTable">
        <div className="cryptoLayout">
          <p>#</p>
          <p>coins</p>
          <p>price</p>
          <p style={{textAlign: 'center'}}>24 hours</p>
          <p  className='market_cap' style={{textAlign: 'right'}}>market cap</p>
        </div>
      </div>
      {displayCoin.slice(0,10).map((item,index) => (

        <Link to={`/coin/${item.id}`} className="cryptoLayoutl" key={index}>
        <p>{item.market_cap_rank}</p>
        <div className='underLayout'>
          <img className='underimg' src={item.image} alt="" />
          <p>{item.name} : {item.symbol}</p>
        </div>
        <p>{currency.symbol} {item.current_price}</p>
        <p style={{textAlign: 'center'}} className={item.price_change_percentage_24h > 0 ? 'green':'red' }>{Math.floor(item.price_change_percentage_24h*100)}</p>
        <p className='market_cap' style={{textAlign: 'right'}}>{currency.symbol}{item.market_cap}</p>
      </Link>
      ))}
      

    </div>
  )
}

export default Home
