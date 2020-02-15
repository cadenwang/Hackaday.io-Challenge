# Supplyframe Fullstack On Site Challenge

Take a basic [Node Express](https://expressjs.com/) app and a static [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) HTML template, and build out a dynamic web app.

We recommend using [EJS](https://ejs.co/) for templates.  But when writing code in the frontend, please use **only jQuery or Vanilla JS**.

## Install

```
npm install
```

## Configure

```
cp .env.example .env
```

Edit `.env` file to include your Hackaday API key.

**Get an API Key:**
- Sign up at [hackaday.io](https://hackaday.io/)
- Log in at [dev.hackaday.io](https://dev.hackaday.io/)
- Create a new [Application](https://dev.hackaday.io/applications)
- Your API Key will be displayed after creation.

## Develop

```
npm run dev
```

## Goals

First off - we do not expect you to finish everything in this list! Focus on what you are best at, and work from there.

- Project List Page
    - Render a page that shows a list or grid of projects (using [GET /projects](https://dev.hackaday.io/doc/api/get-projects)).
    - This page should be initially rendered server-side.
    - Display each project's metadata, including the owner.
        - Show a tooltip presenting the owner's metadata when hovering over a project owner's name (using the [Hackaday API](https://dev.hackaday.io)).
        - Tooltip data should be loaded dynamically, client-side.
        - Tooltip data should be loaded only once per browsing session.
    - Implement pagination
        - When going to next/previous project pages, the page should not reload.
        - When going to next/previous project pages, the browser bar should display a unique/permanent URL.
        - Visiting the permanent URL should load the same page of projects as if the visitor navigated using the next/previous links.
- Project Detail Page
    - When a project is clicked, server-side render a page that shows the clicked project's metadata (using [GET /projects/:id](https://dev.hackaday.io/doc/api/get-projects))
    - Show "recommended projects" and/or "recommended users" by comparing the selected project's tags with tags of other projects/users.
- Overall
    - Look for mobile friendly improvements.
    - Optimize the SASS to only include the Bootstrap styles you use.
    - Implement your favorite test framework/tool to check your work as you go - the level of detail is up to you.
    - Add more (useful) tasks to [Gulp](https://gulpjs.com/).
