import { useParams } from "react-router-dom";
import { getCar } from "../api/cars";
import TopBar from "../TopBar/TopBar";

const CarPage = () => {
    const {id} = useParams();
    const car = getCar(Number(id));

  return (
    <div>
        <TopBar/>
        {car.make} {car.model}
        color: {car.color}
    </div>
  )
}

export default CarPage;