import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fafafa;
  box-shadow: 0px 2px 4px #ccc;
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const DonateButton = styled.button`
    background-color: #ffa800;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    color: white;

    &:hover {
        opacity: 0.8;
    }
`;


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: '2px solid black',
      width: '80%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid black;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #ffa800;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


Modal.setAppElement('#root');

const TopBar = () => {


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [donationAmount, setDonationAmount] = useState(0);
    const [donorName, setDonorName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // add code here to submit the form to your backend or perform other actions
        setIsSubmitted(true);
        alert(`Thank you ${donorName} for your donation of $${donationAmount}`);
      }
    
    
  return (
    <TopBarContainer>
      <TopBarLeft>
        {isSubmitted ? <p>You donated ${donationAmount}</p> : <p>We need your donation!</p>}
      </TopBarLeft>
      <TopBarRight>
        <DonateButton onClick={openModal}>
            Donate
        </DonateButton>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <FormContainer onSubmit={handleSubmit}>
                <Label>Donor Name:</Label>
                <Input type="text" value={donorName} onChange={e => setDonorName(e.target.value)} required />

                <Label>Donation Amount:</Label>
                <Input type="number" value={donationAmount} onChange={e => setDonationAmount(e.target.value)} required />

                <Button type="submit">Donate</Button>
            </FormContainer>
        </Modal>
      </TopBarRight>
    </TopBarContainer>
  );
};

export default TopBar;