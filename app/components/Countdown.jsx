var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

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
      }
    }
  },
  //タイマー処理
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  //CountdownFormより取得した値をセットする
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'start'
    });
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown
