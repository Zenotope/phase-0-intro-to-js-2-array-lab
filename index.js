// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

console.log(cats)

function destructivelyAppendCat(){
    cats.push("Ralph")
    console.log(cats)
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
    console.log(cats)
}

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}

function appendCat(){
    return([...cats, "Broom"])
}

function prependCat(){
    return(["Arnold", ...cats])
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}