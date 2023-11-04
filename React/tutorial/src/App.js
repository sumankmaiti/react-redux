// import logo from './logo.svg';
import React from 'react';
import './App.css'

import FirstComponent from './modules/1Component';
import { ComponentOne, ComponentTwo } from './modules/2MultipleComponents';
import {PropsDestructure, PropsWithChildren, PropsWithKeywoard} from './modules/3PropsComponent';
import EventHandler from './modules/4EventHandler';
import ParentComponent from './modules/5MethodAsPropsParent';
import ConditionalRender from './modules/6ConditionalOperator';
import ListRendering from './modules/7ListRendering';

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
		<EventHandler />
		<ParentComponent />
		<ConditionalRender />
		<ListRendering />
    </div>
  );
}

export default App;
