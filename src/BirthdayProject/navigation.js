import React from 'react'
import {useGlobalContext} from './context'
const Navbar=()=>{
    const {amount} = useGlobalContext()
    return(
        <nav>
            <div className="nav-center">
                <h3>useReducer</h3>
                <div className='nav-container'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'> 
                    <path d='M10.707 7.05L10 0.343 4.343 12l1.414 
                        1.414L10 9.172l4.243 4.242L15.657 12z'/>
                    </svg> 
                    <div classname='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>           
                </div>
            </div>
        </nav>
    )
}
export default Navbar;