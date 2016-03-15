# Marvelous Sarsaparilla

Building some cool stuff (NBAS)

## Table of Contents

1. [Team](#team)
2. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [File Hierarchy](#hierarchy)
3. [Contributing](#contributing)
4. [Documentation](#Documentation)
5. [Tests](#Tests)

## Team

  - __Product Owner__: Taylor Chamberlain
  - __Scrum Master__: Vincent Pham
  - __Development Team Members__: Deniz Mekik, Robert Boggs, Taylor Chamberlain, Vincent Pham

## Development

### Installing Dependencies

From within the root directory:
```sh
npm install
```

### File Hierarchy

```js
ROOT
 |__SERVER__
    |- server.js
    |
    |__CONTROLLERS__
    |   |- paktController.js
    |   |- pictureController.js
    |   |- userController.js
    |
    |__MODELS__
    |   |- paktModel.js
    |   |- paktUserModel.js
    |   |- pictureModel.js
    |   |- userModel.js
    |   |- userUserModel.js
    |
    |__QUERIES__
    |   |- paktQueries.js
    |   |- paktUserQueries.js
    |   |- pictureQueries.js
    |   |- userQueries.js
    |   |- userUserQueries.js
    |
    |__SPEC__
    |   |- paktControllerSpec.js
    |   |- pictureControllerSpec.js
    |   |- userControllerSpec.js
    |
    |__UTILS__
    |   |- db.js
    |   |- env.example.js
    |   |- helpers.js
    |   |- middleware.js
    |   |- routes.js
    |   | ... etc ...
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

##Documentation
[Google Doc](https://docs.google.com/document/d/1dVcplVjLmCKfeFGQ8nND-BS1UNxMItkWBqRBZwvbvWs/edit?usp=sharing)

##Tests
From within the root directory:
```sh
mocha spec
```