let screen = document.getElementById("inputext")

let calc = (number)=>{
  screen.value+=number
}


let calculate=()=>{
    try {
        screen.value=eval(screen.value)
    } catch (error) {
        alert('invalid input')
    }
}




function clr() {
    screen.value= " "
}

function del() {
    screen.value= screen.value.slice(0,-1)
}
