import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import Routes from './routes/Routes';



// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/xml-data`)
//       .then((res) => {
//         setData(res.data.products.product);
//         console.log(res.data.products.product);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div>
//       {data ? <div>{data.map((item) => {
//         return <p>{item.name} {item.image_link}</p>
//       })}
//       </div> : <div>Loading...</div>}
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes />
  )
}


export default App;

