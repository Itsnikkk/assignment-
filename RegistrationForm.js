import React, { useState } from 'react';

const RegistrationForm = ({onComplete}) => {
  const [formData, setFormData] = useState({
    registrationType: 'individual',
    title: 'Mr',
    name: '',
    fatherHusbandTitle: 'S/O',
    fatherHusbandName: '',
    birthDate: '',
    address: '',
    pinCode: '',
    mobileNo: '',
    email: '',
    panNumber: '',
    aadharNumber: '',
    nomineeName: '',
    nomineeRelation: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      onComplete(formData);
      console.log(formData);
    }
  };

  const validateForm = () => {
    const {
      name,
      fatherHusbandName,
      birthDate,
      address,
      pinCode,
      mobileNo,
      email,
      panNumber,
      aadharNumber,
      nomineeName,
      nomineeRelation,
      password,
    } = formData;
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    
    const panRegex = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
  
 
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  
    if (!name || name.length > 60) {
      alert('Please enter a valid name (max 60 characters).');
      return false;
    }
  
    if (!fatherHusbandName || fatherHusbandName.length > 60) {
      alert('Please enter a valid Father/Husband name (max 60 characters).');
      return false;
    }
  
    if (!birthDate) {
      alert('Please enter a valid birth date.');
      return false;
    }
  
    if (!address || address.length > 250) {
      alert('Please enter a valid address (max 250 characters).');
      return false;
    }
  
    if (!pinCode || pinCode.length !== 10) {
      alert('Please enter a valid PIN code (exactly 10 characters).');
      return false;
    }
  
    if (!mobileNo || mobileNo.length !== 10 || isNaN(mobileNo)) {
      alert('Please enter a valid mobile number (exactly 10 numeric characters).');
      return false;
    }
  
    if (!email || email.length > 100 || !emailRegex.test(email)) {
      alert('Please enter a valid email address (max 100 characters).');
      return false;
    }
  
    if (!panNumber || panNumber.length !== 10 || !panRegex.test(panNumber)) {
      alert('Please enter a valid PAN number.');
      return false;
    }
  
    if (!aadharNumber || aadharNumber.length !== 12 || isNaN(aadharNumber)) {
      alert('Please enter a valid Aadhar number (exactly 12 numeric characters).');
      return false;
    }
  
    if (!nomineeName || nomineeName.length > 50) {
      alert('Please enter a valid nominee name (max 50 characters).');
      return false;
    }
  
    if (!nomineeRelation || nomineeRelation.length > 50) {
      alert('Please enter a valid nominee relation (max 50 characters).');
      return false;
    }
  
    if (!password || password.length > 15 || !passwordRegex.test(password)) {
      alert('Please enter a valid password (8-15 characters, alphanumeric with special characters).');
      return false;
    }
  
    
    return true;
  };
  

  return (
    <div className='registration-container'>
        <h2>Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          Registration Type:
          <select name="registrationType" value={formData.registrationType} onChange={handleChange}>
            <option value="individual">Individual</option>
            <option value="organization">Organization</option>
          </select>
        </label>

        <label>
          Title:
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={60}
            required
          />
        </label>

        <label>
          Father / Husband Title:
          <select
            name="fatherHusbandTitle"
            value={formData.fatherHusbandTitle}
            onChange={handleChange}
          >
            <option value="S/O">S/O</option>
            <option value="D/O">D/O</option>
            <option value="W/O">W/O</option>
          </select>
        </label>

        <label>
          Father / Husband Name:
          <input
            type="text"
            name="fatherHusbandName"
            value={formData.fatherHusbandName}
            onChange={handleChange}
            maxLength={60}
          />
        </label>
        <label>
          Birth-Date:
          <input
            type="date"
            name="birthdate"
            value={formData.fatherHusbandName}
            onChange={handleChange}
             required
          />
        </label>

        
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            maxLength={250}
            rows={4}
          />
        
          <label>PIN Code:</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            maxLength={10}
          />
        
          <label>Mobile No:</label>
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            maxLength={10}
            pattern="[0-9]*"
          />
       
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={100}
            required
          />
        
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            maxLength={10}
            pattern="[A-Za-z]{5}\d{4}[A-Za-z]"
            title="First 5 characters and 10th character must be alphabets, 4th character must be 'P'"
          />
        
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            maxLength={12}
            pattern="[0-9]*"
          />
        
          <label>Nominee Name:</label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName}
            onChange={handleChange}
            maxLength={50}
          />
       

        
          <label>Nominee Relation:</label>
          <input
            type="text"
            name="nomineeRelation"
            value={formData.nomineeRelation}
            onChange={handleChange}
            maxLength={50}
          />
        


        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            maxLength={15}
            pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$"
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
