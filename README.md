# simple-excaliburjs
A very simple game in excalibur JS

# How to contribute:
If you make any changes to the code, you must run the following commands:
```ps
tsc
```
This compiles the typescript from "src" into javascript in "build". 

Then run,
```ps
npx webpack --config webpack.config.js
```
This turns the "build" javascript into some javascript that the browser can read and puts it in the "main.js" file in "dist/". 

This "main.js" file is the only script file needed to be referenced in the html file. 

# How to run
simple-excalibur literally only needs 2 files to run... 

index.html and dist/main.js

To run, simply open index.html in a live server on your web browser and then try out the game!

# Useful Websites
- [Getting started with typescript](https://www.w3schools.com/typescript/typescript_getstarted.php)
- [Getting started with webpack](https://webpack.js.org/guides/getting-started)
- [What is a js module bundler?](https://snipcart.com/blog/javascript-module-bundler)
- [Welcome to excaliburjs](https://excaliburjs.com/docs/)
- [Getting started with excaliburjs](https://excaliburjs.com/docs/getting-started/)
- [Engine fundamentals excaliburjs](https://excaliburjs.com/docs/engine/)
