import "./CustomButton.css";

// receive 'variant' as a property
// handle 3 variants: 'text' | 'container' | 'outlined'
// all text is uppercase
// get hex of blue color 
// style every button to match design

const CustomButton = ({ variant, onClick, children }) => {
    if(variant === 'text'){
        return <button className="text" onClick={onClick}>{children}</button>
    } else if(variant === 'outlined') {
        return <button className="outlined" onClick={onClick}>{children}</button>
    } else {
        return <button className="contained" onClick={onClick}>{children}</button>
    }
};

export default CustomButton;