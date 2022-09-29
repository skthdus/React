import React from "react"

// 매개변수로 Object 를 적을 때 주의!
// 1) ({속성}) => 중괄호 생략 금지!
// 2) 다중 속성을 가져올 때 
    // ({속성}, {속성}) => XXXXX금지!
    // ({속성, 속성}) => OOOO 하나의 객체 안에 다중 속성


const MemberStyle = {
        fontSize : '10px',
        width : '500px',
        color : 'white',
        backgroundColor : 'lightblue',
        marginLeft : '100px'
      }

// const boxStyle={
//     backgroundColor : 'ivory',
//     border : '1px solid brown',
//     textAlign : 'center',
//     marginTop : '20px',
//     borderRadius : '10px'
// }

const Member = ({team, name}) => { 
             // ({teamName, memberName})
    return(
        <div style={MemberStyle} align='center'>
            <h2>{team}</h2>
            <h2>{name}</h2>
            <hr></hr>

             {/* 
                <h2>{teamName}</h2> 
                <h4>{memberName}</h4>
            */}

        </div>
    )
}

export default Member