import React from 'react';

// function UserList(){
//     const users = [
//         {
//             id:1,
//             username:'velopert',
//             email:'public.velopert@gmail.com'
//         },
//         {
//             id:2,
//             username:'tester',
//             email:'tester@example.com'
//         },
//         {
//             id:3,
//             username:'liz',
//             email: 'liz@example.com'
//         }

//     ]

//     return(
//         <div>
//             <div>
//                 <b>{users[0].username}</b> <span>({users[0].email})</span>
//             </div>
//             <div>
//                 <b>{users[1].username}</b> <span>({users[1].email})</span> 
//             </div>
//             <div>
//                 <b>{users[2].username}</b> <span>({users[2].email})</span> 
//             </div>
//         </div>
//     )
// }



    // const users = [
    //             {
    //                 id:1,
    //                 username:'velopert',
    //                 email:'public.velopert@gmail.com'
    //             },
    //             {
    //                 id:2,
    //                 username:'tester',
    //                 email:'tester@example.com'
    //             },
    //             {
    //                 id:3,
    //                 username:'liz',
    //                 email: 'liz@example.com'
    //             }
    // ];

    // return (
    //     <div>
    //         <User user = {users[0]}/>
    //         <User user = {users[1]}/>
    //         <User user = {users[2]}/>
    //     </div>
    // );
    // return(
    //     <div>
    //         {users.map(user => (
    //             <User user = {user} key={user.id}/>
    //             //리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함. 
    //             // key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 필요. 
    //             //지금의 경우엔 id 가 고유 값.
    //         ))}
    //     </div>
    // )

// function User({user}){
//     return(
//         <div>
//             <b>{user.username}</b><span>({user.email})</span>
//         </div>
//     )
// }
    
// function UserList({users}){
//     return(
//         <div>
//             {users.map(user =>(
//                 <User user={user} key={user.id}/>
//             ))}
//             <b>hi</b>
//         </div>
//     );
    
// }

//배열에 항목 제거
function User({user, onRemove, onToggle}){
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     return() => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);

    return(
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:user.active ? 'green':'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            
            &nbsp;
            <span>({user.email})</span>
            </b> 
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;