import React from "react";

const myInput = (props) => {
  return (
    <div className="btn">
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        placeholder="ФИО"
      ></input>
      <input
        value={props.auto}
        onChange={(e) => props.setAuto(e.target.value)}
        type="text"
        placeholder="авто"
      ></input>
      <input
        value={props.phone}
        onChange={(e) => props.setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
      ></input>
      <input
        value={props.yearOfBirth}
        onChange={(e) => props.setYearOfBirth(e.target.value)}
        type="text"
        placeholder="Год рождения"
      ></input>
      <input
        value={props.VIN}
        onChange={(e) => props.setVIN(e.target.value)}
        type="text"
        placeholder="VIN номер"
      ></input>
      <input
        value={props.term}
        onChange={(e) => props.setTerm(e.target.value)}
        type="text"
        placeholder="Срок действия"
      ></input>
    </div>
  );
};

export default myInput;
