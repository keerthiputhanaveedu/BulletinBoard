import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';

ReactDOM.render(<Board count={10}/>,
    document.getElementById('react-container'));
