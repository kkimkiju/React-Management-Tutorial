import React from "react";

const Customer = (props) => {
  return (
    <div>
      <CustomerProfile id={props.id} name={props.name} image={props.image} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </div>
  );
};

const CustomerProfile = (props) => {
  return (
    <>
      <img src={props.image} alt="profile" width={200} />
      <h2>
        {props.name} ({props.id})
      </h2>
    </>
  );
};

const CustomerInfo = (props) => {
  return (
    <>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </>
  );
};

export default Customer;
