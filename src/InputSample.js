// import React from 'react';

// function InputSample(){
//     return(
//         <div>
//             <input />
//             <button>초기화</button>
//             <div>
//                 <b>값: </b>
//             </div>
//         </div>
//     )
// }

// import React, {useState} from 'react';

// function InputSample() {
//     const [text, setText] = useState('');

//     const onChange = (e) => {
//         setText(e.target.value);
//     }

//     const onReset = () => {
//         setText('');
//     }

//     return (
//         <div>
//             <input onChange={onChange} value={text} />
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값: {text}</b>
//             </div>
//         </div>

//     )

// }


// function InputSample(){
//     const change = (e) => {
        
//     };

//     const onReset = () => {
        
//     };

//     return(
//         <div>
//             <input placeholder='이름'/>
//             <input placeholder='닉네임'/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값: </b>
//                 이름 (닉네임)
//             </div>
//         </div>
//     );
// }


// function InputSample(){
//     const [inputs, setInputs] = useState({
//         name:'',
//         nickname:''
//     });

//     const {name, nickname} = inputs;

//     const onChange = (e) => {
//         const {value, name} = e.target;
//         setInputs({
//             ...inputs,
//             [name] : value
//         });
//     };
    
//     const onReset = () => {
//         setInputs({
//             name: '',
//             nickname: '',
//         })
//     };

//     return (
//         <div>
//             <input name="name" placeholder="이름" onChange={onChange} value={name} />
//             <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값: </b>
//                 {name} ({nickname})
//             </div>
//         </div>
//     )
// }

import React, {useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname: ''
    });

    const nameInput = useRef();

    const{name, nickname, id} = inputs;

    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs, // 여러개의 input값을 받으려면 ...inputs가 필요하다.
            [name]:value
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname: '닉네임' // id는 리셋할 값을 지정해 주지 않아서 리셋 work가 안된다.
        });
        nameInput.current.focus(); //초기화 버튼을 눌렀을 때, focus 이동
    };

    return(
        <div>
            <input
                name="name"
                placeholder='이름'
                onChange={onChange} //이걸 안하면 값이 안 바뀜
                value={name}
                ref={nameInput} // 여기로 focus 이동 
            />
            <input
                name="nickname"
                placeholder='닉네임'
                onChange={onChange}
                value={nickname}
            />
            <input 
                name="id"
                placeholder='id'
                onChange={onChange}
                value={id}
            />
            <button onClick={onReset} >초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname}): {id}
            </div>
        </div>
    );

}



export default InputSample;