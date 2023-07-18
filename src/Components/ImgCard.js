

const ImgCard =(props)=>{
    return <>
    <img className="App-logo" src={props.url} alt={props.name}/>
    <p style={{'color':'orange','font-weight':'bold'}} >{props.name}</p>
    <p>Rank:{props.rank}</p>
    <p>Price:{props.price}</p>
    <p>MarketCap:{props.marketCap}</p>
    

    
    </>

}
export default ImgCard