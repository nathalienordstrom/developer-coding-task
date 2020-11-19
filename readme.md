# iGoMoon Developer Coding Task

## Overview

Your task will be to complete a small project with the **Hubspot CMS** using your HTML, CSS and JS skills. We going to assume that you have no knowledge with the Hubspot CMS at this point, so we’ve created this “starting point” repository for you.

For this task you will be given a scenario based on what a customer has requested. You'll then be required to style and add interactive features with Javascript/jQuery to meet those requests.

NOT including setup (Instructions for set up below), you should allow yourself **3-4 hours for the main task**.

Please see the "Submission Instructions" at the base of this document.

<br><br>

## Assumed Knowledge

In order to take on this task, we are going to assume you have some relevant technical knowledge:

- **HTML, CSS and JS:** Comfortable in all 3
- **Able to navigate the command line interface (CLI):** You don’t need to be a wizard but you should be able to move around between directories and run commands.

This task centers around the Hubspot CMS, wo whilst we are assuming you have no knowledge of it so far, you should be able to find the answers. Hubspot has a big community and good documentation which you can use to find all the answers you need.

<br><br>

## Preparation/ Setting up this task

To setup the starting point and use HubSpot's **Local development tools**, follow the steps below:

1. Create a free CMS sandbox account https://app.hubspot.com/signup/standalone-cms-developer
2. Install Node.js, which enables HubSpot's local development tools. Versions 8.9.1 or higher are supported. [https://nodejs.org/en/](https://nodejs.org/en/) (Choose LTS Option)
3. Download this repository as a .zip file.
4. Extract the zip file into a newly created `igomoon-coding-task` folder on your computer. You should now have the `developer-coding-task` folder within that new folder.
5. Using the command line, cd into the `igomoon-coding-task` folder and run `hs init`. This will connect the tools to your HubSpot account follow the instruction to your [Personal Access Key Page](https://app.hubspot.com/l/personal-access-key)
6. Once connected you can then run the command, this is going to perform and inital upload and now watch for changes within your `developer-coding-task` as you complete the task
```
hs watch developer-coding-task developer-coding-task --initial-upload
```
7. Begin the task below. Run `hs --help` and familiarise yourself with the HubSpot tools available to you.

### Boilerplate Notes

Somethings to keep in mind as you use this boilerplater repository.

- There is a HTML + HUBL `page.html` template which serves as the main page
- Twiiter Bootstrap and jQuery Slim is included

<br><br>

## Task Overview

**From the Customer:**

> "Our optin module needs to be more "smooth". We want to just show the email field to start with and then when they begin to fill in the field, the other field and the button should then "appear" below. Right is looks "boring" so we are hoping for nice but still simple UI.

Allow yourself **2-3 hours for the task**. You are free to make it however you want to meet the customers needs. **NOTE:** Allow yourself more time for any knowledge gaps.

- The `main.css` and `main.js` files should be used instead of the js and css files withing the module.
- You are allowed (& encouraged) to install packages for both javascript and CSS. You will however be asked to justify your choices.

*“It should be made as simple as possible, but no simpler”*