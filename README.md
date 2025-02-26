# EchoLounge

EchoLounge is a full-featured social platform that brings together forums, profile pages, chat functionality, and more, creating an interactive and engaging user experience. This project is built with , Node js, MongoDb, HTML, CSS, and JavaScript to deliver a responsive and dynamic interface for users.

## Overview

EchoLounge is designed to provide users with a seamless and interactive social experience. 
The platform includes a forums page that allows users to share ideas and discussions, a profile page where users can view and edit their personal information and posts, and other interactive components like chats and notifications.

## Features

- **Forums**: Browse and interact with different forums.
- **Profile Page**: View and update user profile and posts.
- **Real-time Interaction**: Engage with posts through replies, updates, and deletions.
- **Responsive Design**: Optimized for various screen sizes and devices.
- **Interactive UI Elements**: Dynamic actions using JavaScript for an engaging user interface.

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above) installed on your machine.
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) installed.
- [Git](https://git-scm.com/) for version control.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
Copy
Insert

Install dependencies Using npm:
npm install
Copy
Insert

Or using yarn:
yarn install
Copy
Insert

Configure Environment Variables Create a .env file in the root directory and add the necessary environment variables:
PORT=3000
DATABASE_URL=your-database-url
API_KEY=your-api-key
Copy
Insert

Run the application Using npm:
npm start
Copy
Insert

Or using yarn:
yarn start
Copy
Insert

API Documentation
The application exposes a RESTful API with the following endpoints:

Base URL
http://localhost:3000/api/v1
Copy
Insert

Endpoints
1. Get All Items
URL: /items
Method: GET
Description: Retrieve a list of all items.
Response:
[
  {
    "id": "1",
    "name": "Item One",
    "description": "Description for item one"
  },
  {
    "id": "2",
    "name": "Item Two",
    "description": "Description for item two"
  }
]
Copy
Insert

2. Get an Item by ID
URL: /items/{id}
Method: GET
Description: Retrieve details of a specific item.
URL Parameters:
id=[string] - Unique identifier for the item.
Response:
{
  "id": "1",
  "name": "Item One",
  "description": "Description for item one"
}
Copy
Insert

3. Create an Item
URL: /items
Method: POST
Description: Create a new item.
Request Body:
{
  "name": "New Item",
  "description": "Description for the new item"
}
Copy
Insert

Response:
{
  "id": "generated-unique-id",
  "name": "New Item",
  "description": "Description for the new item"
}
Copy
Insert

4. Update an Item
URL: /items/{id}
Method: PUT
Description: Update an existing item.
URL Parameters:
id=[string] - Unique identifier for the item.
Request Body:
{
  "name": "Updated Item",
  "description": "Updated description"
}
Copy
Insert

Response:
{
  "id": "1",
  "name": "Updated Item",
  "description": "Updated description"
}
