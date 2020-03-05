fetch('https://byui-cit230.github.io/weather/data/towndata.json')
.then(result => {
    return result.json();
})
.then(resultJSON => {
    let towns = resultJSON.towns;

    towns.forEach(
        town => {
            if(town.name === 'Fish Haven') {
             document.querySelector('#fishHavenName').textContent = town.name;
             document.querySelector('#fishHavenMotto').textContent = town.motto;
             document.querySelector('#fishHavenYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
             document.querySelector('#fishHavenPopulation').textContent = `Population: ${town.currentPopulation}`;
             document.querySelector('#fishHavenAnnualRainfall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
             document.querySelector('#fishHavenImage').setAttribute('src', `images/${town.photo}`);
             document.querySelector('#fishHavenImage').setAttribute('alt', town.name);
             
             } else if (town.name === 'Preston'){

              } else if (town.name === 'Soda Spring') {

              }
            }
        
    );
})