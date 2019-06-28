import React, { Component } from "react";
//import { TransitionGroup, CSSTransition } from "react-transition-group";

class Result extends Component {
  render() {
    const result = this.props.result;
    let msg;
    if (!result){
        msg = "Ingresa un string";
    }else{
        msg = `The value is: ${result.value}`;
    }
    return (
      <div className="gran-resultado">
        {msg}
        {/* <TransitionGroup component="span" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={result}
            timeout={{ enter: 500, exit: 500 }}
          >
            <span>{result}</span>
          </CSSTransition>
        </TransitionGroup> */}
      </div>
    );
  }
}
export default Result;