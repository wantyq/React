import React from 'react';
import AddMeds from '../components/AddMeds/AddMeds';
import AddPet from '../components/AddPet/AddPet';
import Topbar from '../components/Topbar/Topbar';

const Add = () => {
  return (
    <div>
        <Topbar/>
        {/* <AddPet></AddPet> */}
        <AddMeds></AddMeds>
    </div>
  )
}

export default Add