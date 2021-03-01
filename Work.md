02-26-2021

8:30am - Create directory, repo, proposal. Getting organized!

9:30am - Hiker outreach to collect insight, needs, use cases & feedback.

- Feedback:
  - "Such a good idea! I always text my mom but sometimes I feel like I'm worrying her for no need."
  - "I have totally thought about pitching this and I wish I could but I have no idea where to go with this. I am not a tech kind of gal. Wish I was. Wish I could develop this app myself"

10:30-11:30am - Research sending Emails with Firebase with Nodemailer and test with Mailtrap. Research countdown timer template. (Do later not necessary atm, turning into a stretch goal)

- Nodemailer could be used to send and schedule emails
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

12:30pm - Finish Proposal

- Plan hiker form

1:30pm - Plan and design components

- Component diagram

2:30pm - Research email scheduler, complete component diagram, add to readme

- node-cron

3:30pm - Research firebase with nodemailer

4:30pm - Begin to build static site with React

- Debug, installed bootstrap in wrong dir, comment out control to run npm

02-28-2021

8:00am-930am - Building out form.
Notes:

- Should there be seperate forms for hiker info, hike info, emergency contact info? Keep it one for now and see how it looks and functions. UX note: maintaining the goal to have it be "streamlined" having everything all on one form could be more convenient for user.

10:00am-12pm - Build Hike Components. Add Hike Detail, Hike List Components. Add functionality for user to click on hike to see full details. Update Component Diagram.
Notes: Figure out button for hike completion

12-1pm - Debug, full CRUD functionality with static site.
Notes:

- Need to format date to not be yyyy,mm,dd >> moment.js probably the best option
- Hike completed button function not working >> debugged, is working 1:05pm
  https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
- Idea: because form is so long, make seperate components for each form section?

1pm - Research multi-step form

--Naps--

6pm - Build multi-step form

9pm - Multi-step form working. But is not adding to list. Debug form submission
Notes:

- Error: Form submission canceled because the form is not connected
- Error: Warning: Each child in a list should have a unique "key" prop.
