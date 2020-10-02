import React from 'react';
import "./App.css"
import CountryList from "./country-list"
import {Provider} from "react-redux"
import {createStore} from "redux"

const initialState ={
  countryList:[]
}

const reducer = (state = initialState, action) =>{

  console.log(action)
  
  switch(action.type){
    case "SET_COUNTRY_LIST":{
      return {
          ...state,
          countryList: action.payload
      }
    }
    case "SET_COUNTRY_REGION":{
      return{
        ...state,
        countryList: action.payload
      }
    }
    default: {
      return state
    }  
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <CountryList />
      </div>
    </Provider>
  );
}

export default App;
