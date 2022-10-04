// 함수형 컴포넌트 구조 : rafce
// 클래스형 컴포넌트 구조 : rcc

// LifeCycle 어플리케이션의 생애주기
// 순서 : a -> b -> c -> d

import React, { Component } from 'react'

export default class Ex07 extends Component {

    // 1. Class Component 에서 state 관리

    // a. constructor 최초 생성
    //      => state 관리, 변수선언, 데이터 관리
    constructor(props){
        super(props) // > 부모 클래스 생성
        console.log('a. constructor')
        this.state = {
            num : 0
        }
    }

    // 2. 함수는 선언 없이 사용
    ck = () =>{
        console.log('ck')
        this.setState({
            num : this.state.num +1
        })
    }


    // b. render 화면을 렌더링 할 때 >(ing)
    //      => 화면을 구성하는 요소
  render() {
    console.log('b. render')
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.ck}>+1</button>
      </div>
    )
  }

  // c. componentDidMount 화면 마운트됨!
  //  => API Call
  componentDidMount(){
    console.log('c. componentDidMount')
  }

  // d. componentDidUpdate 값이 변경되어 갱신이 일어난 직후 호출
  // > 값이 바뀐다면 일어난 일들을 적음
  componentDidUpdate(){
    console.log('update!')
  }
}
