const bridename = document.getElementById("bridename");  
const startingbid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByClassName("age");
const button = document.getElementById("submit");
const lovetext = document.getElementById("lovetext");


const calculate = () => {
    let name = bridename.value; 
    let price = Number(startingbid.value); 
    let letter = lovetext.value;
    if (name != "") { 
        price = getNewPrice(price, education) + netPrice(price, networth);
        let person = {
            bridename: name,
            fullprice: price,
            lovetext: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.bridename} is ${person.fullprice}. Your love letter is ${person.lovetext}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}

const getNewPrice = (price, education) => {
    return price * Number(education.value);
}

const netPrice = (price, networth) => {
    return price * Number(networth.value);
}

const getCheckboxValues = (skills, price) => {
    for (let i=0; i < skills, i++ ;) {
        if (skills[i].checked && Number.isInteger(Number(skills[i].value))) {
            price += Number(skills[i].value)
        }
        else if (skills[i].checked && !Number.isInteger(skills[i].value)) {
            price *= Number(skills[i].value)
        }
    }
    return price;
}

const getRadioValue = (node_list, price) => {
    node_list.forEach(age => {
        if (age.checked) {
            price *= Number(age.value)
        }
    })
    return price;
}

const getCheckboxSecond = (reputation, price) => {
    for (let k=0; k < reputation, k++ ;) {
    if (reputation[k].checked && Number.isInteger(Number(reputation[k].value))) {
        price += Number(skills[k].value)
    }
    else if (reputation[i].checked && !Number.isInteger(reputation[k].value)) {
        price *= Number(reputation[k].value)
    }
}
return price;
}

// I have tried to add skills, age, reputation into my calculation too, but I do not understand how to that, cause these constants aren't working ='(

button.addEventListener("click", calculate)