var EmojiBtn = React.createClass({
  getInitialState: function () {
    return { showEmojiMenu : false };
  },

  toggleEmojiMenu: function () {
    var active = this.state.showEmojiMenu ? false : true;

    this.setState({ showEmojiMenu : active });
  },

  closeMenu: function (e) {
    if (!$(e.target).hasClass('emoji-btn')) {
      this.setState({ showEmojiMenu : false });
    }
  },

  componentDidMount: function () {
    window.addEventListener('click', this.closeMenu);
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
      <div className="emoji-container">
        <a className={classes} onClick={this.toggleEmojiMenu}></a>
        <EmojiMenu show={this.state.showEmojiMenu} items={emojiValues} toggle={this.toggleEmojiMenu}/>
      </div>
    )
  }
});

var EmojiMenu = React.createClass({
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
    var _this = this;
    var cx = require('classnames');
    var outerKey = 0;

    var classesEmojiMenu = cx({
      'emoji-menu': true,
      'active': this.props.show
    });

    var classesEmojiItems = cx({
      'emoji': true,
    });

    return (
      <div className={classesEmojiMenu}>
        { this.props.items.map(function(value){
          outerKey++;

          return <span className={classesEmojiItems + ' emoji-' + value}
            onClick={_this.addEmoji.bind(_this, value)} key={outerKey}></span>;
        }) }
      </div>
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
