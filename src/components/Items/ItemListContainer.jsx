import './Style.css';

function ItemContainer({greeting}){
    return(
        <>
        <div className="itemContainer">
            <h1 className='itemGreeting'>{greeting}</h1>
        </div>
            
        </>
    )
}

export default ItemContainer;