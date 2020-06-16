# Node Auth 2 Guided Project

Guided project for **Node Auth 2** Module.

## Prerequisites

-  [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
-  Optional: PostgreSQL and pgAdmin 4 installed.

## Project Setup

-  [ ] fork and clone this repository.
-  [ ] **CD into the folder** where you cloned **your fork**.
-  [ ] type`npm i` to download dependencies.
-  [ ] type `npm run server` to start the API.

Please follow along as the instructor adds support for `JSON Web Tokens (JWT)`
to the API.

## Server

-  validate credentials.
-  product a token
-  send the token as part of the response
-  on requests that require authentication
   -  read the token (commonly inside an Authorization header)
   -  decode the token -> verify it's valid and hasn't been modified
   -  make the decoded token data available for the rest of the API

## Client

-  store the token (local storage, memory, etc)
-  send the token (commonly as the Authoriation header) with every request
-  destroy the token on logout
