import { StepConnector } from '@material-ui/core'
import React,{useState,useContext,useReducer,useEffect} from 'react'
import CartItems from './data'
import reducer from './reducer'
const url='https://course-api.netlify.app/api/react-useReducer-cart-project'
const AppContext = React.createContext()

const inititalState={
    loading:false,
    cart:CartItems,
    total:0,
    amount:0,
}
const AppProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,inititalState)

    const clearCart =()=>{
        dispatch({type:'CLEAR_CART'})
    }
const remove=(id)=>{
    dispatch({type:'REMOVE',payload:id})
}
const increase =(id)=>{
    dispatch({type:'INCREASE',payload:id})
}
const decrease =(id)=>{
    dispatch({type:'DECREASE',payload:id})
}


    return(
        <AppContext.provider
            value={{...state,clearCart,remove,increase,decrease}}>
                {children}
         </AppContext.provider>
    )
}
export const useGlobalContext = ()=>
{
    return useContext(AppProvider)
}