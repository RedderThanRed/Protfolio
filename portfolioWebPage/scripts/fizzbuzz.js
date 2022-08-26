document.querySelector('#run').addEventListener('click', fizzBuzz)


// additional functionality: set the interation look something like 
// const interation = document.queryblabla('#iteration')
// re assing in each loop for (let i = interation). Loop wil begin on users input for interation


function fizzBuzz(){
    const num = parseInt(document.querySelector('#input').value)
    const fizz = parseInt(document.querySelector('#fizz-challenge').value)
    const buzz = parseInt(document.querySelector('#buzz-challenge').value)
    const output = document.querySelector('#output')

    output.innerText = ""


    for (let i = 1; i <= num; i++){
        if(i % fizz === 0 && i % buzz === 0){
            output.innerText += "\nFizzBuzz"
        } else if (i % fizz === 0){
            output.innerText += "\nFizz"
        } else if (i % buzz === 0){
            output.innerText += "\nBuzz"
        } else {
            output.innerText += `\n ${i}`
        }
    }
}


