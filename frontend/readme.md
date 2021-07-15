# Parts Unlimited Frontend

The Parts Unlimited Frontend is an SPA written with [React](https://reactjs.org/) and [Redux](https://redux.js.org/)

## Getting started

To start the app use: `yarn start` from the frontend directory.

Make sure your server is up and running to serve requests.

## Pages overview

- Home page (URL: /#/ )
  - List of tags
  - List of items pulled from either Feed, Global, or by Tag
  - Pagination for list of items
- Sign in/Sign up pages (URL: /#/login, /#/register )
  - Use JWT (store the token in localStorage)
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/slug )
- Item page (URL: /#/item/slug )
  - Delete item button (only shown to item's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/@username, /#/@username/favorites )
  - Show basic user info
  - List of items populated from seller's items or user favorite items

## Generate multiple items for local development

To generate multiple items for local development quickly follow the following steps:

1. Once the application was started, sign-up as a new user. 
1. Connect to the MongoDB database and change your user's role from "user" to "admin"
1. Once your user's role has been updated, you will now see a "Generate Items" button in the header.
1. Click the "Generate Items" button to generate 100 items.
