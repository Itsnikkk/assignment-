import React from 'react';

const MemberDetails = ({ memberDetails }) => {
    console.log(memberDetails);
  return (
    <div>
      <h2>Member Details</h2>
      <ul>
        <li>MemberName: {memberDetails.name}</li>
        <li>MemberAddress: {memberDetails.address}</li>
        <li>MemberCityName: {memberDetails.city}</li>
        <li>MemberPINCode: {memberDetails.pinCode}</li>
        <li>MobileNo: {memberDetails.mobileNo}</li>
        <li>EmailID: {memberDetails.email}</li>
        <li>MemberPANNo: {memberDetails.panNumber}</li>
        <li>BirthDate: {memberDetails.BirthDate}</li>
      </ul>

    </div>
  );
};

export default MemberDetails;