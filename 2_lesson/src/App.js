import './App.css';
import PropTypes from "prop-types";
import Product from './components/Products/Product';
// React hook - useState - storing information and setting information

const App = () => {
  return (
    <div>
      <h1>Best sellers</h1>
      <div className='productsBlock'>
        <Product category="Canvases" name="off-white air jordan 1 canvas" price="32.00 - 16.00"></Product>
        <Product category="Posters" name="yeezy boost 350 v2 frozen yellow poster" price="16.00 - 32.00"></Product>
        <Product category="Stickers" name="yeezy 350 v2 zebra sticker" price="5.00"></Product>
        <Product category="Adidas" name="adidas yeezy powerphase calabasas poster" price="16.00 - 32.00"></Product>
        <Product category="Jordans" name="air jordan 4 red suede poster" price="16.00 - 32.00"></Product>
        <Product category="Balenciaga" name="balenciaga triple s poster" price="16.00 - 32.00"></Product>
        <Product category="Nike" name="nike blazer mid sacai poster" price="16.00 - 32.00"></Product>
        <Product category="Artists" name="lil wayne poster" price="16.00 - 32.00"></Product>
      </div>
    </div>
  )
}

Product.propTypes = {
  category: PropTypes.string, // optional string
  name: PropTypes.string,
  price: PropTypes.number
};
// const App = () => {
//   // const name = "Saidas";
//   // const arr = [1, 2];
//   // const first = arr[0];
//   // const second = arr[1];
//   // const [first, second] = arr;
//   const [name, setName] = useState("saidas");
//   const [age, setAge] = useState(28);
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <Button onClick={() => alert("Sveiki visi")}>Say hello</Button>
//       <Button onClick={() => alert("Viso gero")} backgroundColor="blue">Say hello</Button>
//       <Button backgroundColor={0} onClick={() => {
//         setName("Tadas");
//       }}
//       >{name}</Button>
//       <Button
// backgroundColor="green"
// onClick={() => {
//   setAge(age * 2);
// }}
// >
// Help my age is: {age}
// </Button>
// <Button
// backgroundColor="red"
// onClick={() => {
//   setName("Tadas");
// }}
// >
// {name}
// </Button>
// <Button onClick={() => {
//   setCount(count + 1)
// }}>Plus one</Button>
// <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>{count}</span>
// <Button backgroundColor="black" onClick={() => {
//   setCount(count - 1)
// }}>Minus one</Button>
//     </div>
//   )
// }

export default App;