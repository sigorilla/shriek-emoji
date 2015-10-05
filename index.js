var emojiValues = [
  'smile',
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

module.exports = function (messages, callback) {
  try {
    callback(null, messages.map(function (message) {
      var emojiMessage = message;
      emojiMessage.text = message.text
        .replace(/:(\w{3,10}):/gmi, function (string, firstVal) {
          if (emojiValues.indexOf(firstVal) >= 0) {
            return '<span class="emoji emoji-' + firstVal + '"></span>';
          } else {
            return string;
          }
        });
      return emojiMessage;
    }));
  } catch (err) {
    callback(err, null);
  }
};

module.exports.forEvent = 'channelGet';
