//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!!!
//랜덤번호 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 사용하면 게임이 끝난다(더 이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history = []

playButton.addEventListener("click", play)  // addEventListener(이벤트명, 이벤트 발생시 실행 함수) > click 이벤트 발생 + play 함수 실행
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""}) //익명의 함수를 사용 > 함수 자체에 내용이 없고, 무엇보다도 userInput에서 잠깐 쓰고 종료되는 함수이므로 구지 함수명을 선언하지 않아도 됌(선언하면 메모리 차지되기 때문)

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100); //0~1 사이에 있는 소수점으로 떨어짐 > 곱하기 100 > Math.floor 사용해서 소수점 이하 숫자를 제거
    console.log("정답: ", computerNum);
}

function play() {   //이 함수를 playButton을 눌렀을 때, play라는 함수를 실행되도록 매개변수로 넘김 > play() X, play O
    let userValue = userInput.value;
    
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요."
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    console.log("chance", chances)

    if (userValue < computerNum) {
        resultArea.textContent = "Up!!!!"
        //console.log("Up!!!")
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!!!"
        //console.log("Down!!!")
    } else {
        resultArea.textContent = "맞추셨습니다!!!!"
        //console.log("맞추셨습니다!!!")
        gameOver = true;
    }

    history.push(userValue)
    console.log(history)

    if(chances < 1) {
        gameOver = true
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    //user input창이 깨끗하게 정리
    userInput.value = "";

    //새로운 번호 생성
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다!"

}

pickRandomNum();





















