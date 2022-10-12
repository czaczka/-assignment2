# MyApp

## github link
- https://github.com/czaczka/-assignment2.git


## Running this git repository

Make sure to clone the repository. Once cloned run `npm install` in the root directory and the server directory. Once this is done run command `ng bild` and `ng serve --open` in root directory. Lastly run `node server.js` in the server directory. This will start the server on http://localhost:4200

## git layout

The git repository contains the main angular app along with the backend node server directory. Code is committed reguarly when a new feature is implemented and working correctly. Changes would be pushed after every hour to maintain the integrity of the code.

## Data structures

Currently there is one main data structures.  This is the users database using mongodb. It contains a userID, name, email, password and role. The other main data structure is the users interface which is for the frontend. It contains the outline of the object users which has a userID, name, email, password and role.

## REST API

### add 

- Route: api/add
- Method: POST
- Parameters: userID, name, password, role
- Return value: if data succesfully inserted in the database then an inserted count will be logged. If data is duplicate and an error "duplicate item" will be logged.
- Technical explanation: add route receives a userID, name, password, role from a form. This is then inserted into the database. If there is a duplicate item then the user is alerted.

### delete

- Route: api/delete
- Method: POST
- Parameters: userID
- Return Value: id, count of deleted items are logged in the terminal. Items are removed from database
- Technical explanation: A userID is passed to the route. The route finds the user in the database and deletes the selected user and it is logged to the console. 

### getItem

- Route: api/getitem
- Method: POST
- Parameters: userID
- Return Value: userID, name, password, role
- Technical explanation: A userID is passed to the route, the route then finds the user data in the database and appends it to to an array and sends it back to the component.

### getList
- Route: api/getlist
- Method: GET
- Parameters: users
- Return value: userID, name, password, role
- Technical explanation: This route gets all of the users in the database and their parameters and then appends it to an array and sends it back to the component.

### listen
- Route: ./listen
- Method: GET
- Parameters: app, Port
- Return: starts server
- Technical explanation: Starts the server on port 3000

### socket
- Route: ./socket
- Method: GET
- Parameters: io, port
- Return: Socket connection
- Technical explanantion: Starts the socket connection when called on port 3000 and broadcasts the socket id.

### update
- Route: /api/update
- Method: POST
- Paramaters: userID
- Return: userID, name, email, password, role
- Technical explanation: Takes in a userID to be edited and pushes the changes to the database and returns the changes

### validid
- Route: /api/checkvalidid
- Method: POST
- Parameters: userID
- Return: userID
- Technical explanation: Checks if the userid has been used before and returns the userID

### validuser
- Route: /api/checkuser
- Method: POST
- Parameters: email,password
- Return: error or userid, name, email, role
- Technical explanation: Takes the user email and password then checks the database to see if both match and if it does it will return an array of the user otherwise it will return an error.

## Angular architecture

### Components

#### Home

This is the default route and contains the nav-bar links for the other components and nothing else.

#### Login

This component is accessed from the home page using the login button which navigates the user to the login screen where they are greeted with a username and password field. The user must enter the correct details and press submit. Once pressed a function 'login()' is called which activates the route api/validuser via http methods and verifies the users credentials if they are correct they will be redirected to the profile component if they are incorrect they will receive an alert instructing them that their username or password is incorrect.

#### Profile

This component can be accessed from the homepage or after the user is redirected from the login screen. If the user attempts to access the profile component without login in they will be given an alert message to login and then will be redirected to the login page. If the user is indeed logged in then they will see their user details such as their id, username, email and role. This data is accessed through the api/validuser route which retrieves the users data by matching the email to the database. The user is saved in session storage.

#### Chat

Chat can be accessed via the main navbar. On successful navigation the socket connection is initiated. The `initToConnection()` retrieves any messages that have been sent. When the user sends a message the `chat()` function is called which communicates with the chat service.

#### add-users

Add users can be accessed via the main navbar. It is the main component for creating users. It has a form which has input for a userid, name, email, password and role. In the main class there is an outline of the user object. When the user presses add user the `addnewUser()` function is called it checks if there is a user id, the function `checkvalidid()` using the api/checkvalidid route, is also called to check if the userid has already been taken. If it has not then the data is passed to the /api/add route which takes the user data and pushes it into the database.

#### all-users

All users can be accessed via the main navbar. `ngOnInit()` is called when the pages loads and calls the /api/getlist route which retrieves and array of all user details from the datbase and displays it onto the page. The page also features a delete button and edit button. If the user clicks the delete button on the given user the `deleteproduct()` function is called which takes the userid and passes it to the /api/delete route which takes that userid and finds it in the database and deletes it. If the user presses the edit button the `update()` function is called and takes the userid and passes it to the /api/update route and redirects the user to the update component.

## Other features

### Logout

The user can logout from any page using the logout button on the nav-bar. This calls the `clear() {
  sessionStorage.clear();
  this.router.navigateByUrl("/login");
}` function in the app component and clears the session storage and redirects the user to login again.
