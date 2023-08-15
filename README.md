# simple-excaliburjs
A very simple game in excalibur JS

- [Latest Release](releases/latest)
- [Demo video]()

# Overview
This project is a very simple setup to start developing games with [ExcaliburJS](https://excaliburjs.com/). This project is meant to be the bare minimum to get started. This is great for beginners who want to start game development in TypeScript!

# Development Environment
I developed simple excaliburjs in TypeScript. I used webpack to compile all the code into a single JavaScript file to run on the browser. 

# How to develop from simple-excaliburjs
If you would like, feel free to fork the repository and start developing your own game. ExcaliburJS requires TypeScript, so you will need to use that. The tsconfig file is configured to find your .ts files in the "src" directory. To get the typescript files into a format that the browser can read, you have to follow some steps. First, compile the typescript into javascript. Then, webpack that compiled javascript.

To compile the typescript, you must run the following commands:
```ps
tsc
```
This compiles the typescript from the "src" director into javascript in the "build" directory. 

Then run,
```ps
npx webpack --config webpack.config.js
```
This turns the "build" javascript into some javascript that the browser can read and puts it in the "main.js" file in "dist/". 

This "main.js" file is the only script file needed to be referenced in the html file. 

After this compiling, simple-excalibur literally only needs 2 files to run... 

index.html and dist/main.js

To run, simply open index.html in a live server on your web browser and then try out the game!

# Further work:
- Once I start using React in this webpage, lazy load my components so that webpack will be more optimized [react lazy loading](https://react.dev/reference/react/lazy#suspense-for-code-splitting), [Webpack code splitting](https://webpack.js.org/guides/code-splitting/)
- Impliment sprites and animations to the player
- Impliment multiple levels or "scenes"
- Moving camera

# Useful Websites
- [Getting started with typescript](https://www.w3schools.com/typescript/typescript_getstarted.php)
- [Getting started with webpack](https://webpack.js.org/guides/getting-started)
- [What is a js module bundler?](https://snipcart.com/blog/javascript-module-bundler)
- [Welcome to excaliburjs](https://excaliburjs.com/docs/)
- [Getting started with excaliburjs](https://excaliburjs.com/docs/getting-started/)
- [Engine fundamentals excaliburjs](https://excaliburjs.com/docs/engine/)
- [ExcaliburJS build and bundlers](https://excaliburjs.com/docs/bundlers/)

