// Write your solution here!
let cats=[];
cats.push("Milo", "Otis", "Garfield")
let newCats=[];

function destructivelyAppendCat(name="Ralph"){
    cats.push(name)
}
function destructivelyPrependCat(name="Bob"){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
newCats=[...cats,name='Broom']
return newCats;
}

function prependCat(name){
    newCats=[name='Arnold',...cats]
    return newCats;
}

function removeLastCat(){
newCats=cats.slice(0,2);
return newCats;
}

function removeFirstCat(){
    newCats=cats.slice(1,3);
    return newCats;
}

