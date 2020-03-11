const faker = require('faker');

const generateRandomData = (userContext, events, done) => {
  // generate data with Faker:
  const id1 = `${faker.random.number({ min: 900000, max: 1000000 })}`;
  const id2 = `${faker.random.number({ min: 900000, max: 1000000 })}`;
  const eventLimit = `${faker.random.number({ min: 0, max: 1 })}`;
  let setLimit;
  if (eventLimit > 0) {
    setLimit = `${faker.random.number({ min: 3, max: 5 })}`;
  } else {
    setLimit = 0;
  }

  // add variables to virtual user's context:
  userContext.vars.id1 = id1;
  userContext.vars.id2 = id2;
  userContext.vars.eventLimit = eventLimit;
  userContext.vars.setLimit = setLimit;

  // continue with executing the scenario:
  return done();
};

module.exports = { generateRandomData };
