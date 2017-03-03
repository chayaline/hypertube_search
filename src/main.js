console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Layout),
    document.getElementById('mount')
  );
});
