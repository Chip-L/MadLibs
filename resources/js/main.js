/**************** Mad Libs main ****************/

function getJSON() {
  var textJSON = '{ "MadLibsStories":[ ' +
                 '  { ' +
                 '	"StoryTitle":"Story 1", ' +
                 '	"WordsNeeded":["noun", "verb"],' +
                 '	"Story":"There once was a [noun] that [verb]!" ' +
                 '  }' +
                 ']}'

  return JSON.parse(textJSON);
};

function putJSON() {

};

function selectStory(list) {
  var i=0;
  var dispText = '';
  if(list.MadLibsStories.length <= 0) {
    dispText = '' +
      '<h2>Warning!</h2>' +
      '<p>You do not have any stories created. Please create a story</p>';
  } else {
    dispText = '<h2>Story List</h2>';
    while (i <= list.MadLibsStories.length) {
      dispText += dispText + '<button class="story_list_item" onclick="return ' + i +'">' + list.MadLibsStories[i].StoryTitle + '</button>';
    }
  };
  document.getElementById("storybody").innerHTML= dispText;

};

function getWords() {

};

function makeStory() {

};

function readStory() {
  storyList = getJSON();
  storyId = selectStory(storyList)
}
