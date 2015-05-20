dalliance-react: dalliance in a React component
=========================

Please visit the [BioDalliance](http://www.biodalliance.org/) home page for details of the project.

This project is a demo showing a very basic use of of a BioDalliance instance in a [React](http://reactjs.com/) component.

Build
-----------

This demo needs [Browserify](http://browserify.org) to build the final Javascript file that’s used in the demo page, index.html. It uses the [Grunt](http://gruntjs.com) Javascript task runner to automate this.

Before building, you need to install all the build and runtime dependencies:

    npm install

To do a basic build:

    grunt

This triggers Browserify to build the final Javascript bundle that index.html uses.

You can also have Browserify automatically triggered when you save a Javascript source file with:

    grunt dev

This blocks your terminal, and then whenever you save a Javascript source file, the Javascript bundle is automatically rebuilt.

In addition, you can have your Chrome automatically reload when this happens if you have the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension loaded and enabled. You must first run ```grunt dev``` before enabling LiveReload.

This project also has a simple web server if you need one. In another terminal window, enter

    grunt serve

Then go to ```http://localhost:9000/index.html``` to see the demo web page.
