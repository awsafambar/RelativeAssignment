import './App.css';
import CryptoCard from './Components/IntegratedComponents/CryptoComponent/CryptoCard';
import TrendingHeader from './Components/unitComponents/trendingHeader/TrendingHeader';

import cryptocoins from './mocks/mockdata.js';

function App() {
  // console.log("cryptocoins", { cryptocoins })
  return (
    <div className="App">
      <div className='heading'><TrendingHeader /></div>
      <div className='allCards'>
        {cryptocoins?.map(coin => <CryptoCard coin={coin} />)}
      </div>
    </div>
  );
}

export default App;
