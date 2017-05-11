//Simple Counter

import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import expect from 'expect';
//import SimpleCounter from './SimpleCounter';

const addCounter = (list) => {
  return [...list, 0];
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),  //0
    ...list.slice(index + 1)  //20
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),  //0 要素の1番目のみ切り出し
    list[index] + 1,          //11 要素の2番目をプラス1
    ...list.slice(index + 1)  //20 要素のindex+1番目を切り出し
  ];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('ok');

ReactDOM.render(
  <hoge />,
  document.getElementById('root')
)
