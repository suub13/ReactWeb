// 리액트 컴포넌트를 만들 떄는, 아래 임포트를 해줘야한다.
import React, {Component} from 'react';


// function Hello(props){
//     return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
// }
// color랑 name을 input으로 받아오는데 받는 name이 없을 때는, default props 값을 가져다 쓴다.
class Hello extends Component{
    static defaultProps = {
        name: '이름없음'
    }
    render() {
        const {color, name, isSpecial} = this.props;
        return (
            <div style={{color}}>
                { isSpecial && <b>*</b>} 
                안녕하세요 {name}
            </div>
        )
    }


}
// ? = isSpecial이 true이면 안녕하세요 앞에 * 추가, 아니면 null
// && = isSpecial이 true면 추가 아님 nothing

// Hello.defaultProps = {
//     isSpecial:true,
//     name: '이름없음'
// }



export default Hello;