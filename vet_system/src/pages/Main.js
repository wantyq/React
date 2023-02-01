import { useEffect, useState } from "react";
import { PetsAPI } from "../components/Consts/Consts";
import Additionalbar from "../components/Additionalbar/Additionalbar";
import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import Topbar from "../components/Topbar/Topbar";


const Main = () => {
    const [pets, setPets] = useState(undefined);

    useEffect( () => {
        fetch(PetsAPI)
        .then(resp => resp.json())
        .then(response => {
            setPets(response);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>
        <Topbar/>
        <Additionalbar 
          title="Pet List" 
          option="primary" 
          path="/add"
        >Add Pet
        </Additionalbar>
        {pets && <ItemsContainer option="PetCards" arrName={pets} />}
    </div>
  )
}

export default Main;