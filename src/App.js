import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import Summary from "./Summary";
import Result from "./Result";

class App extends Component {
  state = {
    result: "",
    histories: []
  };

  callCalculate = string => {
    let url = 'http://api.cuandorindo.com:5555/';
     //query con fetch api
     fetch(url,{
      method: 'POST', // or 'PUT'
      body: JSON.stringify({string}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
     })
     .then(resp => {
       return resp.json();
     })
     .then(data => {
       if(data.value){
        let today = new Date();
        let newHistories = [...this.state.histories,
          {id:this.state.histories.length,
            date:`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}
           ${today.getHours()} : ${today.getMinutes()}`,
          string,
          value:data.value
          }
        ]
        this.setState({ result: data, histories:newHistories });
       }
     })
     .catch(error => {
       console.log(error);
     });
  };

  render() {
    return (
      <div className="contenedor">
        <Header title="String Function Calculation" />
        <div className="contenedor-formulario">
          <Form callCalculate={this.callCalculate} />
          <Result result={this.state.result} />
          <Summary histories={this.state.histories}/>
        </div>
      </div>
    );
  }
}

export default App;