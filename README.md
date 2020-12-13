# Modern JavaScript

Note: This is a code along exercise. If you're doing this outside the classroom, please get additional info from the instructor.

## Setup
1. Create a directory for the code-along exericse:
    ```shell
    mkdir <lan-id>-modernjs
    ```
2. Change to that directory:
    ```shell
    cd <lan-id>-modernjs
    ```
3. Copy files (`.editorconfig`, `.gitignore`) from **local-setup** repo to this new directory
4. Initialize NPM package by running the following command:
    ```shell
    npm init​
    ```
    Follow the prompts on the screen (you can leave most values as default), and in the end you should see something like this:
    ```console
    package name: (ryechmy-modernjs)
    version: (1.0.0)
    description: Code-along exercise for Modern JavaScript
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author: Mykhaylo Ryechkin
    license: (ISC)
    About to write to /Users/ryechmy/Projects/manulife-university/ryechmy-modernjs/package.json:

    {
        "name": "ryechmy-modernjs",
        "version": "1.0.0",
        "description": "Code-along exercise for Modern JavaScript",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Mykhaylo Ryechkin",
        "license": "ISC"
    }

    Is this OK? (yes)
    ```
5.  After that, you should have a new file created called `package.json` - this is where your project dependencies, scripts, and other info will be specified
6.  Next, let's install some 3rd party dependencies that we'll be using in this exercise:
    ```shell
    npm install esm node-fetch
    ```
    * `esm`: ECMAScript module loader - this is needed to support ES module syntax in Node
    * `node-fetch`: Fetch API - this enables the `window.fetch()` API in Node, used to invoke HTTP requests

## Exercise
Most of this exercise will be done as a code-along. These first steps are initial setup, with the remainder being done together with the instructor(s) during class.

1. In the root of your project (`<lan-id>-modernjs`), create a directory for the source code called `src`
2. Inside this `src` directory, create a file for the app entry point named `​index.js`
3. Let's add some JavaScript to this file! Type in:
    ```javascript
    console.log('Hello MU!');
    ```
4. Next, add a `start` NPM script for the app - this will be used to run our code and see output in console
5. In `package.json`, add the following to the `scripts` section:
    ```json
    "start": "node src/index.js"
    ```
    This will run the file we created `src/index.js` using **Node.js** runtime
6. Start the app using the above `start` script:
    ```shell
    npm start
    ```
    **NOTE**: `start` is a reserved script name, so you can execute it without using the `run` keyword. For other (custom) scripts, you would run them using `npm run <script-name>`
7. You should see the `Hello MU!` message in the console
8. Stop the app using `Control+C` (Windows) or `Cmd+C` (Mac)
9. Follow the code-along to write the functionality in `src/index.js`

**NOTE**: Make sure to check your code into git when you're done​!

## Reference Documentation

### Variable declarations
* var - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
* let - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
* const - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

### Functions
* Regular function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
* Arrow functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* Function prototype - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

### Objects and Classes
* Classes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
* Spread Operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

### Array helper methods
* Map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* Filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* Reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

### Modules
* Import - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
* Export - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

### Asynchronous Operations
* Promise - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* Async - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
* Await - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

## Babel
Babel is a transpiler for JavaScript best known for its ability to turn ES6 ("Modern" JavaScript, aka **ES2015** / **ECMAScript2015**) into code that runs in your browser
(or on your server) today. Which runs in just about any JavaScript environment.

Babel can handle all of the new syntax that ES6 brings, along with builtin support for React’s JSX extensions and Flow type annotations.

Of all the ES6 transpilers, Babel has the greatest level of compatibility with the ES6 spec, even exceeding the much longer established Traceur
by Google.

Babel lets you use virtually all of the new features that ES6 brings today, without sacrificing backwards compatibility for older browsers. It also
has first class support for dozens of different build & test systems which makes integration with your current toolchain very simple. Babel doesn’t
only track ES6, it also tracks the next versions of JavaScript (ES7 and beyond). Amongst other things this brings support for async/await, two
keywords that are already radically changing the way people write asynchronous JavaScript. They allow developers to write greatly simplified code
which is far easier to debug and reason about than when using callbacks, or dealing directly with promises.

As Babel aligns closely with TC39 (the technical committee that leads the design and development of JavaScript), it is in the unique position of
being able to provide real-world-usable implementations of new ECMAScript features before they are standardized.

Go to https://babeljs.io/ for more information.

**NOTE:** We are not setting up Babel during the code-along, however it is **highly recommended** to read the above material to familiarize yourself. As a bonus, try adding it to the exercise project yourself! Steps can be found below.

## Adding Babel config to your project (optional)
1. Install Babel as a dependency:
    ```shell
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    ```
    * `@babel/core`: Babel compiler core
    * `@babel/cli`: Babel command line ("babel" command)
    * `@babel/preset-env`: Smart preset for Babel that manages JavaScripts syntax transforms
    * `@babel/node`: CLI ("babel-node" command) to run Node while transpiling on-the-fly (NOT for production use)

2. Create a file named .babelrc (Windows magic: name the file .babelrc. to make it work! - or use command line) with the following contents: ​
```json
{
    "presets": ["@babel/preset-env"]
}
```
Note above that we had to instruct Babel on which preset to use (and installed that preset as an NPM package).
