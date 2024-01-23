
//read in the file
let dataJSON = {
    "information" : {
        "year": "2024"
    },
    "categories":[
        {
            "category": "HOUSING",
            "amount": 3000.
        },
        {
            "category": "CAR",
            "amount": 570.0
        },
        {
            "category": "GROCERIES",
            "amount": 500.
        },
        {
            "category": "DONATION",
            "amount": 1340
        },
        {
            "category": "MISC",
            "amount": 475
        },
        {
            "category": "RETIREMENT",
            "amount": 1000
        },
        {
            "category": "EDUCATION",
            "amount": 415.00
        },
        {
            "category": "CLOTHES",
            "amount": 150.00
        },
        {
            "category": "MEDICAL",
            "amount": 175.00
        }
    ]
};

//put data to environment data
let year = dataJSON.information.year;
let cats = dataJSON.categories;

for(var j =0; j < cats.length; j++){
    var category = cats[j].category;
    var amount = cats[j].amount;

    //create the sql statements
    for(i = 1; i <= 12; i++){
        var monthNumber = i;
        var MonthName = getMonthName(monthNumber);
                var dbString = `INSERT INTO budget_months (category, month,year,c_money,month_id) VALUES ('` + category + `','` + MonthName + `','` + year + `',` + amount + `,` + monthNumber + `);`;
        console.log(dbString);
    }
}

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}