document.addEventListener('DOMContentLoaded', function() {

    const lookupButton = document.querySelector('#lookup');
    const citiesButton = document.querySelector('#lookup-cities');
    const countryInput = document.querySelector('#country');
    const result = document.querySelector('#result');

    lookupButton.addEventListener('click', function() {

        const country = countryInput.value;

        fetch('world.php?country=' + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });

    citiesButton.addEventListener('click', function() {

        const country = countryInput.value;

        fetch('world.php?country=' + encodeURIComponent(country) + '&lookup=cities')
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });

});