import React from "react";
import Router from "./Router";
import { Provider } from 'react-redux';
import { store } from './store/store'
import "./index.css";
import "./App.css";

const App = () => {
   return (
   	<Provider store={store} >
   		<Router /> 
   	</Provider>
   )
}

export default App;