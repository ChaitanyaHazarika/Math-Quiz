var player_1_name= localStorage.getItem("player1");
var player_2_name= localStorage.getItem("player2");
var correct_answer= 0
console.log(player_1_name);
console.log(player_2_name);

var player_1_score= 0;
var player_2_score= 0;

var player_question = "player1"
var player_answer = "player2"

document.getElementById("player1_name").innerHTML= player_1_name + ":";
document.getElementById("player2_name").innerHTML= player_2_name + ":";

document.getElementById("player1_score").innerHTML= player_1_score;
document.getElementById("player2_score").innerHTML= player_2_score;

document.getElementById("player_question").innerHTML= "Question Turn: "+player_1_name
document.getElementById("player_answer").innerHTML= "Answer Turn: "+player_2_name

function send() {
    var number1= document.getElementById("input_number1").value;
    var number2= document.getElementById("input_number2").value;
     correct_answer= number1*number2
    console.log(correct_answer);

    question= "<p>"+number1+" X "+ number2+ "</p>"
    answer_box= "Answer: <input type='number' id='answer' class='form-control' style= 'width: 30%;'>"
    btn= "<br><button id='checkbtn' class='btn btn-info' onclick='check()'>Check</button>"
    document.getElementById('output').innerHTML= question+answer_box+btn;
}
function check() {
    answer= document.getElementById("answer").value;
    if (answer==correct_answer) {
        alert("Correct")
        if (player_answer == "player1") {
            player_1_score+=10
            document.getElementById("player1_score").innerHTML = player_1_score;
        }else{
            player_2_score+=10
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    if (player_answer == "player1") {
        player_answer = "player2"
        player_question= "player1"
        document.getElementById("player_question").innerHTML = "QUESTION TURN :"+player_1_name;
        document.getElementById("player_amswer").innerHTML = "ANSWER TURN :"+player_2_name;
        
    }else{
        player_answer = "player1"
        player_question= "player2"
        document.getElementById("player_question").innerHTML = "QUESTION TURN :"+player_2_name;
        document.getElementById("player_answer").innerHTML = "ANSWER TURN :"+player_1_name;
    }
    document.getElementById("output").innerHTML =""
    document.getElementById("input_number_1").value= ""
    document.getElementById("input_number_2").value= ""
}