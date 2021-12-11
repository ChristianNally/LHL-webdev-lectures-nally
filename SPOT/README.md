# Searchable Performance Objectives Tables (SPOT)

This app is a stand alone tool that enables students to summarize the Lighthouse Labs
curriculum, in the form of performance objectives. The resulting lists can be used for 
review, study, reference etc.


set up:

0) npm install
1) populate your version of .env with a postgres database user/password and DB name.
2) psql < db_snapshot.sql
3) node index.js
4) point your browser at http://localhost:7865/register to make an admin account.
5) you should be redirected to http://localhost:7865/days where you will see a list of "days" and links.
6) Each day lists the admin link, the number of objectives entered so far, and the link that students get

6 a) the admin link will take you to a page where you can add objectives, or see current feedback.
6 b) the student link will show you how you can give feedback on your understanding of objectives



The user authentication for the React portion was derived from this tutorial.
https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

