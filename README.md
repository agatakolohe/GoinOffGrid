<div align="center">

# GoinOffGrid

</div>

<div align="center">
<img src="./img/GoinOffGrid.png" width="30%" height="auto" >
</div>
<h3 align="center">Epicodus Capstone Project | Initialized: 02-26-2021</h3>
<h4 align="center"> By Agata Kolodziej</h4>

## Description

GoinOffGrid is an app for hikers to streamline their hike information, store it in a database and send an email to an emergency contact. The goal is to have a place for a user to organize their adventure plans and have chosen contact be aware of the hiker's adventure and safe return. A user can login through gmail or custom mail. A user can fill out a form and store form data in firebase data base. A user can send an email to a contact.

<div align="center">

## Component Diagram

<img src="./img/ComponentDiagram.png" width="400px" height="auto" >

</div>

<details>
<summary>Use Case</summary>

- Users are primarily hikers who are hiking alone. The unspoken rule when solo hiking is to let one person (emergency contact) know where you are going, in case something were to happen (weather change, natural disaster, health complications, getting lost, stranger danger, car trouble). The difficulty is organizing all the important information the hiker should share with their emergency contact. (location, duration, supplies, conditions). This has resulted in missing hikers, stressful encounters and general anxiety of solo hiking of being "off the grid" instead of enjoying the experience of being off grid, of disconnecting from the daily grind and enjoying solitude in nature.

- The product will provide a form for the user to input the hike information they are wanting to share with their emergency contact.

- The product will inform the hiker's emergency contact with the form information submitted via email.

- The product will allow the user to log when they have completed their hike and safely returned.

- The product will inform the hiker's emergency contact that the hiker has completed their hike and safely returned.

- The product will have a countdown for the duration of user's the hike.

- The product will notify the hiker's emergency contact if the hiker has not logged their return and provide instructions to ensure the hiker is safe. (Instruct emergency contact to contact the hiker, contact the authorities if suspected that the hiker may be in danger or missing).

- The product will allow users/contacts to alleviate the stress of solo hiking.

</details>

<details>
  <summary>User Stories</summary>

**Hiker**

- I want to be able to fill out a form with information about myself, my hike, supplies, and emergency contact information
- I want to be able to have an account to log in and log out
- I want to have a secure account to keep my information private
- I want to be able to have my inputted information accessible to my emergency contact
- I want to be able to log my return from the hike
- I want to have my contact notified if I have not logged my completion of the hike

**Contact**

- I want to be able to view my hikers inputted information
- I want to be notified about the start and estimated return time of my hiker's hike
- I want to be notified about my hikers return from hike

</details>

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/agatakolohe/GoinOffGrid.git)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone https://github.com/agatakolohe/GoinOffGrid.git` into the directory you would like to clone the repository
- Open in text editor to view code and make changes
  - Open terminal and navigate to goinoffgrid directory
  - Use the command `npm install` to download and install all necessary packages for the project to function
  - Open terminal and navigate to goin-off-grid directory
  - Use the command `npm install` to download and install all necessary packages for the project to function
  - You must add an config.js to store the credentials of the account you will be using for nodemailer. Put this file next to your server source code

```
module.exports = {
    USER: 'YOUR_EMAIL_ADDRESS',
    PASS: 'PASSWORD_FOR_EMAIL'
}

```

#### View In Browser

- To Build and view in browser
  - Navigate to goinoffgrid directory and use the command `node server.js` in terminal
  - This will start the express server at localhost:5000
  - You should see `{“express”:”YOUR EXPRESS BACKEND IS CONNECTED TO REACT”}`. This lets you know that the Express server is up and running.
  - **While this is running**
  - Navigate to goin-off-grid directory and use the command `npm start` in terminal
  - This will launch a localhost:3000/express_backend in your browser with the react front-end
  - Sign up if you do not have an account
  - Sign in
  - Enjoy the app!

## Known Bugs

No known bugs. Everything works. It just needs a little more lovin to be more polished.

## Support and Contact Details

If any errors or bugs occur please email me, <agatakolohe@gmail.com>.

## Technologies Used

- Axios
- Bootstrap
- [Canva](https://www.canva.com/)
- CSS
- Express.js
- Firebase
- Firebaseui
- HTML
- Git
- JavaScript ES6
- Jest
- JSX
- Moment
- Mailtrap
- Node
- Nodemailer
- npm
- [Pixabay](https://pixabay.com/)
- React
- React-firestore
- React-widgets
- Redux
- Redux form
- [Unsplash](https://unsplash.com/)
- VS Code

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2021 Agata Kolodziej <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Q_3EVY7j95tTyemJwWxMR7jwvUK7gPe0_w&usqp=CAU" width="2%" height="auto">
