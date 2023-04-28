// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Hello from './Hello';

function App(){
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color:'aqua',
    fontSize:24,
    padding: '1rem'
  }
  return(
    <>
    {/*주석은 화면에 보이지 않습니다 */}
    /* 중괄호로 감싸지 않으면 화면에 보입니다.*/
    <Hello/>
    <div style={style}>{name}</div>
    <div className='gray-box'>hello</div>
    </>
  );
}

export default App;