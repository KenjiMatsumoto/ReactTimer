var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stop'
    };
  },
  //コンポーネントが更新されDOMが一新された直後に実行されます。 このメソッドは初期描画では呼び出されません。
  componentDidUpdate: function(prevProps, prevState) {
    //ステータスが変わっていた場合処理実施
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'start':
          this.startTimer();
          break;
        case 'stop':
          this.setState({count: 0});
        case 'pause':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUpdate: function(nextProps, nextState) {

  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {
  
    clearInterval(this.timer);
    this.timer = undefined;
  },
  //タイマー処理
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({countdownStatus: 'stop'});
      }
    }, 1000);
  },
  //CountdownFormより取得した値をセットする
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'start'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlsArea = () => {
      if (countdownStatus !== 'stop') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    }
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlsArea()}
      </div>
    );
  }
});

module.exports = Countdown
