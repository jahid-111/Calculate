console.log('Load : From_ App.js')

function getInputToValue(inputId){

    const getId = document.getElementById(inputId);
    const getString = getId.value;
    const getValue =parseFloat(getString);

    return getValue;
}


function getTextToValue(textId){

    const getId = document.getElementById(textId);
    const getStringtoNumber = Number(getId.innerText);

    const getValue = parseFloat(getStringtoNumber);
    return getValue;
}

function setValueinTag(theTagId, setValue){
    const TagId = document.getElementById(theTagId);
    TagId.innerText = setValue;
}

function totalExpanses(){
    const food = getInputToValue("food");
    const rent = getInputToValue("rent");
    const doctor = getInputToValue("doctor");

    const totalExpanses = food + rent + doctor;
    return totalExpanses;
}

document.getElementById('calculate').addEventListener('click', function(){
        const income = getInputToValue("Income");
        const expansesTotal = totalExpanses();
        const balanced = income - expansesTotal;
    setValueinTag("expanes",expansesTotal);
    setValueinTag("balance",balanced);
})

 
document.getElementById('savings').addEventListener('click', function(){
        const income = getInputToValue("Income");
        const percent = getInputToValue('percent');
        const savingsParcent = income * percent / 100; 
    setValueinTag("saved",savingsParcent);   

        const expaneAfter =  getTextToValue("balance");
        const saved = getTextToValue("saved")
        const savedTotal = expaneAfter - saved;
    setValueinTag("remain-balance",savedTotal); 
})



