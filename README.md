# knex-case-converter-plugin

![Build Status](https://img.shields.io/travis/mkhanal/knex-case-converter-plugin.svg)
![Coverage](https://img.shields.io/coveralls/mkhanal/knex-case-converter-plugin.svg)
![Downloads](https://img.shields.io/npm/dm/knex-case-converter-plugin.svg)
![Downloads](https://img.shields.io/npm/dt/knex-case-converter-plugin.svg)
![npm version](https://img.shields.io/npm/v/knex-case-converter-plugin.svg)
![dependencies](https://img.shields.io/david/mkhanal/knex-case-converter-plugin.svg)
![dev dependencies](https://img.shields.io/david/dev/mkhanal/knex-case-converter-plugin.svg)
![License](https://img.shields.io/npm/l/knex-case-converter-plugin.svg)

convert snake_case column names to camelCase on query and the reverse when using parameters

## Getting Started

Install it via npm:

```shell
npm install knex-case-converter-plugin
```

Or Yarn it:

```shell
yarn add knex-case-converter-plugin
```

And include in your project:

```javascript
import plugin from 'knex-case-converter-plugin';

//sample
let knexConfig = {
  "client": "mysql2",
  "debug": true,
  "connection": {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "db_test"
  }
}

Object.assign(knexConfig, plugin)
// OR
//knexConfig.wrapIdentifier = plugin.wrapIdentifier;
//knexConfig.postProcessResponse = plugin.postProcessResponse;

```

## License

GPL-3.0
