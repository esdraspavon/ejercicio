import React, { Component } from "react";

class Form extends Component {
  stringRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    let string = this.stringRef.current.value;

    //enviar al componente principal
    this.props.callCalculate(string);

    //Resetear el formulario
    e.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="string">
          <label>String</label>
          <br/>
          <input name="string" ref={this.stringRef}/>
        </div>

        <button type="submit" className="boton">
          Calculate
        </button>
      </form>
    );
  }
}

export default Form;