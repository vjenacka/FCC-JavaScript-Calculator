import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 25%;
  margin: 6vh auto 0 auto;
  border: 1px solid #880e4f;
  font-weight: bold;

  .formula{
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #777;
    text-align: right;
    font-size: 1.4rem;
    border: 1px solid #880e4f;
    border-bottom:none;
    color:yellow;
    overflow-wrap: break-word;
  }

  #display {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #777;
    text-align: right;
    font-size: 1.4rem;
    border: 1px solid #880e4f;
    border-top:none;
    overflow-wrap: break-word;
  }

  .button-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);

    button {
      padding: 20px;
      color: black;
      background-color: #fff;
      border: 1px solid #880e4f;
      font-size: 1.2rem;
      cursor: pointer;
      outline: none;
    }
    #clear {
      grid-column: 1 / span 3;
      background: #e91e63;
      color: #fff;
    }
    #zero {
      grid-column: 1 / span 2;
    }
    #add,
    #equals,
    #divide,
    #multiply,
    #subtract {
      color: #fff;
      background: #e91e63;
    }
  }
`;

export class Calculator extends Component {
  render() {
    return (
      <Wrapper>
        <span className='formula'>{this.props.formula}</span>
        <span id="display">{this.props.currentValue}</span>
        <div className="button-grid">
          <button id="clear" onClick={this.props.initialize} value="AC">
            AC
          </button>
          <button id="divide" onClick={this.props.operators} value="/">
            /
          </button>
          <button id="seven" onClick={this.props.numbers} value="7">
            7
          </button>
          <button id="eight" onClick={this.props.numbers} value="8">
            8
          </button>
          <button id="nine" onClick={this.props.numbers} value="9">
            9
          </button>
          <button id="multiply" onClick={this.props.operators} value="x">
            x
          </button>
          <button id="four" onClick={this.props.numbers} value="4">
            4
          </button>
          <button id="five" onClick={this.props.numbers} value="5">
            5
          </button>
          <button id="six" onClick={this.props.numbers} value="6">
            6
          </button>
          <button id="subtract" onClick={this.props.operators} value="‑">
            -
          </button>
          <button id="one" onClick={this.props.numbers} value="1">
            1
          </button>
          <button id="two" onClick={this.props.numbers} value="2">
            2
          </button>
          <button id="three" onClick={this.props.numbers} value="3">
            3
          </button>
          <button id="add" onClick={this.props.operators} value="+">
            +
          </button>
          <button id="zero" onClick={this.props.numbers} value="0">
            0
          </button>
          <button id="decimal" onClick={this.props.decimal} value=".">
            .
          </button>
          <button id="equals" onClick={this.props.evaluate} value="=">
            =
          </button>
        </div>
      </Wrapper>
    );
  }
}

export default Calculator;
