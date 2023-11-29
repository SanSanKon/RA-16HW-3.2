import '../css/listing.css'

interface Product {
    listing_id: number,
    url: string,
    MainImage?: {
      url_570xN: string
    },
    title: string,
    currency_code: string,
    price: string,
    quantity: number
  }

interface Props {
    items: Product[]
}

const Listing: React.FC<Props> = ({ items }) => { {/*What a fuck*/}
    console.log(items)

    const showCurrency = (currencyCode: string, price: string) => {
        switch(currencyCode) {
            case 'USD':
                return `$${parseInt(price)}`;
            case 'EUR':
                return `€${parseInt(price)}`;
            default:
                return `${parseInt(price)} ${currencyCode}`
        }
    };

    const quantityColorClass = (quantity: number) => {
        if(quantity <=10) {
            return 'item-quantity level-low'
        } else if(quantity <= 20) {
            return 'item-quantity level-medium'
        } else {
            return 'level-high'
        }
    };

    const lengthOfTitle = (title: string) => {
        if (title.length > 50) {
            return title.slice(0, 50) + '...';
        } else {
            return title
        }
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            {item.MainImage && <img src={item.MainImage.url_570xN}/>} 
                        </a>
                    </div>
                    <div className="item-details">
                        {/* {item.title && <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>} */}
                        {item.title && <p className="item-title">{lengthOfTitle(item.title)}</p>}
                        <p className="item-price">{showCurrency(item.currency_code, item.price)}</p> {/*{item.currency_code} {item.price}*/}
                        <p className={`item-quantity ${quantityColorClass(item.quantity)}`}>{item.quantity} left</p> {/*(item.quantity <= 10) ? "item-quantity level-low" : (item.quantity <= 20) ? "item-quantity level-low" : "item-quantity level-high"*/}
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Listing