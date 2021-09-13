import { announceResult, robotChoice } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('robotChoice function', () => {

  test('returns the winning item if cheating is true', () => {
    const playerSelection = 'Moai';
    const cheating = true;

    const actual = robotChoice(playerSelection, cheating);
    const expected = 'Tree';

    expect(actual).toBe(expected);
  });

  test('returns a valid item if cheating is false', () => {
    const playerSelection = 'Moai';
    const cheating = false;

    const actual = robotChoice(playerSelection, cheating);
    const expected = ['Moai', 'Axe', 'Tree'];

    // expected.includes(actual);

    // expect(actual).toBe(expected);
    // expect(expected.includes(actual)).toBe(true);

    expect(expected).toContain(actual);
    // flakey
  });

});
