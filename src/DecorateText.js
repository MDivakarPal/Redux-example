import React from 'react'
import {connect} from 'react-redux'

 function DecorateText({children,state}) {
     console.log(state)
    return (
        <div style={{color:state.color,fontSize:state.size,backgroundColor:state.theme}}>
        {children}
    </div>    )
}
const mapState=(state)=>{
    return {state};
}
  export default connect(mapState)(DecorateText)