import { useState } from "react";
import "./RegistrationForm.css"

const RegistrationForm = () => {
    const [ fname, setFname ] = useState("");
    const [ lname, setLname ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ areaCode, setAreaCode ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ existingUser, setExistingUser ] = useState("");
    const [ items, setItems ] = useState( [] );

    const handleSubmit = (event) => {
        event.preventDefault();
        if(fname && lname && company && email) {
            const newData = {fname, lname, company, email, areaCode, phoneNumber, subject, existingUser}
            setItems((prevItems) => [...prevItems, newData])
            setFname("");
            setLname("");
            setCompany("");
            setEmail("");
            setAreaCode("");
            setPhoneNumber("");
            setSubject("");
            setExistingUser("");
            console.log(newData);
        } else {
            console.log("You missed some fields to fill in");
        }
    };

  return (
    <div className="registrationForm">
        <div className="header">Event registration form</div>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <p>Name</p>
                <input type="text" placeholder="First name" value={fname} onChange={(event) => setFname(event.target.value)}/>
                <input type="text" placeholder="Last name" value={lname} onChange={(event) => setLname(event.target.value)}/>
            </div>
            <div className="row">
                <p>Company</p>
                <input type="text" value={company} onChange={(event) => setCompany(event.target.value)}/>
            </div>
            <div className="row">
                <p>Email</p>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
                        <div className="row">
                <p>Phone</p>
                <input type="number" placeholder="Area Code" value={areaCode} onChange={(event) => setAreaCode(event.target.value)}/>
                <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
            </div>
            <div className="row">
                <p>Subject</p>
                <select name="subject" value={subject} onChange={(event) => setSubject(event.target.value)}>
                    <option onSelect={() => setSubject("first")}>First Subject</option>
                    <option onSelect={() => setSubject("second")}>Second Subject</option>
                    <option onSelect={() => setSubject("third")}>Third Subject</option>
                </select>
            </div>
            <div className="rowRadio">
                <p>Are you an existing customer?</p>
                <div className="radioBtn">
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="existingCustomer" id="yes" value="yes" onChange={(event) => setExistingUser(true)}/>
                    <label htmlFor="no">No</label>
                    <input type="radio" name="existingCustomer" id="no" value="no" onChange={(event) => setExistingUser(false)}/>
                </div>
            </div>
            <button type="submit" className="register">Register</button>
        </form>
    </div>
  )
}

export default RegistrationForm;