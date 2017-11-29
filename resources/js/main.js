/**************** Mad Libs main ****************/

var getJSON = function() {
  var textJSON = '{ "MadLibsStories":[ ' +
                 '  { ' +
                 '	"StoryTitle":"Story 1", ' +
                 '	"WordsNeeded":["noun", "verb"],' +
                 '	"Story":"There once was a [noun] that [verb]!" ' +
                 '  }' +
                 ']}'

  return JSON.parse(textJSON);
};

var putJSON = function() {

};

var selectStory = function(list) {
  var i=0;
  var dispText = '';

  $('#storybody').empty(); // this will delete what is in the storybody div already
  $('#storybody').append("<h2>Story List</h2>");
  if(list.MadLibsStories.length <= 0) {
    dispText = '' +
      '<h2>Warning!</h2>' +
      '<p>You do not have any stories created. Please create a story</p>';
  } else {
    //dispText = '<h2>Story List</h2>';
    while (i < list.MadLibsStories.length) {
      console.log (list.MadLibsStories[i].StoryTitle);
      dispText += '<button class="story_list_item" onclick="function(return ' + i + ')">' + list.MadLibsStories[i].StoryTitle + '</button>';
      i++;
    }
  };
  $("#storybody").append(dispText);

};

var getWords = function() {

};

var makeStory = function() {

};

var readStory = function() {
  storyList = getJSON();
  storyId = selectStory(storyList)
}

var main = function() {

}
