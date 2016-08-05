# _GitHub User Lookup: Modern JS Apps Independent Project_

#### _Epicodus: JavaScript (Week 1: Modern JS Apps), August 4, 2016_

#### By _**Noah Yasskin**_

## Description

_This is an Epicodus [http://www.epicodus.com/] student independent project created for a code review: It creates a website where a user can enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories._

* _Full description of the project is available at:_
https://www.learnhowtoprogram.com/javascript/modern-js-apps/modern-js-apps-independent-project

Requirement & Objectives | Complete
:------------- | :-------------: |
*Requirement*: Create a website where the user can enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. | --
*Objective*: The website works as expected. | --
*Objective*: Concatenation, minification, and running the browserify package on JavaScript. | --
*Objective*: Building and cleaning. | --
*Objective*: Running the development server with live reloading. | --
*Objective*: Running JSHint. | --
*Objective*: Automatically includies Bower dependencies as vendor.min.js and vendor.css. | --
*Objective*: ollow all setup instructions, including storing my API key in the variable `exports.apiKey`. | --
*Objective*: the app includes at least 2 JavaScript files. | --
*Objective*: `exports` is used successfully in at least one JavaScript file. | --
*Objective*: dependencies are managed with npm and Bower. | --
*Objective*:  The app includes a gulp-based asset pipeline with a development server. | --

* _Epicodus JavaScript Coursework is viewable at:_
https://www.learnhowtoprogram.com/javascript

## Setup/Installation Requirements

* _Clone the repository from GitHub_
https://github.com/yasskin/github-user.git

* _This app requires a Personal Access Token. To obtain one_

1. Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.
2. GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Select "Generate Token".
3. For security purposes, place your token in an .env file at the top level of your directory. And Include .env in .gitignore.
4. Create an .env file that includes your GitHub API Key.

```
.env
exports.apiKey = "PUT-YOUR-API-KEY-HERE"
```

* _After creating a `.env` file and obtaining a Personal Access Token, install npm and bower_


1. Gather the back-end packages the program requires
```
$ npm install <!-- saved into node_modules/ -->
```
2. Gather the front-end packages the program requires
```
$ bower install <!-- saved into bower_components/ -->
```

## Known Bugs

* _None so far_

## Support and contact details

* _view the repository on GitHub at:_
https://github.com/yasskin/github-user

_If you run into any issues or have questions, ideas, or concerns, please feel free to contact Noah:_

* _Noah Yasskin: <a href="mailto:noahyasskin@gmail.com">noahyasskin@gmail.com</a>_

## Technologies Used

* _HTML & CSS_
* _SASS_
* _JavaScript_
* _Node.js_
* _Gulp_
* _Bower_
* _GitHub API_

### License

*MIT License*

Copyright (c) 2016 **_Noah Yasskin_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
