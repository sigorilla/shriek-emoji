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

module.exports = function (messages) {
  try {
    return messages.map(function (message) {
      var mdMessage = message;
      mdMessage.text = message.text
        .replace(/:(\w{3,10}):/gmi, function (string, firstVal) {
          if (emojiValues.indexOf(firstVal) >= 0) {
            return '<span class="emoji emoji-' + firstVal + '"></span>';
          } else {
            return string;
          }
        });
      return mdMessage;
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.forEvent = 'channelGet';
