## User Stories
* As a _______, I shall be able to _________, because __________.
* OR
* As a _______, I shall NOT be able to _________, because __________.
* e.g.


## Nouns are Resources. They are the Entities for your ERD
* every entity needs its own table
* make an ERD


## Make a planning directory in the git repo
* user-stories.md
* ERDv3.png


## Define Routes to the Resources (REST API for each Resources)
* client needs a way to update/delete things in the db
* if it's an action, the path is singular
* if it's a resources, the path is plural

B   GET   /widgets
R   GET   /widgets/:id
E   POST  /widgets/:id/edit    (PUT/PATCH?)
A   POST  /widgets
D   POST  /widgets/:id/delete  (DELETE?)

Consider (and probably make) each of these BREAD endpoints for each of your resources.


@ 35 minutes 
## MVP
* Minimum Viable Product
* MVP = the minimum set of features that a user will find useful
* Minimum Viable Demo
* MVD = the minimum viable demo we can make in 5 minutes
* if you're not going to show it in the demo, DO NOT BUILD IT
* "Wouldn't it be cool if... ?" can be the death of a project.

@ 45 minutes
## Wireframes
* mockups
* wireframes (lowest fidelity possible)
* fastest thing would be to draw it and take a photo

@ Afterbreak
## User Login
* Do NOT implement a full authentication layer

```
app.get('login/:id', (req,res) => {
  // session cookies
  req.session.user_id = req.params.id;

  // redirect user somewhere
  res.redirect('/');
});
```

@ 1:10
## Stack Parts
* Front End: HTML, CSS (bootstrap? normalize?), JS (jQuery?)
* Back End: Node, Express, Postgres
* Midterm Skeleton: https://github.com/lighthouse-labs/node-skeleton
* check out the router. [ it makes sense to have a router for each table in your DB ]
* check out DB Reset
  
@ 1:30
## Single Page Application (SPA) vs. Multi-page Application
* not mutually exclusive
* (your app can be one or the other or a bit of both)

@ 1:40
## Git
* DO NOT CODE ON main (or master)
* merge locally and THEN push OR merge in cloud via a pull request and then pull down
* consider yourself lucky if you encounter a merge conflict.
* they can be tricky... better to learn it sooner, and here at camp rather than on the job

@ 1:50
## How to split up the work
* vertically -> each member of the team is working on a different piece of the stack
* horizontally -> all members are working on the same part of the code at the same time
* pair programming

## Communication
* the hardest part is working together
* therefore communicate 'at least several times per day'
* we do not care how (discord? slack? video chats?)
* anger comes from unmet expectations... so if you need a break or can't 

## Do Not Sacrifice Your Education to let someone else do stuff just because that part isn't your favorite
* now is your chance to make good on all your investment of treasure, blood, sweat and tears


### External Resources

* [Wireframe Example #1](https://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/341_wf/wireframe-withgreys.png)
* [Wireframe Example #2](https://d3n817fwly711g.cloudfront.net/blog/wp-content/uploads/2012/03/Wire-frame-example.png)
