# Hacktivpress
Simple blogging system

## REST API
List of user routes:

Route | Houte | Description
------------ | ------------- | -------------
/signup | POST | Sign up with new user info
/singin | POST | Sign up while get an access token based on credentials
/ | GET | Get all articles
/:id | GET | Get article info by id
/category/:cat | GET | Get articles by category
/ | POST | Create an article
/:id | DELETE | Delete an article (only the user who made it)
/:id | PUT | Update an article (only the user who made it)

## Usage

With only npm:
```
 cd hacktivpress
 npm install
 npm run dev
 cd server
 npm install
 npm start
```

Access the website via `http://localhost:8080` or API via `http://localhost:3000`.
