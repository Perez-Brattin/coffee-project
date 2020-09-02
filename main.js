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
        const {name, price, roast} = coffee
        return `
            <article class="coffee-card br2 ba dark-gray b--black-10 ma4 w-100 w-50-m w-25-l mw5 center bg-white">
                <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
                <div class="pa2 ph3-ns pb3-ns">
                    <div class="dt w-100 mt1">
                        <h1 class="f5 f4-ns mv0">${name}</h1>
                        <h2 class="f5 mv0">${roast}</h2>
                        <p class="f6 lh-copy measure mt2 mid-gray">$${price}</p>
                    </div>
                </div>
            </article>
        `
    

    }

    function renderCoffees(_coffees) {
        var html = '';
        _coffees.forEach((coffee) => {
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
