import React from 'react';

// function User({user}){
    //  // null checking
    // if (!user){
    //     return null;
    // }
    // return(
    //     <div>
    //         <div>
    //             <b>ID</b>: {user.id}
    //         </div>
    //         <div>
    //             <b>Username:</b> {user.username}
    //         </div>
    //     </div>
    // );
// }

// 위에 내용과 같음
function User({users}){
    // if (!users) return null;
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    );
}

// function User({users, onToggle}){
//     if(!users) return null;

//     return(
//         <ul>
//             {users.map(user => (
//                 <li key = {user.id} onClick={()=> onToggle(user.id)}>
//                     {user.username}
//                 </li>
//             ))}
//         </ul>
//     );
// }

// User.defaultProps = {
//     onToggle: () => {
//         console.warn('onToggle is missing!');
//     }
// };

export default User;