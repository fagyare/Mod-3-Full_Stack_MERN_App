# Mod-3-Full_Stack_MERN_App
Building a site where a small business can log post/problems for other team members 
This site was built with CSS, HTM, JavaScript, and React. The database is saved on Mango DB and site is hosted on Render.com 

Trello: https://trello.com/b/az7buJZ7/full-mern-app-project

Host site: https://youth-frontend.onrender.com/login

Features:
Navbar: Home - About Us - Login - Sign up 
The website has a Navbar that routes to multiple pages. 
Home: The Home pages loads the post for all registered members, sorted by department

Register: User register an account to for a department to report their isses

Login: User log's in to the site to report/log posts for members in their team 

About Us: This page gives a brief history of the organization and its Mission and Vision 


Logic -
    * Register an account to your department. Communite directly on a post with your team. 
    * Users are not allowed to access any page unless registered and signed into the site 
    * A user must register to a department within the organization 
    * Users can add, edit, and delete messages that they post
    * Users can comment on posts & comments posted by members of their department 
    * Users are only allowed to see and comment on logs related to their department - confidentiality 

*** Index View - This page renders posts by user per department 
*** Show View - This page shows details a log posted by users 
*** Add View - Ability to add logs/comments to a post by users 
*** Edit View - User's ability to edit a log and make comments or log within their department 
*** Delete - Delete a log and/or comment by a user if registered and logged to a specific department  

Challenges:
Creating Authentication for Registration and Login. 

Things to work on: 
-- Home page that will give user the option to choose a department to register and log in 
-- Show all post for all members 
-- Task App where users can assign tasks and track the process 
