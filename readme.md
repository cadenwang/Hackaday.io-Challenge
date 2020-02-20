# Supplyframe Fullstack On Site Challenge
This is my implementation of Supplyframe's full-stack coding challenge.

## Install & Clone

```
git clone https://github.com/cadenwang/Hackaday.io-Challenge.git
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

## Notes
- Project List Page
> Tooltip data should be loaded only once per browsing session.
    Was not sure if this meant to store EVERY user's tooltip data in a session/local storage, I implemented some functions doing this but in the end just made a request for the tooltip data for only the users on each page. We could store every user's id and data as key/value pairs in sessionStorage to have constant time lookups when changing pages. 

- Project Detail Page
>Show "recommended projects" and/or "recommended users" by comparing the selected project's tags with tags of other projects/users.
    Shows recommended users in a list, if no users it will show "No Similar Users"

- Overall
> Look for mobile friendly improvements.
    No major changes but could be easily implemented using @media css queries, using dynamic units like **rem/em** instead of px, and using **boostrap/flexbox/grids**

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

        ![](pagination.gif)   

- Project Detail Page
    - When a project is clicked, server-side render a page that shows the clicked project's metadata (using [GET /projects/:id](https://dev.hackaday.io/doc/api/get-projects))
    - Show "recommended projects" and/or "recommended users" by comparing the selected project's tags with tags of other projects/users.

        ![](project-page.gif)

- Overall
    - Look for mobile friendly improvements.
    - Optimize the SASS to only include the Bootstrap styles you use.
    - Implement your favorite test framework/tool to check your work as you go - the level of detail is up to you.
    - Add more (useful) tasks to [Gulp](https://gulpjs.com/).
