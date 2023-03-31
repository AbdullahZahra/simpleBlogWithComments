# Simple Blog Application With Comments

## Functions of the Application

- CRUD Operations on Posts.
- Adding and Viewing Comments.
- Ajax HTTP Requests.

## Tools Used in the Application

I used Node.js with MongoDB on WSL and Docker.

## How to Start the Application

After getting the code on your machine you can use the docker Mongo related images or you can use your own database setup.

### Installing All Dependencies

```bash
npm install
```

### Starting the Docker Containers

1. You have to have a working docker application installed on your machine.
2. Go to the compose directory.
3. Run the docker compose up command.

```bash
cd compose
docker compose up
```

### Preparing the Database

The Node.js Application will handle all the data & table creating in the database except for the Authors table it should be initialized manually.
You can do so by using these commands in the Mongo Shell

```bash
use blog
db.authors.insertOne({name: "Author Name", email: "Author Email"})
```

### Starting the Node.js Server

```bash
npm start
```
