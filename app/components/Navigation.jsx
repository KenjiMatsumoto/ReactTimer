var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-Link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/CountDown" activeClassName="active-Link">CountDown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.tsuretsurediary.com/" target="_blank">Kenji Matsumoto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
