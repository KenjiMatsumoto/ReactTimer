var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var  Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('start');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('start');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on pause status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('pause');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('pause');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('stop');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stop');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });

});
