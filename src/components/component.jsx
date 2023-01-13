import React, { useState } from "react";

const User = () => {
  const userAPI = [
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
  ];

  const [users, setUsers] = useState(userAPI);
  const [names, setName] = useState("");
  const [autos, setAuto] = useState("");
  const [phones, setPhone] = useState("");
  const [yearOfBirths, setYearOfBirth] = useState("");
  const [VINs, setVIN] = useState("");
  const [terms, setTerm] = useState("");

  const clickDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
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
    setUsers(userAPI);
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
    setUsers([...users, newUser]);
    remuvePlayer();
  };

  return (
    <>
      <div className="btn">
        <input
          value={names}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="ФИО"
        ></input>
        <input
          value={autos}
          onChange={(e) => setAuto(e.target.value)}
          type="text"
          placeholder="авто"
        ></input>
        <input
          value={phones}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Номер телефона"
        ></input>
        <input
          onChange={(e) => setYearOfBirth(e.target.value)}
          value={yearOfBirths}
          type="text"
          placeholder="Год рождения"
        ></input>
        <input
          value={VINs}
          onChange={(e) => setVIN(e.target.value)}
          type="text"
          placeholder="VIN номер"
        ></input>
        <input
          value={terms}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Срок действия"
        ></input>
      </div>
      {users.length > 0 ? (
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
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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

export default User;
