const sarah = {
  name: 'Sarah',
  job: {
    name: 'Andersen',
    hiringDate: '23.07.2020'
  }
}

function printJobName(user) {
  const {
    job: {
      name
    } 
  } = user;

  console.log(name);
}

printJobName(sarah);