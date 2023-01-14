import React, { useState, useEffect } from "react";
import MyInput from "./myInput";

const Component = (props) => {
  const [names, setName] = useState("");
  const [autos, setAuto] = useState("");
  const [phones, setPhone] = useState("");
  const [yearOfBirths, setYearOfBirth] = useState("");
  const [VINs, setVIN] = useState("");
  const [terms, setTerm] = useState("");

  const clickDelete = (id) => {
    props.setData(props.data.filter((user) => user.id !== id));
  };

  const remuvePlayer = () => {
    setName("");
    setAuto("");
    setPhone("");
    setYearOfBirth("");
    setVIN("");
    setTerm("");
  };

  const remuve = () => {
    props.setData([
      {
        id: 1,
        name: "Соловьев Двмитрий Викторовичь",
        auto: "Mazda 626 1996",
        phone: "+79112572963",
        yearOfBirth: "12.07.1976",
        VIN: "1231GGDWEGV123",
        term: "12.02.2023",
      },
      {
        id: 2,
        name: "Соловьев Двмитрий Викторовичь",
        auto: "Mazda 323 1996",
        phone: "+79112572963",
        yearOfBirth: "10.05.1983",
        VIN: "1231GGDWEGV123",
        term: "15.01.2023",
      },
      {
        id: 3,
        name: "Соловьев Двмитрий Викторовичь",
        auto: "Nissan Almera 2004",
        phone: "+79112572963",
        yearOfBirth: "02.08.1996",
        VIN: "1231GGDWEGV123",
        term: "10.12.2022",
      },
    ]);
  };

  const addNewPerson = (e) => {
    const newUser = {
      id: Date.now(),
      name: names,
      auto: autos,
      phone: phones,
      yearOfBirth: yearOfBirths,
      VIN: VINs,
      term: terms,
    };
    console.log(newUser);
    props.setData([...props.data, newUser]);
    remuvePlayer();
  };

  return (
    <>
      <div className="btn">
        <MyInput
          name={names}
          auto={autos}
          phone={phones}
          yearOfBirth={yearOfBirths}
          VIN={VINs}
          term={terms}
          setName={setName}
          setAuto={setAuto}
          setPhone={setPhone}
          setYearOfBirth={setYearOfBirth}
          setVIN={setVIN}
          setTerm={setTerm}
        />
      </div>
      {props.data.length > 0 ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ФИО</th>
              <th scope="col">авто</th>
              <th scope="col">Номер</th>
              <th scope="col">Год рождения</th>
              <th scope="col">VIN номер</th>
              <th scope="col">Срок действия</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {props.data.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.auto}</td>
                <td>{user.phone}</td>
                <td>{user.yearOfBirth}</td>
                <td>{user.VIN}</td>
                <td>{user.term}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      clickDelete(user.id);
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>В списке нет людей!!!</p>
      )}
      <button className="btn btn-primary" onClick={remuve}>
        Сброс
      </button>
      <button className="btn btn-primary m-2" onClick={remuvePlayer}>
        Сброс полей добавления
      </button>
      <button className="btn btn-primary" onClick={addNewPerson}>
        Добавить водителя
      </button>
    </>
  );
};

export default Component;
