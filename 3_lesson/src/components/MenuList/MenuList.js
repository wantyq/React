import "./MenuList.css";
import { singleMenu, coupleMenu, familyMenu } from "./const";

const MenuList = ({ customerType }) => {
    const getCustomerMenu = (type) => {
        if(type === 'single'){
            return singleMenu;
        } else if (type === 'couple'){
            return coupleMenu;
        } else {
            return familyMenu;
        }
    }

    const customerMenu = getCustomerMenu(customerType);

    return <ol>
        {customerMenu.map(menuItem => <li key={menuItem.name}>{menuItem.name} <strong>{menuItem.price}</strong></li>)}
    </ol>
};

export default MenuList;