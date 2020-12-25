import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const defaultState={
  people:[],
  isModelOpen:false,
  modelContent:'',
}

const reducer=()=>{

}

const Index = () => {
  const [name,setName]=useState('');
  const[state,dispatch]=useReducer(reducer,defaultState);

  const handleSubmit=()=>{
    if(name){
     const NewItem={id:new Date().getTime().toString(),name};
     dispatch({type:'ADD_ITEM',payload:NewItem});
     setName('');
    }
    else{
      dispatch({type:'NO_VALUE'});
    }
  }
  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'});
  }

  return (
    <>
    {state.isModelOpen&&(<Modal closeModal={closeModal} modelContent={state.modelContent}/>)}   
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}>  </input>
    </form>
    {state.people.map((person) => {
      return(
        <div key={person.id} className="item">
          <h2>{person.name}</h2>
          <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}></button>
        </div>
      );
    })};
    </>
  );
};

export default Index;
