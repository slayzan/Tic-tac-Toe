import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const Square = ({i}) => {
  return (
    <button className="square">{i}</button>
  );
}

const Board = ({i}) => <Square value={i} />  

const CreateBoard = () => {
  const status = 'Next Player: X';
    return (
      <Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          <Board i = '0' />
        </div>
      </Fragment>
    )
}


function Game() {
    return (
      <Fragment>
        <div className="game">
            <div className="game-board">
              <CreateBoard />
            </div>
        </div>
      </Fragment>
    );
}

ReactDOM.render(
   <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
