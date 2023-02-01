import React from 'react'
import Additionalbar from '../components/Additionalbar/Additionalbar';
import ItemsContainer from '../components/ItemsContainer/ItemsContainer';
import Topbar from '../components/Topbar/Topbar';
import { MedsAPI } from '../components/Consts/Consts';
import { useState, useEffect } from 'react';


const Medications = () => {
  const [meds, setMeds] = useState(undefined);

  useEffect( () => {
    fetch(MedsAPI)
    .then(resp => resp.json())
    .then(response => {
        setMeds(response);
    })
    .catch((error) => console.log(error))
  }, []);
  return (
    <div>
      <Topbar/>
      <Additionalbar 
          title="Medications List" 
          option="primary" 
          path="/add"
        >Add Medications
        </Additionalbar>
      {meds && <ItemsContainer option="MedCards" arrName={meds} />}
    </div>
  )
}

export default Medications;