# Lexcelon Advanced Interview Challenge

## Overview
The goal of this assignment is to test your problem-solving and technical skills. We want to throw you into an unfamiliar situation and see how you are able to work independently, solving problems you may not always be familiar with.

You will be evaluated on the following:
1. Frequent and descriptive git commits.
2. Clean, consistent, functional, maintainable, and commented code.
3. Ability to problem solve and use any resources available to you.
4. Ability to complete your project requirements.

We do not want to take a ton of your time, so the tasks should be fairly straightforward. Try not to overly complicate them. Let us know if you're completely stumped-- sometimes computers can be annoying.

## Your Challenge
You are going to make a contact management tool, storing names and email addresses for a list of contacts/people in a database and allowing a user to create/delete these contacts using a React website. The shell of both the React site and NodeJS server are already prepared for you. Included below is a rough sketch for a possible way the site could look, but don’t feel tied down to this sketch if you don’t want to be. It is a-okay, too, if you want to make it look exactly like this sketch. You're welcome to go as overboard with functionality and ui as you want, but there's no requirement to do any more than what is outlined.

Within this repository, there are two main folders for you: [client/](client) and [server/](server). The client/ folder contains a React website. The server/ project contains a NodeJS server. The projects are already set up with most everything you will need in order to run them.

### The Requirements
1. Page to view a table of contact’s names and email addresses stored in a database and delete a contact from the database using MaterialUI for UI components.
2. Page to add a contact (name and email address) into a database.
3. Ability to navigate between the table view page and create new contact page.
4. A NodeJS/ExpressJS server connected to a MySQL database to store and retrieve the contacts using Sequelize.

### Setup Task 1: Try to run both projects.
Fork this repository (top right of page) into your own GitHub repo then make your repo private. Using a terminal, putty, or something similar, clone the repo to your computer and run the React client project and the NodeJS server project separately. Check out the READMEs in each project for more information on how to run them. The client project should not have any errors when you first run it. Your server project should say that you don't have your env file for the current environment and you have a database connection issue, but we'll fix that in the next step!

### Setup Task 2: Create a MySQL server on your local machine and give the server the credentials.
Set up and install a local MySQL database (and some kind of database viewer, like MySQLWorkbench) and create a new schema called lexcelon_interview_challenge. Once set up, use the credentials you used during setup of your local database to populate an environment variables configuration file. There is an example configuration file provided in server/config/.env.example. Duplicate this file in the same folder, update your database password, and name it .env.

### Setup Task 3: Create a Sequelize Model to hold your contact data.
Sequelize is a tool we use to create and manage our database schema. In the server/models folder, create your Sequelize model (Sequelize model = database table). If you were making a Contact table, you should make a file called Contact.js in the models/ folder and create the Sequelize model in there, being sure to export that model from models/index.js.

Note: Behind the scene, Sequelize will convert your fields (column names) to snake_case. Use camalCase when creating your model. You may notice in the seeder file that they are in snake_case-- that is just how the seeder files work.

### Task 4: Build the rest!
That should be all the building blocks you need to build out your contacts project. You'll need at least one API route on the server. There may be some existing code in either the client or server that you don't actually have to use-- just make sure your code satisfies the requirements. When you are finished, add me to your repo (@hapney) and shoot me an email to let me know how it went!

## My Super Rough UI Sketches
![IMG_4485](https://user-images.githubusercontent.com/22281425/163461355-d8bb27df-ee02-4abc-a3cb-39c948727a11.jpg)
![IMG_4486](https://user-images.githubusercontent.com/22281425/163461370-ddb7933d-25ba-481b-87df-34922462907f.jpg)

## Helpful Links
Check out each README ([client](client) and [server](server)) for helpful links and more documentation!
