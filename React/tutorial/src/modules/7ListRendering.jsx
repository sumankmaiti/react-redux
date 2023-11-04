import React from "react";

const ListRendering = () => {
  const names = ["suman", "kalyan", "maiti"];
  const persons = [
    { id: 1, name: "suman", age: 28 },
    { id: 2, name: "kalyan", age: 12 },
  ];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      key={index} person = {name}
    </h2>
  )); // use index as key

  
  return <div> {nameList} </div>;
};

export default ListRendering;
