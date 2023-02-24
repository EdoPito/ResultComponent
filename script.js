import data from './data.json' assert {type: 'json'};

const category= data.map(obj => obj.category);
const score=data.map(obj => obj.score);
const icon=data.map(obj => obj.icon);


const reaction_img = document.getElementById('reactionLogo');
const Memory_img =document.getElementById('memoryLogo');
const verbal_img =document.getElementById('verbalLogo');
const visual_img = document.getElementById('visualLogo');

// display images
reaction_img.src= icon[0];
Memory_img.src=icon[1];
verbal_img.src=icon[2];
visual_img.src=icon[3];

//display categories

document.getElementById('reaction_categ').innerHTML= category[0];
document.getElementById('memory_categ').innerHTML= category[1];
document.getElementById('verbal_categ').innerHTML= category[2];
document.getElementById('visual_categ').innerHTML= category[3];


// display scores

document.getElementById('reaction_score').innerHTML= score[0];
document.getElementById('memory_score').innerHTML= score[1];
document.getElementById('verbal_score').innerHTML= score[2];
document.getElementById('visual_score').innerHTML= score[3];

// display average in H1

const average= document.getElementById('average');

const averageResult = Math.floor((score[0]+score[1]+score[2]+score[3])/score.length);

average.innerHTML= averageResult;
