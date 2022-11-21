 
 function changeColor(){
    let data = document.getElementById("date").value;
    // console.log(data);
    if(data >= 1 && data <= 31){
        let colorchange = document.getElementById(data);
        let colorName = colorchange.style.getPropertyValue("background-color");
        // console.log(colorName);
        if(colorName == "" || colorName == "white"){
            colorchange.style.backgroundColor = "green";
        }
        else{
            colorchange.style.backgroundColor = "white";
        }
    }
    else{
        alert("Please Enter correct Date")
    }
    
    
    document.getElementById("date").value = null;
}