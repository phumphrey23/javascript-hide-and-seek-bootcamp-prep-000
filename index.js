function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(){
  return document.querySelector('#nested .target')
};

function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li')
  for (var i=0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
};

function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1]
};
