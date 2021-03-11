02-26-2021 **8hours**

8:30am

- Create directory, repo, proposal. Getting organized!

9:30am

- Hiker outreach to collect insight, needs, use cases & feedback.

Feedback:

- Privacy: Protecting personal information from ill-intention users
- Information logging: car details, location, leave time, estimated return time
- Rescue: Specific agencies in the area, ie sheriff, rangers, SAR. Automatic call 2 hours after expected return.
- GPS tracking
- Simple: entries for location, leave time, estimated return time, and a time to call authorities if not returned by \_\_.
- Advanced: automatic fill in of numbers for specific agencies in the area who need to be informed if not returned by time (local sheriff and ranger station numbers) so the person doesn’t have to research; gps tracking.
- 2 hours after that time has expired a call is placed out from authorities to that person to verify if they are back or not. If they are not they send out search teams.
- Accessibility: all smartphones and desktops

10:30-11:30am

- Research sending Emails with Firebase with Nodemailer and test with Mailtrap. Research countdown timer template. (Do later not necessary atm, turning into a stretch goal)

- Nodemailer could be used to send and schedule emails
- Notes:
  - Ten essential items for hiking:
    - Navigation: map, compass, altimeter, GPS device, personal locator beacon (PLB) or satellite messenger
    - Headlamp: plus extra batteries
    - Sun protection: sunglasses, sun-protective clothes and sunscreen
    - First aid: including foot care and insect repellent (as needed)
    - Knife: plus a gear repair kit
    - Fire: matches, lighter, tinder and/or stove
    - Shelter: carried at all times (can be a light emergency bivy)
    - Extra food: Beyond the minimum expectation
    - Extra water: Beyond the minimum expectation
    - Extra clothes: Beyond the minimum expectation

12:30pm

- Finish Proposal
- Plan hiker form

1:30pm

- Plan and design components
- Component diagram

2:30pm

- Research email scheduler, complete component diagram, add to readme
- Notes:
  - node-cron

3:30pm

- Research firebase with nodemailer

4:30pm

- Begin to build static site with React
- Debug, installed bootstrap in wrong dir, comment out control to run npm

02-28-2021

8:00am-930am

- Building out form.
- Notes:
  - Should there be seperate forms for hiker info, hike info, emergency contact info? Keep it one for now and see how it looks and functions. UX note: maintaining the goal to have it be "streamlined" having everything all on one form could be more convenient for user.

10:00am-12pm

- Build Hike Components. Add Hike Detail, Hike List Components. Add functionality for user to click on hike to see full details.Update Component Diagram.
- Notes: Figure out button for hike completion

12-1pm

- Debug, full CRUD functionality with static site.
- Notes:
  - Need to format date to not be yyyy,mm,dd >> moment.js probably the best option
  - Hike completed button function not working >> debugged, is working 1:05pm
  - https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
  - Idea: because form is so long, make seperate components for each form section?

1pm

- Research multi-step form
- Notes:
  - https://dev.to/sametweb/how-to-create-multi-step-forms-in-react-3km4
  - https://codepen.io/nathansebhastian/pen/RvrOYq

**Naps**

6pm

- Build multi-step form

9pm

- Multi-step form working. But is not adding to list. Debug form submission
- Notes:
  - Error: Form submission canceled because the form is not connected. Google says to change all button types to be button
  - Error: Warning: Each child in a list should have a unique "key" prop.

03-01

6pm-9pm

- Debug add newHike from MasterForm to Control Hike list

03-02

6am-10am

- Debugged!!! All works!!! Thank you Brooke and Randel for your brains and debugging skillz <3

03-03

7am

- Add user stories, add all props to handleHikeFormSubmission
- Bug:radio buttons not working, does not show value on form submission
- https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs

03-05

830am-4:30pm

- Research react native, contemplate life and app's future, change app to be mobile only?

- Plan: (maybe)
  - Create edit form, reusable form?
  - Redux to handle form state
  - Firebase
  - React Native
  - handle login, send emails and potentially texts
  - **stretch:** geolocation, trail api

03-06

830am-3pm

- Fixed radio button bug for newTrail, avalancheKit and cellPhone values
- Research editing form and redux for wizard form.
- editing form works!!!! Have full crud! Delete reusableform, editform, newhikeform.
- Redux time, plan reducers for masterform
- trying to figure out how to test reducers...

4pm-7:45pm

- masterform reducer tests all passing. Add redux to find out for sure though..

03-07

9am-3pm

- Add Redux store to masterform
- Plan: Redux, firebase, start designing for react native (login, email, text)
- Input field are not working, can see form, research shows I need a redux-form.
- Install redux-form
- Redux-form documentation: https://redux-form.com/8.3.0/docs/gettingstarted.md/
- Forgot to create actions << no need. redux form seems to handle everything. so magical.
- IT WORKS!!!!!!!!!!! MASTERFORM STATE IS HANDLED BY REDUX-FORM(3pm)

4pm-8pm

- Add bootstrap styling to forms, make pretty, add required validation for date otherwise throws error if left undefined.

03-08

9am-2pm

- Pivot to React Native. Create seperate project for mobile development.
- Research react native wizard form
- **Do not create react native wizard form**
- Focus on finishing web app functionality
  - Connect to firebase
  - Log in authorization
  - Post to db
- Notes:
- Web app: to populate database with form submission, create login (UX perspective, its a long form, and user is packing/planning for hike, more than likely they will be on a machine not phone to fill out the info, but to get info and send message have mobile functionality)
- Mobile app: connect with firebase to pull data from web page, be able to text data, login with login create via web app

- Create Firebase db

5pm

- Successfully connected to firebase, able to add data to db but throws bug for hikerDate

945pm

- Successfully add all data to firebase, had to create new field for "date created" data in firebase instead of input datetime. good enough for now

10:30pm

- Add simple sign up, sign in, sign out authorization and authentication
- Bug: Try to route to homepage after sign in
- Notes:
  - Tomorrow: try figure out routes to home from successful sign in, then probs make a "simple" mobile app to make api calls to the db

03-09

8am - 5pm

- Debugged FirebaseUI, fully functioning with authorization and authentication maybe use ui.delete() somewhere?
- Look into how long it would take to create "simple mobile app" to get data from db and send messages
- Find time to make pretty
- Nodemailer

03-10
8am-

- Need to use express to get nodemailer to work needs backend
- Throwing error Uncaught TypeError: net.isIP is not a function
- Firebase costs money to run backend code
- Installed Express js successfully, so far everything works
- install axios to allow in render async requests
  Axios:
  Many projects on the web need to interface with a REST API at some stage in their development. Axios is a lightweight HTTP client based on the $http service within Angular.js v1.x and is similar to the native JavaScript Fetch API.

Axios is promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code.

- email functionality!! can send emails at the push of a button
- Make Pretty

**Research:**
Wizard form:
https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
https://www.digitalocean.com/community/tutorials/how-to-create-multistep-forms-with-react-and-semantic-ui

Redux-form:
https://redux-form.com/8.3.0/docs/gettingstarted.md/
https://redux-form.com/8.3.0/examples/wizard/
https://redux-form.com/8.2.2/examples/react-widgets/
https://react-redux-firebase.com/docs/integrations/redux-form.html

Express:
https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
Nodemailer:
https://blog.mailtrap.io/send-emails-with-nodejs/
https://nodemailer.com/about/
https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b

Axios:
https://www.digitalocean.com/community/tutorials/react-axios-react

Mailtrap:
https://mailtrap.io/how-it-works
