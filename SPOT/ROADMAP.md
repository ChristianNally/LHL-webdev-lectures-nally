Features Roadmap for SPOT
-------------------------

-1) Right now there is a /logintoken route that returns JSON. We need to switch the /login POST route to 
return something similar... AND figure out how to make the token user specific. Subsequent API requests 
should check for a valid user identifying token. For now the API is entirely open. But how will the correct 
UID be submitted? I think there is a session cookie that holds their email address.

0) Automatically include the 'coffee vs. naan' question in all Days. (play precedes innovation!) which will 
provide a single place to edit when new break-videos come online. [2 hours]

1) automatically output config files for ImageMagik generated OBS overlays to switch between during 
lectures [8 hours]

2) Keep data recorded for student 'understanding' values, so that we can compare approaches to teaching 
OBJs. [8 hours... + see 5) below]

3) build a UI so that students can make (and print / output PDF) quizzes and cheatsheets that will help for 
TI prep sessions. [4 to 8 hours]

4) Can a multipage express version of the code be maintained alongside a React only SPA front-end? Perhaps 
one is for admin (the express one) vs. the other is for students? Which features should be in both the 
React and Express versions. (p.s. having both is nice because I like to use this code as demos in the 
classes after all.) [TBD]

5) A reports section that can display accumulated understanding data. [8 hours]

6) Continue entering OBJs because the system is only ultimately as good as the OBJs in it. [continuous, 
with other instructor input]

7) Give other instructors accounts, find a permanent home (subdomain) for the app, so that people can link 
to it to find out how students felt about the previous day's OBJs, no matter who is teaching which lecture. 
[3 hours]

