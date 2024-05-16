
function validateSyntax() {
    let input = document.getElementById("petInput").value;
    // Validation logic goes here
    const petCheck = /^pet_[a-zA-Z0-9]+$/;
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
if( petCheck.test(input)){
    document.getElementById("result").textContent = "Valid Input";
} else{
    document.getElementById("result").textContent = "Invalid Input";
}
            // document.getElementById('result').innerText = result;
}
//This function will clear the input field and result area to make it more user friendly  
function clearInput(){
    // this line turns the value inside the input field to an empty string
    document.getElementById("petInput").value = "";
     // this line turns the text of the result  to an empty string
    document.getElementById("result").textContent = "";
}


