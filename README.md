# Mathinator

A simple client / server application for performing various mathematical operations. Built using [jQuery](https://jquery.com),  [MaterializeCSS](http://materializecss.com), [HTML5 Boilerplate](https://html5boilerplate.com), and [Express](https://expressjs.com).

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

## API

`GET /math/{:operation}?left={:left}&right={:right}`

Where `operation` can be

| operations |
| ---------- |
| add        |
| subtract   |
| multiply   |
| divide     |

`left` and `right` must be numbers.

## Roadmap

* Unit tests ([Mocha](https://mochajs.org) + [Chai](http://chaijs.com/) or maybe [should.js](https://github.com/shouldjs/should.js))
* Better Error handling and error responses (following [HTTP Status Code Standards](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes))
* Add a "swap" toggle to quickly switch operand positions.
* [Swagger](https://swagger.io/specification/) spec for the API
* [Docker](https://www.docker.com)-ize it
