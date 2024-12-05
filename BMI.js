window.onload= ()=>{
    let button =document.querySelector('#btn');
    button.addEventListener('click', calculateBMI);
}
function calculateBMI(){
    let height = document.querySelector("#height").value;
    let weight = document.querySelector(" #weight").value;
    let result = document.querySelector("#result");
    // console.log(document.querySelector("#height").value);
    // console.log(document.querySelector("#weight").value);

    if(!height || isNaN(height) || height<0 ){
        result.innerText="Please enter valid height";
        return;
    }
    else if(!weight || isNaN(weight) || weight<0 ){
        result.innerText="Please enter valid weight";
        return;
    }

    // let BMI = (weight/((height*height)/10000)).toFixed(2);  2nd way just below
    let BMI = (weight/Math.pow(height/100,2)).toFixed(2);

    if (BMI<18.5){
        result.innerText=`Under weight: ${BMI}`;
    }
    else if(BMI>=18.5 && BMI<24.9){
        result.innerText=`Normal: ${BMI}`;
    }
    else if(BMI>=18.5 && BMI<24.9){
        result.innerText=`Over weight: ${BMI}`;
    }
    else if(BMI>=18.5 && BMI<24.9){
        result.innerText=`Obesity I: ${BMI}`;
    }
    else if(BMI>=18.5 && BMI<24.9){
        result.innerText=`Obesity II: ${BMI}`;
    }
    else{
        result.innerText=`Extreme Obesity: ${BMI}`;
    }
}