// import React from 'react';
// import Hello from './Hello';
import './App.css';
// import Wrapper from './Wrapper';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

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

/*2*/

// function App(){
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color:'aqua',
//     fontSize:24,
//     padding: '1rem'
//   }
//   return(
//     <>
//     {/*주석은 화면에 보이지 않습니다 */}
//     /* 중괄호로 감싸지 않으면 화면에 보입니다.*/
//     <Hello
//       // 열리는 태그 내부에서는 이렇게 주석을 작성 할  수 있습니다.
//     />
//     <div style={style}>{name}</div>
//     <div className='gray-box'>hello</div>
//     </>
//   );
// }


// function App(){
//   return(
//     <Wrapper>
//       <Hello name="react" color="black" isSpecial/>
//       <Hello color="red"/>
//     </Wrapper>
//   );
// }
// //isSpecial 만 적으면 isSpecial={true}와 같은 뜻


// function App(){
//   return (
//     <Counter />
//   )
// }

// function App(){
//   const users = [
//     {
//         id:1,
//         username:'velopert',
//         email:'public.velopert@gmail.com'
//     },
//     {
//         id:2,
//         username:'tester',
//         email:'tester@example.com'
//     },
//     {
//         id:3,
//         username:'liz',
//         email: 'liz@example.com'
//     }
//   ];

//   const nextId = useRef(4);
//   const onCreate = () => {
//     //나중에 구현 할 배열에 항목 추가하는 로직
//     // ...
//     nextId.current += 1;
//   }

//   return <UserList users={users}/>;
// };


// function App(){
//   const user = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];

//   const nextId = useRef(4);

//   const onCreate = () => {
//     nextId.current += 1;
//   }

//   return(
//     <>
//       <CreateUser/>
//       <UserList users = {user}/>
//     </>
//   )
// }


import React, {useRef, useState} from 'react';


function App(){
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  })
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false
    }
  ]);
  const nextId = useRef(4);

  //항목 추가
  const onCreate = () => {
    const user = { // id는 업데이트 된 id, username, email은 input값
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]); // setUsers(users.concat(user));
    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1;
  };

  //항목 제거
  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // user.id가 id 인 것을 제거함
    setUsers(users.filter(user=> user.id !== id))
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active}: user
      )
    )
  }

  return(
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users = {users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}
  


export default App;
