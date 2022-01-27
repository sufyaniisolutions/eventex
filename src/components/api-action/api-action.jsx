import React from 'react';

const baseURL  = "http://localhost:8080/EventManagement/public/api/";

export const RegisterAPI = (vendorRegistration) => {
  console.log(vendorRegistration.confirmPassword);
  const requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Methods":"POST",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vendorRegistration),
  };
  console.log(requestOptions);
  return fetch(
    baseURL+"organization/register",
    requestOptions,
    {
      mode: "cors",
    }
  ).then((results) => console.log(results));
};