import './index.css'


const CryptoCurrency=(props)=>{
    const { currencyDetails } = props
    const { code, symbol, rate, description, rateFloat } = currencyDetails
    return(
        <li className='bg-container'>
            <h1>{code}</h1>
            <p>{symbol}</p>
            <p>{rate}</p>
            <p>{description}</p>
            <p>{rateFloat}</p>
        </li>
        )
}
    
   
       

   
export default CryptoCurrency