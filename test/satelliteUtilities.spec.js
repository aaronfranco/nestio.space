
import 'babel-polyfill'
import chai from 'chai';
// const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
import sinon from 'sinon';
import { checkAlert, checkAverage } from '../src/containers/satellite/satelliteUtilities'
// console.log(utils)
// const sinonChai = require('chai-sinon');
// chai.use(chaiAsPromised);
// chai.use(sinonChai);
let mockHistory = [
  { last_update: "one", altitude: 1 },
  { last_update: "two", altitude: 2 },
  { last_update: "three", altitude: 3 },
  { last_update: "four", altitude: 4 },
  { last_update: "five", altitude: 5 },
  { last_update: "six", altitude: 6 },
  { last_update: "seven", altitude: 7 },
  { last_update: "eight", altitude: 8 },
  { last_update: "nine", altitude: 9 },
  { last_update: "ten", altitude: 10 },
]
let shortHistory = [
  { last_update: "one", altitude: 1 },
  { last_update: "two", altitude: 5 }
]
describe('Unit Testing alert feature utilities', () => {
  it('Function updateAverage should return the average altitude from the last 6 positions in history', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAverage({ average: 0, history: mockHistory })
    // Assert the result was told
    expect(newData.average).to.equal(7.5);
  });
  it('Function updateAverage should return the average altitude from the all positions in history when length is less than 6', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAverage({ average: 0, history: shortHistory })
    // Assert the result was told
    expect(newData.average).to.equal(3);
  });
  it('Function pushAlert should return an alert object when the average altitude is under 160 and stable orbit is true AND history length is greater than 6', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAlert({ average: 150, orbit: true, history: mockHistory })
    // Assert the result was told
    expect(newData.alert.message).to.equal("WARNING: RAPID ORBITAL DECAY IMMINENT!");
  });
  it('Function pushAlert should return an alert object when the average altitude is over 160, stable orbit is false AND history length is greater than 6', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAlert({ average: 170, orbit: false, history: mockHistory })
    // Assert the result was told
    expect(newData.alert.message).to.equal("Sustained Low Earth Orbit Resumed.");
  });
  it('Function pushAlert should return false if orbit is false and average is less than 160', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAlert({ average: 150, orbit: false, history: mockHistory })
    // Assert the result was told
    expect(newData).to.equal(false);
  });
  it('Function pushAlert should return false if orbit is true and average is >= 160', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAlert({ average: 160, orbit: true, history: mockHistory })
    // Assert the result was told
    expect(newData).to.equal(false);
  });
  it('Function pushAlert should return false if history length is less <= 6', () => {
    // 10 + 9 + 8 + 7 + 6 + 5
    const newData = checkAlert({ average: 160, orbit: false, history: shortHistory })
    // Assert the result was told
    expect(newData).to.equal(false);
  });
});
