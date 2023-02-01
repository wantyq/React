import { useState } from "react";
import "./RegistrationForm.css"
import PhotoBlock from "../PhotoBlock/PhotoBlock";

const RegistrationForm = () => {
    const [ name, setName ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ items, setItems ] = useState( [] );

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name && company && email && phoneNumber && description) {
            const newData = {name, company, email, phoneNumber, description}
            setItems((prevItems) => [...prevItems, newData])
            setName("");
            setCompany("");
            setEmail("");
            setPhoneNumber("");
            setDescription("");
            console.log(newData);
        } else {
            alert("You missed some fields to fill in");
        }
    };

  return (
    <div className="contact-grid-container">
        <div className="registrationForm first-item">
            <h3 className="header">Hey, let's chat with me</h3>
            <p className="pitch">You can contact me on social media or you can leave a message here. I'll be back with the response ASAP.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="text" placeholder="Company" value={company} onChange={(event) => setCompany(event.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input type="text" placeholder="Phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
                    <textarea placeholder="Please describe in a few words how can I help you?" value={description} onChange={(event) => setDescription(event.target.value)}/>
                <button className="contact-btn" type="submit">Send it!</button>
            </form>
        </div>
        <div className="second-item">
            <PhotoBlock/>
        </div>
    </div>
  )
}

export default RegistrationForm;