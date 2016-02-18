# frontend-boilerplate [![Build Status](https://travis-ci.org/chkal/frontend-boilerplate.svg?branch=master)](https://travis-ci.org/chkal/frontend-boilerplate)

Boilerplate for Java projects with modern JavaScript tooling.

The sample project demonstrates how to combine the following technologies

  * **Maven**: The standard build system for Java projects
  * **Webpack**: The bundler for JavaScript and friends
  * **Babel**: Babel compiler for writing next generation JavaScript
  * **TypeScript**: The typed superset of JavaScript
  * **Handlebars**: Simple and powerful templates for JavaScript
  * **Karma**: The spectacular Test Runner for JavaScript
  * **LESS**: CSS with dynamic behavior such as variables, mixins, operations and functions.

Please note that this project doesn't just show how to integrate those
technologies. That's the easy part. :) The most important goal was to create
a great development experience.

## Maven build

This project uses the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)
to integrate with Maven. This great plugin does the following things for you:

  * Install node.js and npm **locally** in the required versions
  * Executes Webpack for transpiling and and merging your JavaScript files
  * Runs the LESS compiler to create your CSS
  * Executes your tests using Karma

All this happens automatically when you run:

    $ mvn install

That means that you will get a standard WAR file if you want to.

## Development workflow

The project supports different development workflows. Most notably via
automatic file watching and the webpack-dev-server.

### LESS files

You can watch your less files for modifications and automatically rebuild
the CSS files by running:

    $ npm run watch:css

The transpiling is really fast. The file are copied to the correct folders
so that reloading the page in your browser should show the results immediately.

Please note that this may not work for Eclipse, because M2E is expecting
the files in a different folder.

### JavaScript files

The preferred way of transpiling the JavaScript files is to use the
webpack-dev-server. The concept is actually very easy. Instead of sending
requests to your servlet container, you simply point your browser to the
dev server. The dev server will act as a reverse proxy and pass most
of the requests though to the servlet container. The only exception to this
are the requests for JavaScript files which are instead compiled on
demand.

You can start the dev server simply by running:

    $ npm run dev-server

This will start the dev server on port `9999`. This means that you have
to use [http://localhost:9999/](http://localhost:9999/) instead of
[http://localhost:8080/](http://localhost:8080/) to access your app.

So if you modify your JavaScript files, you can simply reload the page in
the browser to get the new transpiled files.

In this mode Webpack will also generate the required source maps for easy
debugging in the browser.

### Unit testing

The sample project uses Karma for running JavaScript tests. You can
run the test manually by invoking:

    $ npm run test

If you are actively working on the tests, you can also run Karam in watch
mode. In this mode the files will be automatically monitored for changes.
As soon as you modify any of the JavaScript files, Karam will run all the
tests which is usually very fast.

Please note the Karma is configured to use PhantomJS by default. If you like
you can also modify `karma.conf.js` to use a real Chrome browser instead.
