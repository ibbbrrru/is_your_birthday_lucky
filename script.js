const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkNumberButton = document.querySelector("#check-number");
const outputMessage = document.querySelector("#output-message");

checkNumberButton.addEventListener("click", checkBirthdayIsLucky)

function checkBirthdayIsLucky() {
    // console.log("lucky number",luckyNumber.value);
    // console.log("dob",dateOfBirth.value);
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    // console.log(sum);
}

function calculateSum(dob) {
    //return 12; // checking the function call working or not throuth this return
    //console.log( dateOfBirth.value,luckyNumber.value);
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    // return sum;
    if(sum && dob){
    compareValues(sum, luckyNumber.value);}
    else{
    outputMessage.innerText = "Please enter both the fields 😡";}
    console.log("sum:"+sum,"dob:"+dateOfBirth.value,"luckyno:"+luckyNumber.value);
    console.log(typeof sum,typeof dateOfBirth.value,typeof luckyNumber.value);
}

function compareValues(sum, luckyNumber) {
    if(sum % luckyNumber == 0) {
        outputMessage.innerText = "your birthday is lucky 🚀";
    } else {
        outputMessage.innerText = "your birthday is not lucky 😥";
    }
    console.log(outputMessage.innerText);
    console.log(typeof outputMessage.innerText);
}