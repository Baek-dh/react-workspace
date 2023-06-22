import React, { Component } from 'react';

class ClassPrototype extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    // 생성자 함수
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }
    
    var cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();
  }

  render() {
    return (
      <h2>[ THIS IS Class ]</h2>
    )
  }
}

export default ClassPrototype;