
//categories
//'GROCERIES','MISC','NEED','AWS','CAR','HOUSING','EDUCATION','HOUSING - APT','MEDICAL','CLOTHES','OTHER','DONATION','OTHER','BUSINESS','SAVINGS','RETIREMENT'

//Payment Method
//'Chase Freedom','Chase Freedom Unlimited','Chase Prime','BMO','Capital One','N/A','Elements','Venmo','Cash','Bank of America','Lowes','Apple Card','HSA','BMO Bank','Kroger','Business Elements','Chase Sapphire Reserve'

//read in the file
let dataJSON = {
    "information" : {
        "name": "Kindle",
        "money": "11.99",
        "items": "Books",
        "category": "MISC",
        "person": "Both", //Seth, Emily, Both
        "paymentType": "Chase Price",
        "notes": "",
        "subscription": "Kindle"
    },
    "dates":  {
        "day": "02",
        "startMonth": "01",
        "startYear": "2021",
        "endMonth": "12",
        "endYear": "2025"
    }
};

//put data to environment data
let business = dataJSON.information.name;
let money = dataJSON.information.money;
let items = dataJSON.information.items;
let category = dataJSON.information.category;
let person = dataJSON.information.person;
let paymentType = dataJSON.information.paymentType;
let notes = dataJSON.information.notes;
let subscription = dataJSON.information.subscription;

//dates
let day = dataJSON.dates.day;
let startMonth = parseFloat(dataJSON.dates.startMonth);
let startYear = parseInt(dataJSON.dates.startYear);
let endMonth = parseFloat(dataJSON.dates.endMonth);
let endYear = parseInt(dataJSON.dates.endYear);

//calculate the month data
var months = [];
const startdate = new Date(`${startYear}-${startMonth}-${day}`);
const enddate = new Date(`${endYear}-${endMonth}-${day}`);

let goAround = monthDiff(startdate, enddate) + 1;

let loopMonth = startMonth;
let loopYear = startYear;

for(var i = 0; i < goAround; i++){
    var initalMonth = loopMonth;
    var valueMonth = "";

    if (loopMonth == 1){
        valueMonth = '01';
    } else if (loopMonth == 2){
        valueMonth = '02';
    }else if (loopMonth == 3){
        valueMonth = '03';
    }else if (loopMonth == 4){
        valueMonth = '04';
    }else if (loopMonth == 5){
        valueMonth = '05';
    }else if (loopMonth == 6){
        valueMonth = '06';
    }else if (loopMonth == 7){
        valueMonth = '07';
    }else if (loopMonth == 8){
        valueMonth = '08';
    }else if (loopMonth == 9){
        valueMonth = '09';
    }else if (loopMonth == 10){
        valueMonth = '10';
    }else if (loopMonth == 11){
        valueMonth = '11';
    }else if (loopMonth == 12){
        valueMonth = '12';
    }
    
    months.push(`${loopYear}-${valueMonth}-${day}`);

    if(loopMonth == 12){
        loopMonth = 1;
        loopYear += 1;
    } else {
        loopMonth += 1;
    }
}

//create the sql statements
for(i = 0; i < months.length; i++){
    var date = months[i];
    // console.log(date);
    //adding the 10 hour time for the timestamp
    var dateInDate = new Date(months[i]);    
    // console.log(dateInDate);
    const formattedDate = dateInDate.toLocaleString("en-US", {
        month: "short",
        year: "numeric"
    });
    const formattedYear = dateInDate.toLocaleString("en-US", {
        year: "numeric"
    });
    // console.log(months[i]);
    // console.log(formattedDate);
    
    var totalItem = formattedDate + " - " + items;

    var formatedsubscription = `${subscription} - ${formattedYear}`;
    // console.log(formatedsubscription);

    var dbString = `INSERT INTO trans (business, money,date,bought_date,items, category,person, payment_type, notes, subscription) VALUES ('` + business + `',` + money + `,'` + date + `','` + date + `','` + totalItem + `','` + category + `','` + person + `','` +paymentType + `','` + notes + `','` + formatedsubscription + `');`;
    console.log(dbString);
}

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   } 