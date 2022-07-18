import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: " Henry",
    admin: false,
  });

  //function handleFirstNameChange(event) {
    //setFormData({
      //...formData,//COPYING THE KEY VALUES
      //firstName: event.target.value,//OVERWRITING LAST NAME KEY
    //});
  //}

  //function handleLastNameChange(event) {
    //setFormData({
     // ...formData,
      //lastName: event.target.value,
    //});
  //}
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
  
  

export default Form;
