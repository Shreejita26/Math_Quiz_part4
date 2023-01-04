
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	player1_name= localStorage.getItem("player1");

	
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name
player2_name=localStorage.getItem("player2");
	
function send(){
	number1=document.getElementById("number1").value;
	number2=document.getElementById("number2").value;
	actual_answer=parseInt(number1)*parseInt(number2);
}
question_number="<h4>"+number1+"X"+ number2 +"</h4>";
input_box ="<br> answer:<input type='text' id='input_check_box'>";
check_button="<br> <br> <button class=btn btn-info onclick=check()>Check</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML = row;

question_turn ="player1";
answer_turn ="player2";
 function check(){
	get_answer=document.getElementById("input_check_box").value;
	if(get_answer==actual_answer){
		if(answer_turn=="player1")
		{
			player1_score=player1_score+1;
			document.getElementById("player1_score").innerHTML=player1_score;
		}
		else{
			player2_score=player2_score+1;
			document.getElementById("player2_score").innerHTML=player2_score;
		}
	}
	
 }

