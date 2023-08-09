# simple-excaliburjs
A very simple game in excalibur JS

# How to contribute:
If you make any changes to the code, you must run the following commands:
```ps
tsc
```
This compiles the typescript from "src" into javascript in "build". Then run,
```ps
npx webpack --config webpack.config.js
```
This turns the "build" javascript into some javascript that the browser can read and puts it in the "main.js" file in "dist/". 

# Useful Websites
- [Getting started with typescript](https://www.w3schools.com/typescript/typescript_getstarted.php)