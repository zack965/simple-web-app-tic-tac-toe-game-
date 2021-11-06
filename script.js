let array_items = ["Rock", "Paper", "scissors"];
// 0 rock
// 1 paper
// 2  scissors

let user_score = 0;
let computer_score = 0;
// 0  - 1  == 1
// 0  - 2  == 0
let warka_container = document.getElementsByClassName("warka_container");
console.log(warka_container);
for (let index = 0; index < warka_container.length; index++) {
  //const element = array[index];
  warka_container[index].addEventListener("click", () => {
    //alert("hhh");
    GetSelectedChoice(index);
  });
}
function SetComputerChoice(id) {
  let res = "";
  if (id == 0) {
    res = "Rock";
  } else if (id == 1) {
    res = "paper";
  } else if (id == 2) {
    res = "scissors";
  }
  document.getElementById("comp_choice").innerHTML = res;
}
function GetSelectedChoice(id) {
  let random_choice_computer = Math.floor(Math.random() * 3);
  SetComputerChoice(random_choice_computer);
  console.log(random_choice_computer);
  if (random_choice_computer == id) {
    console.log("Nothing");
  } else if (random_choice_computer == 0 && id == 1) {
    console.log("winner is user");
    user_score++;
    document.getElementById(
      "socre_user"
    ).innerHTML = `score user is ${user_score}`;
  } else if (random_choice_computer == 0 && id == 2) {
    console.log("winner is pc");
    computer_score++;
    document.getElementById(
      "score_pc"
    ).innerHTML = `score pc is : ${computer_score}`;
  } else if (random_choice_computer == 1 && id == 0) {
    console.log("winner is pc");
    computer_score++;
    document.getElementById(
      "score_pc"
    ).innerHTML = `score pc is : ${computer_score}`;
  } else if (random_choice_computer == 1 && id == 2) {
    console.log("winner is user");
    user_score++;
    document.getElementById(
      "socre_user"
    ).innerHTML = `score user is ${user_score}`;
  } else if (random_choice_computer == 2 && id == 0) {
    console.log("winner is user");
    user_score++;
    document.getElementById(
      "socre_user"
    ).innerHTML = `score user is ${user_score}`;
  } else if (random_choice_computer == 2 && id == 1) {
    console.log("winner is pc");
    computer_score++;
    document.getElementById(
      "score_pc"
    ).innerHTML = `score pc is : ${computer_score}`;
  }
}
