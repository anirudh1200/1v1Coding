# 1v1Coding

An online game and judging platform for competitive coding.

## Tech Stack:
Backend: Nodejs
Template Style: ejs
Database: MongoDB

## Available Scripts

In the project directory, you can run:

### `npm install`
This will download all the node modules and dependencies for the server

### node app.js
To start the node server on port 3000

## General
- Uses websockets for real time updates
- For compiling of code [Judge0](https://github.com/judge0/api) api is being used
- Supported Languages: C, C++, C#, Java, Python
- Questions can be edited in seed.js
- You can change admin panel username and password from /public/javascript/keys.js
- All other error in code or during api calls will be indicated on screen of contestants
- [Ace Editor](https://ace.c9.io/) has been used as embedded code editor for syntax highlighting

## WorkFlow
- For contestants to participate they should first enter a contest room /contest/{id}
- Admin from the admin panel can select question and timing for a particular room
- On recievig the question and testcases on screen the contestant has to select language and start coding
- When confident the contestant has to click Run on which his code is sent via ajax to api
- If public testcases are completed successfully then all private testcases are checked
- On successful completion a model pops up indicating completion of contest and announces winner
- On time completion the winner is decided based on the number of private cases solved successfully
