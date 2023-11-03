import React from "react";
import PersonViewer from "./PersonViewer";

function NameList(){	
	const names = ['suman', 'kalyan', 'maiti']
	const persons = [{id: 1, name:'suman', age:28},
					{id:2, name:'kalyan', age:12}]
	// const personList = persons.map((person) => <PersonViewer key={person.id} person = {person} />);
	const personList = names.map((name, index) => <h2 key={index}> key={index} person = {name} </h2>);  // use index as key
	return <div> {personList} </div>; 
}

export default NameList;