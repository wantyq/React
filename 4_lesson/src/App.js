import './App.css';
import Product from './components/Product/Product.js';
import Shop from './components/Product/Shop/Shop';

function App() {
  return (
    <div className="App">
            {/* <Product image="https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg" title="Volkswagen GOLF MK2 2022 Calendar" price="10.00" description="12 unique designs. All pieces are printed on heavyweight 200 gsm art paper. Limited to 50 pieces" category="Calendars" availability="10"></Product> */}
      <Shop></Shop>
    </div>
  );
}

export default App;
