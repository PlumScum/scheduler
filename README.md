# Interview Scheduler
## Project Description
The Interview Scheduler is a modern Single Page Application engineered to streamline the management of student interviews. It harnesses the power of cutting-edge tools and techniques to provide an exceptional user experience.

This application is crafted using React, incorporating both built-in and custom hooks to enable real-time functionalities. Users can effortlessly add, edit, and remove appointments with seamless synchronization.

To ensure robust data persistence, the App interfaces with a PostgreSQL database through an API server. The client application communicates with this server via HTTP, utilizing the JSON format for efficient data exchange.

In terms of quality assurance, the project adheres to the principles of Test Driven Development (TDD). This approach involves rigorous testing of individual components in isolation, complemented by comprehensive End-to-End testing. These practices collectively uphold the project's commitment to delivering a reliable and top-notch solution.

## Project Features
- The scheduler prominently displays appointment days from Monday to Friday, each thoughtfully color-coded to signify their availability status.
- A convenient snapshot of the week showcases the number of available slots for each day.
- Users can seamlessly switch between days to access detailed information at their fingertips.
- Distinct visual cues clearly differentiate between booked and available slots.
- The intuitive interface enables users to book interviews effortlessly by entering a student's name and selecting an interviewer from a list.
- Editing existing interviews is a breeze with a simple click on the edit icon.
- For added convenience, users can cancel an existing interview. A user-friendly pop-up message seeks confirmation before permanently deleting the interview.
- Real-time updates keep users informed about the remaining available spots on each day, dynamically adjusting after each modification.

## Screenshots
!['Main Interface'](https://raw.githubusercontent.com/PlumScum/scheduler/master/docs/appointment-form.png) 

!['Cycle through the days'](https://raw.githubusercontent.com/PlumScum/scheduler/master/docs/appointment-form2.png)

**Note on App Functionality** : For full functionality both the client and the API server applications must run simultaneously!! (see database setup below).


## Installation
```
npm install
```

## Running Webpack Development Server
```
npm start
```

## Running Jest Test Framework
```
npm test
```

## Running Storybook Visual Testbed
```
npm run storybook
```

## API server/Database Setup

For full functionality, both the client and the API server applications must run simultaneously!!
- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with `npm install`
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project `npm start`

## Project Stack

__Front-End:__ React, Axios, JSX, HTML, SASS, JavaScript
__Back-End:__ Express, Node.js, PostgreSQL
__Testing:__ Storybook, Webpack Dev Server, Jest, Testing Library and Cypress
