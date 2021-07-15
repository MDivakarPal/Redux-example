import logo from './logo.svg';
import './App.css';
import DecorateText from './DecorateText'
import {connect} from 'react-redux'
function App({state,disptach}) {
  console.log(disptach);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DecorateText>
          <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </DecorateText>
        <DecorateText>
          <button onClick={()=>disptach({type:'toggle_size'})}>Change Size</button>
        </DecorateText>
        <DecorateText>
          <button onClick={()=>disptach({type:'toggle_color'})}>Change Color</button>
        </DecorateText>
        <DecorateText>
          <button onClick={()=>disptach({type:'toogle_theme'})}>Change Theme Color</button>
        </DecorateText>
      </header>
    </div>
  );
}
const mapStateToProps=(state)=>{
  console.log({state});
  return {state};
}

const mapStateToDispatch=(disptach)=>{
  console.log(disptach)
  return {disptach};
}
export default connect(mapStateToProps,mapStateToDispatch)(App);
