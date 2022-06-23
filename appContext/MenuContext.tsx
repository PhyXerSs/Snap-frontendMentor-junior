import React, { useReducer } from 'react'
import { createContext } from "react"
import MenuReducer, { initialStateMenu } from './MenuReducer';

export const MenuContext = createContext(initialStateMenu);

const MenuContextProvider = ({children}:{children:JSX.Element}) =>{
    const [state , dispatch] = useReducer(MenuReducer , initialStateMenu);
    const value = {
        isExpand:state.isExpand,
        setIsOpenMenu: (val:boolean) =>{
            dispatch({type:"OPEN" })
        },
        setIsCloseMenu: (val:boolean) => {
            dispatch({type:"CLOSE"})
        },
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider;

