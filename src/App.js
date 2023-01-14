import React, { useState, useEffect } from "react";
import Component from "./components/component";

function App() {
  let [data, setData] = useState([
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
  return (
    <div>
      <Component data={data} setData={setData} id={Date.now()} />
    </div>
  );
}

export default App;
