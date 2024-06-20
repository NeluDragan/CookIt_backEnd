CookIt Server
Getting Started
Step 1: Clone the Repository
First, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo/server
Step 2: Install Dependencies
Navigate to the server directory and install the necessary dependencies using npm or Yarn:

bash
Copy code
# using npm
npm install

# OR using Yarn
yarn install
Step 3: Set Up Environment Variables
Create a .env file in the root of the server directory and add your environment variables. For example:

plaintext
Copy code
PORT=3001
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
Make sure to replace the placeholders with your actual values.

Step 4: Start the Server
To start the server, run the following command:

bash
Copy code
# using npm
npm start

# OR using Yarn
yarn start
If everything is set up correctly, your server should be running on the specified port (default is 3001).

Step 5: Testing the Endpoints
You can test the endpoints using Postman or any other API client. Here are some sample endpoints:

Get User by Token: GET /getUserByToken
Add Recipe: POST /addRecipe
Handle User Recipes: POST /handleUserRecipes
Get Ingredient: GET /ingredient
Get Ingredient by Name: GET /getIngredientByName/:name
Folder Structure
bash
Copy code
server/
├── controllers/
│   ├── authController.js
│   ├── recipeController.js
│   └── ingredientController.js
├── models/
│   ├── User.js
│   ├── Recipe.js
│   └── Ingredient.js
├── routes/
│   ├── authRoutes.js
│   ├── recipeRoutes.js
│   └── ingredientRoutes.js
├── middleware/
│   └── authMiddleware.js
├── .env
├── server.js
├── package.json
└── README.md
Learn More
To learn more about Node.js and MongoDB, take a look at the following resources:

Node.js Website - Learn more about Node.js.
MongoDB Website - Learn more about MongoDB.
Express Documentation - Learn more about Express, a web application framework for Node.js.
Troubleshooting
If you encounter any issues, here are some common troubleshooting steps:

Ensure MongoDB is running and accessible from your application.
Verify that your environment variables are set correctly in the .env file.
Check the server logs for any error messages.
