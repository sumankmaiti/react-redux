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
import ControlledComponent from './modules/8ControlledComponent';
import FragmentTable from './modules/9FragmentTable';
import MemoParent from './modules/10MemoParent';
import {UseEffect, UseEffectDependent, UseEffectEmptyDependency} from './modules/11UseEffect';
import UseEffectCleanup from './modules/11UseEffectCleanup';
import UseContext from './modules/12UseContext';
import UseReducer from './modules/13UseReducer';
import UseReducerDataFetch from './modules/13UseReducerDataFetch';
import UseCallBack from './modules/14UseCallback';
import UseMemo from './modules/15UseMemo';

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
		<ControlledComponent />
		<FragmentTable />
		<MemoParent />
		<UseEffect />
		<UseEffectDependent />
		<UseEffectEmptyDependency />
		<UseEffectCleanup />
		<UseContext />
		<UseReducer />
		<UseReducerDataFetch />
		<UseCallBack />
		<UseMemo />
    </div>
  );
}

export default App;
