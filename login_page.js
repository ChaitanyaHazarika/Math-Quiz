function adduser() {
    var player_1= document.getElementById("player1_name").value;
    var player_2= document.getElementById("player2_name").value;
    console.log(player_1);
    console.log(player_2);

    localStorage.setItem("player1", player_1);
    localStorage.setItem("player2", player_2);

    window.location="quiz_game_page.html";
}