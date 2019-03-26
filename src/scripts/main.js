const salesByWeek = [{
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.
// Here's your first data structure for the sales made last week. You will need to start off by iterating the array of sales with a forEach() method. Then iterate the entries of the vehicle property of each sale.

// Practice Exercise **************************************************

// const displayDiv = document.getElementById("display-container");

// let displayHTML = document.createElement("article");
// displayHTML.innerHTML = "<h1>Weekly Sales Report</h1><hr>";

// salesByWeek.forEach(sale => {
//     displayHTML.innerHTML += `<h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3>`
//     for (const vehicleKey of Object.entries(sale.vehicle)) {
//         displayHTML.innerHTML += `<p>${vehicleKey[0]}: ${vehicleKey[1]}</p>`
//     }
//     displayHTML.innerHTML += `<h3>Profit: $${sale.gross_profit}</h3><hr>`
// });

// displayDiv.appendChild(displayHTML)

// Challenge *****************************************************

const displayDiv = document.getElementById("display-container");
const searchInput = document.getElementById("search-input");
let displayHTML = document.createElement("article");

// console.log(searchInput)
searchInput.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        displayHTML.innerHTML = "<hr>";
        const searchTerm = event.target.value.toLowerCase()
        let matchingAgents = [];
        salesByWeek.forEach(sale => {
            switch (true) {
                case sale.sales_agent.mobile.toLowerCase().includes(searchTerm):
                    matchingAgents.push(sale,);
                    break;
                case sale.sales_agent.last_name.toLowerCase().includes(searchTerm):
                    matchingAgents.push(sale);
                    break;
                case sale.sales_agent.first_name.toLowerCase().includes(searchTerm):
                    matchingAgents.push(sale);
                    break;
                case sale.sales_agent.email.toLowerCase().includes(searchTerm):
                    matchingAgents.push(sale);
                    break;
            }
        })
        // console.log(matchingAgents)
        matchingAgents.forEach(item => {
            displayHTML.innerHTML += `<h3>${item.sales_agent.first_name} ${item.sales_agent.last_name}</h3><p>Email:${item.sales_agent.email}</p><p>Profit: $${item.gross_profit}</p><hr>`
            displayDiv.appendChild(displayHTML)
            searchInput.value = "";
        });
    };
})
