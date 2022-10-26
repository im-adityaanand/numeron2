let score = 0;
let time = 20;

// Iteration 2: Generate 2 random number and display it on the screen
let num1;
let num2;
let num3;
function genereateNum(){
    time = 20;
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);

    let pickOne = Math.floor(Math.random()*5);
    console.log(pickOne);

    switch(pickOne){
        case 0:
            document.querySelector("#number3").innerHTML = num1 + num2;
            num3 = num1 + num2;
            console.log("+");
            break;
        case 1:
            document.querySelector("#number3").innerHTML = num1 - num2;
            num3 = num1 - num2;
            console.log("-");
            break;
        case 2:
            document.querySelector("#number3").innerHTML = num1 * num2;
            num3 = num1 * num2;
            console.log("*");
            break;
        case 3:
            if(num2 != 0 && num1%num2 == 0){
                document.querySelector("#number3").innerHTML = Math.round(num1 / num2);
                num3 = Math.round(num1/num2);
                console.log("/");
            } else {
                document.querySelector("#number3").innerHTML = num1 + num2;
                num3 = num1 + num2;
            }
            break;
        case 4:
            document.querySelector("#number3").innerHTML = Math.round(num1 % num2);
            if(num2 != 0 && num1>num2){
                num3 = Math.round(num1 % num2);
                console.log("%");
            } else {
                document.querySelector("#number3").innerHTML = num1 - num2;
                num3 = num1 - num2;
                console.log("-");
            }
            break;

        default:
            document.querySelector("#number3").innerHTML = num1 + num2;
            console.log("default");
            break;
    }

    document.querySelector("#number1").innerHTML = num1;
    document.querySelector("#number2").innerHTML = num2;
}
genereateNum();

// Iteration 3: Make the options button functional

document.querySelector("#plus").addEventListener("click", function(){
    if(num1 + num2 === num3){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#minus").addEventListener("click", function(){
    if(num1 - num2 === num3){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#mul").addEventListener("click", function(){
    if(num1 * num2 === num3){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#div").addEventListener("click", function(){
    if(Math.round(num1 / num2) === num3){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#per").addEventListener("click", function(){
    if(Math.round(num1 % num2) === num3){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

// Iteration 4: Build a timer for the game

function ticktick(){
    localStorage.setItem('score', score);
    document.querySelector("#timer").innerHTML = time;
    if(time == 0){
        clearInterval(timeCount);
        window.location.href = "gameover.html";
    }
    time--;
}

let timeCount = setInterval(ticktick, 1000);
