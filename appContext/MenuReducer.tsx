export interface MenuContextType{
    isExpand : boolean;
    setIsOpenMenu:any;
    setIsCloseMenu:any;
}

export const initialStateMenu = {
    isExpand : false ,
} as MenuContextType;

export default function MenuReducer(state:MenuContextType , action:any){
    const { type } = action;
    switch(type){
        case "OPEN":
            return{
                ...state,
                isExpand:true, 
            };
        case "CLOSE":
            return{
                ...state,
                isExpand:false,
            };
        default:
            return state;
    }
    
}