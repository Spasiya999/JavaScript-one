//function

function fun1(){
    console.log("hello world")
}

fun1();

function fun2(name){
    console.log("hello " + name)
}

fun2('Pasindu');

function celToFa(val){
    let out = val*9;
    out /=5;
    out += 32;
    // console.log(out)
    return out
    console.log('bbb')
}

function convertAndOutput(){
    let out = document.querySelector('#out') 
    // console.log(celToFa(temp.innerHTML));
    out.innerHTML = celToFa(temp.innerHTML);
}

const convertBtn = document.querySelector('#cel-To-Fa')
const temp = document.querySelector('#temp')
convertBtn.addEventListener('click',convertAndOutput)


const input = document.querySelector('#temp-input');

// console.log(input)
// input.addEventListener('change', function(){
//     let out = celToFa(this.value)
//     document.getElementById('in-out').innerHTML = out;
// })

console.log(input)
input.addEventListener('keyup', function(){
    let out = celToFa(this.value)
    document.getElementById('in-out').innerHTML = out;
})