import './App.css'
import Listing from './components/Listing'
import data from './data.json'

interface Product {
  listing_id: number,
  url: string,
  MainImage: {
    url_570xN: string
  },
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

const App: React.FC = () => {
  
  const dataStringified = JSON.stringify(data);

  const resultProduct: Product[] = JSON.parse(dataStringified);
  //console.log(resultProduct)

  return (
      <Listing items={resultProduct}/>
    )
}

export default App
