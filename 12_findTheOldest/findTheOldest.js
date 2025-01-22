const findTheOldest = function(peopleArray) {
    let currentOldestAge = 0;
    let currentOldest;

    for (person of peopleArray){
        if (person.yearOfDeath)
            personAge = person.yearOfDeath - person.yearOfBirth;
        else
            personAge = (new Date()).getFullYear() - person.yearOfBirth;

        if (personAge > currentOldestAge){
            currentOldestAge = personAge;
            currentOldest = person;
        }
    }

    return currentOldest;
}

// Do not edit below this line
module.exports = findTheOldest;
