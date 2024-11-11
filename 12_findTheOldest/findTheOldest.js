const findTheOldest = function (people) {
  const curDate = new Date().getFullYear();
  const limPoeple = people.map((person) => {
    if (person.yearOfDeath) {
      return person;
    } else {
      person.yearOfDeath = curDate;
      return person;
    }
  });
  sortedPeople = people.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1
  );
  console.log(sortedPeople);
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
