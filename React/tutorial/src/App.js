// import logo from './logo.svg';
import React from 'react';
import './App.css'

import FirstComponent from './modules/1Component';
import { ComponentOne, ComponentTwo } from './modules/2MultipleComponents';
import {PropsDestructure, PropsWithChildren, PropsWithKeywoard} from './modules/3PropsComponent';

function App() {
  return (
    <div className="App">
		<FirstComponent />
		<ComponentOne />
		<ComponentTwo />
		<PropsDestructure name="suman" company="nevaeh" />
		<PropsWithKeywoard name='suman' address='kolkata' />
		<PropsWithChildren>
			<button>children</button>
		</PropsWithChildren>
    </div>
  );
}

export default App;
