import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// import the library under test
import axios from 'axios';

// tell jest to fake that library
jest.mock('axios');

// create fake data
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

test('can display high scores from an API', () => {
  // tell jest to interrupt axios.get requests
  axios.get.mockResolvedValue({ data });

  // render the component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  debug();

  // find the high scores button
  const highScoresButton = getByTestId('high-scores');

  // click on the high scores button
  fireEvent.click(highScoresButton);

  return findByText('Alice', { exact: false });
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
