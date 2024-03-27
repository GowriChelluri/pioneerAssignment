import './index.css'
import CryptoCurrency from '../CryptoCurrency'
import {Component} from 'react'

class Assets extends Component{
    state={currencyData:{}}

    componentDidMount() {
        this.getcryptoCurrencyDetails()
    }
    getcryptoCurrencyDetails=async()=>{
        const response=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        const data=await response.json()
        const updatedData = Object.keys(data.bpi).map(eachItem => ({
           code: data.bpi[eachItem].code,
           symbol: data.bpi[eachItem].symbol,
           rate: data.bpi[eachItem].rate,
           description:data.bpi[eachItem].description,
           rateFloat:data.bpi[eachItem].rate_float
         }))
        this.setState({currencyData:updatedData})
}

    render(){
        const {currencyData}=this.state
        return(
<ul>
{currencyData.map((eachItem)=>(
    <CryptoCurrency currencyDetails={eachItem}/>
))}
</ul>
        )
    }
}


export default Assets
