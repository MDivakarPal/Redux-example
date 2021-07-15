import {THEME,COLOR,FONT_SIZE} from './Data'
const golballyAccsible={
    theme:THEME.DARK,
    color:COLOR.PRIMARY,
    size:FONT_SIZE.XL
  }
function firstReducer(state=golballyAccsible,action) {
    if(action.type==='toogle_theme')
    return {...state,theme:state.theme===THEME.DARK? THEME.LIGHT : THEME.DARK}
    if(action.type==='toggle_color')
    return {...state,color :state.color===COLOR.PRIMARY?COLOR.SECONDRY:COLOR.PRIMARY};
    if(action.type==='toggle_size')
    return {...state,size:state.size===FONT_SIZE.XL?FONT_SIZE.M : FONT_SIZE.XL}
    else 
    return state;
 }

 export {firstReducer}