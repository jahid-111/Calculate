console.log('Loaf From_ App.js')

function getInputToValue(inputId){

    const getId = document.getElementById(inputId);
    const getString = getId.value;
    const getValue =parseFloat(getString);

    return getValue;
}

function totalExpanses(){
    const food = getInputToValue("food");
    const rent = getInputToValue("rent");
    const doctor = getInputToValue("doctor");

    const totalExpanses = food + rent + doctor;
    return totalExpanses;
}

function setValueinTag(theTagId, setValue){
    const TagId = document.getElementById(theTagId);
    TagId.innerText = setValue;
}

document.getElementById('calculate').addEventListener('click', function(){

    const income = getInputToValue("Income");
    const expansesTotal = totalExpanses();
    const balanced = income - expansesTotal;
    setValueinTag("expanes",expansesTotal)
    setValueinTag("balance",balanced)

    // console.log(expansesTotal)

})