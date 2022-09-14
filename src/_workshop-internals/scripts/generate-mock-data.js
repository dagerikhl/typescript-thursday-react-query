#!/usr/bin/node

const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

// Applications
const mockApplication = () => {
  const id = faker.database.mongodbObjectId();
  const namespace = faker.name.jobArea();
  const name = faker.internet.domainWord();
  const state = faker.helpers.arrayElement(["online", "offline", "unknown"]);
  const branches = faker.helpers.maybe(() => [
    ...new Set(
      faker.random
        .words()
        .split(" ")
        .map(
          () =>
            faker.helpers.maybe(
              () => faker.helpers.arrayElement(["main", "master", "develop"]),
              { propability: 0.2 }
            ) ?? faker.git.branch()
        ),
      { probability: 0.6 }
    ),
  ]);
  const deployments = faker.helpers.maybe(
    () =>
      faker.random
        .words()
        .split(" ")
        .map(() => {
          const environment = faker.helpers.arrayElement([
            "DEV",
            "TEST",
            "QA",
            "PROD",
          ]);
          const tag = faker.git.shortSha();
          const timestamp = faker.date.recent(7).valueOf();

          return { environment, tag, timestamp };
        }),
    { probability: 0.4 }
  );

  return { id, namespace, name, state, branches, deployments };
};

const mockApplications = (count = 100) =>
  Array.from({ length: count }).map(mockApplication);

// Errors
const mockError = () => {
  const id = faker.database.mongodbObjectId();
  const timestamp = faker.date.recent(5).valueOf();
  const severity = faker.helpers.arrayElement([0, 1, 2, 3, 4]);
  const message = faker.helpers.maybe(faker.git.commitMessage, {
    probability: 0.8,
  });

  return { id, timestamp, severity, message };
};

const mockErrors = (count = 100) =>
  Array.from({ length: count }).map(mockError);

// Main
const main = () => {
  const applications = mockApplications();
  fs.writeFileSync(
    path.resolve(
      process.cwd(),
      "src",
      "_workshop-internals",
      "data",
      "applications.json"
    ),
    JSON.stringify(applications, null, 2)
  );

  const errors = mockErrors();
  fs.writeFileSync(
    path.resolve(
      process.cwd(),
      "src",
      "_workshop-internals",
      "data",
      "errors.json"
    ),
    JSON.stringify(errors, null, 2)
  );
};

main();
