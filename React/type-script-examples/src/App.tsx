// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from './Modules/UseContext';
import { User } from './Modules/User';
// import { UseReduce } from './Modules/UseReduce';
// import { EventProps } from './EventProps';
// import { Status, Heading, Parent } from './Modules/AdvanceProps';
// import Greet from './Modules/Greet';
// import { Greet } from './Modules/Greet';
// import { SinglePerson, ViewPerson } from './Modules/Persons';
// import { User } from './Modules/UseState';

function App() {
	// const names = [
	// 	{
	// 		fname: 'suman',
	// 		lname: 'maiti'
	// 	},
	// 	{
	// 		fname: 'sneha',
	// 		lname: 'roy'
	// 	},
	// 	{
	// 		fname: 'sayantika',
	// 		lname: 'nandi'
	// 	}
	// ]

	// const person = {
	// 	fname: 'Kausik',
	// 	lname: 'Pandey'
	// }

	return (
    <div className="App">
      {/* <Greet name='suman' isLoggedIn ={true} /> */}
	  {/* <ViewPerson names = {names} />
	  <SinglePerson name = {person} /> */}
		{/* <Status massage='success' /> */}
		{/* <Parent>
			<Heading>
				Inside this all are children
			</Heading>
		</Parent> */}
		{/* <EventProps eventHandlerChange={(e) => console.log(e.target.value)} /> */}
		{/* <User /> */}
		{/* <UseReduce /> */}
		<Provider>
			<User />
		</Provider>
    </div>
  );
}

export default App;
