(function () {
    "use strict"

    let coffees = [
        { id: 1, name: 'Light City', roast: 'light', price: 4.99},
        { id: 2, name: 'Half City', roast: 'light', price: 4.99},
        { id: 3, name: 'Cinnamon', roast: 'light', price: 4.99},
        { id: 4, name: 'City', roast: 'medium', price: 4.99},
        { id: 5, name: 'American', roast: 'medium', price: 4.99},
        { id: 6, name: 'Breakfast', roast: 'medium', price: 4.99},
        { id: 7, name: 'High', roast: 'dark', price: 4.99},
        { id: 8, name: 'Continental', roast: 'dark', price: 4.99},
        { id: 9, name: 'New Orleans', roast: 'dark', price: 4.99},
        { id: 10, name: 'European', roast: 'dark', price: 4.99},
        { id: 11, name: 'Espresso', roast: 'dark', price: 4.99},
        { id: 12, name: 'Viennese', roast: 'dark', price: 4.99},
        { id: 13, name: 'Italian', roast: 'dark', price: 4.99},
        { id: 14, name: 'French', roast: 'dark', price: 4.99},
    ];

    const coffeeDiv = document.querySelector('#coffee');
    const submitButton = document.querySelector('#submit');
    const roastSelection = document.querySelector('#roast-selection');
    const search = document.querySelector('#search-coffees');
    const addButton = document.querySelector('#new-selection');

    function renderCoffee(coffee) {
        var html = `<div class="coffee-wrapper"><h2>${coffee.name}</h2>`;
        html += `<p>${coffee.roast}</p></div>`;
        return html;
    }

    function renderCoffees(coffees) {
        var html = '';
        coffees.forEach((coffee) => {
            html += renderCoffee(coffee)
        })
        return html;
    }

    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let filteredCoffees = (selectedRoast === "all") ? coffees : coffees.filter((coffee) => {
            return coffee.roast === selectedRoast
        });

        coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
    }


    function filterByName(value) {
        return coffees.filter(({ name }) => name.toLowerCase().startsWith(value));
    }

    function searchQuery(e) {
        coffeeDiv.innerHTML = renderCoffees(filterByName(e.target.value.toLowerCase()));
    }


    function createNewCoffee(name, roast) {
        return {
            id: coffees.length + 1,
            name: name,
            roast: roast
        };
    }

    function addNewCoffee(e) {
        e.preventDefault();
        const newCoffeeName = document.querySelector('#new-coffee');
        const newCoffeeRoast = document.querySelector('#new-roast');
        if (newCoffeeName.value) {
            coffees.push(createNewCoffee(newCoffeeName.value, newCoffeeRoast.value));
            coffeeDiv.innerHTML = renderCoffees(coffees);
            newCoffeeName.value = "";
            newCoffeeRoast.value = "light";
        }
    }



    // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

    coffeeDiv.innerHTML = renderCoffees(coffees);
    submitButton.addEventListener('click', updateCoffees);
    search.addEventListener('keyup', searchQuery);
    addButton.addEventListener('click', addNewCoffee);


})();
