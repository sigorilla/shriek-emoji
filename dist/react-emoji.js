(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var EmojiBtn = React.createClass({displayName: "EmojiBtn",
  getInitialState: function () {
    return { showEmojiMenu : false };
  },
  toggleEmojiMenu: function () {
    var active = this.state.showEmojiMenu ? false : true;
    this.setState({ showEmojiMenu : active });
  },
  render: function () {
    var emojiValues = ['smile',
      'grin',
      'wink',
      'laugh',
      'tongue',
      'yum',
      'inlove',
      'business',
      'sad',
      'yeah',
      'pensive',
      'tears',
      'cry',
      'weary',
      'shout',
      'pokerface',
      'relieved',
      'angry',
      'rage',
      'angel',
      'fearful',
      'shoked',
      'astonished',
      'mask',
      'kisses',
      'devil',
      'heart',
      'thumbsup',
      'thumbsdown',
      'pointup',
      'victory',
      'okey'
    ];
    module.exports.emojiValues = emojiValues;
    var classes = this.state.showEmojiMenu ? 'emoji-btn active' : 'emoji-btn';
    return (
      React.createElement("div", null, 
        React.createElement("a", {className: classes, onClick: this.toggleEmojiMenu}), 
        React.createElement(EmojiMenu, {show: this.state.showEmojiMenu, items: emojiValues, toggle: this.toggleEmojiMenu})
      )
    )
  }
});

var EmojiMenu = React.createClass({displayName: "EmojiMenu",
  addEmoji: function(type) {
    var emoji = ' :' + type + ': ';
    var area = document.getElementsByName('text').item(0);
    if ( (area.selectionStart) || (area.selectionStart == '0') ) {
      var start = area.selectionStart;
      var end = area.selectionEnd;
      area.value = area.value.substring(0, start) + emoji + area.value.substring(end, area.value.length);
    }
    this.props.toggle();
    area.focus();
  },
  render: function () {
    var self = this;
    var classes = this.props.show ? 'emoji-menu active' : 'emoji-menu';
    return (
      React.createElement("div", {className: classes}, 
         this.props.items.map(function(value){
          var classes = 'emoji emoji-' + value;
          return React.createElement("span", {className: classes, onClick: self.addEmoji.bind(self, value)});
        }) 
      )
    )
  }
});

if (window.shriekMessagePlugins === undefined) {
  window.shriekMessagePlugins = [EmojiBtn];
} else {
  window.shriekMessagePlugins.push(EmojiBtn);
}

if (window.registerMessagePlugin !== undefined) {
  window.registerMessagePlugin(EmojiBtn);
}

},{}]},{},[1]);
