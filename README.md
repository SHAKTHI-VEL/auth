## Installation

To run this project locally, you need to have Node installed on your machine. Follow the steps below to get started:

1. Clone this repository to your local machine using the following command:

   ```
   https://github.com/SHAKTHI-VEL/auth.git
   ```

2. Change your current directory to the project folder:

   ```
   cd auth
   ```

3. Run the following command to fetch the dependencies:

   ```
   npm install
   ```


4. Finally, run the server using the following command:

   ```
   node index.js
   ```

     ## Implementation

   The auth API is created in Node Js with the help of Express Js Framework.It is conected with mongo DB with the help of mongoose.The mongo db has a user schema created with the help of mongoose which contains email and password as a field.The api has two endpoints i.e. /login for authorizing the user and /signup for creating new user.Both the endpoints can be accessed with the POST request.Express Router is used to create the routes.The password in the database is protected using salting,a hashing method provided by bcryptjs.Authorized user are provided with success variable which is a boolean and token provided by jsonwebtoken.
