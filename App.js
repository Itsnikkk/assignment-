import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import MemberDetails from './MemberDetails';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('registration');
  const [loggedInMember, setLoggedInMember] = useState(null);
  const [data,setData]=useState("");

  const handleRegistrationComplete = (data1) => {
    setData(data1);
    setCurrentPage('login');
  };

  const handleLoginComplete = (loginData) => {
      if(loginData.loginName===data.name && loginData.loginPwd===data.password){
        setLoggedInMember(data);
        setCurrentPage('memberDetails');
      }
      
    
  };

  return (
    <div>
      {currentPage === 'registration' && (
        <RegistrationForm onComplete={handleRegistrationComplete} />
      )}

      {currentPage === 'login' && (
        <LoginForm onComplete={handleLoginComplete} />
      )}

      {currentPage === 'memberDetails' && (
        <MemberDetails memberDetails={loggedInMember} />
      )}
    </div>
  );
};

export default App;