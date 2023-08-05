# Boilerplate App

This repository contains boilerplate code for my future projects, designed to help me quickly start a new project with my preferred tech stack and project structure.

## Project Structure

This repository contains the following main directories, each representing a different project:

- `api`: A basic API built with Express and TypeScript.

## Express TypeScript API

This project demonstrates usage of Express middlewares, routers, and controllers with TypeScript.

### Getting Started

Ensure that you have Node.js (version 14 or higher) and npm installed on your machine.
Clone the repository:

```bash
git clone https://github.com/yourusername/app-boilerplate.git
cd app-boilerplate/api
```

Install the dependencies:

```bash
npm install
```

You can start the server with:

```bash
npm run start
```

### Development

To run the server in development mode with hot reloading, use:

```bash
npm run dev
```

### Features

- Express.js as the server framework
- TypeScript as the main language
- Router-based structure for organization of route handlers
- Middleware implementation for logging

### Built With

- Express.js
- TypeScript
- dotenv
- chalk

# MongoDB

## Backup

Creating a backup for MongoDB when it's running inside a Docker container can be achieved using mongodump. This utility makes a binary export of the contents of a database. Here's how you can create a backup:

### Using Docker Exec

You can use `docker exec` to run the `mongodump` command directly inside the running MongoDB container.

```bash
docker exec -it mongodb mongodump --authenticationDatabase admin -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} -o /backup
```

This command will create a backup inside the /backup directory of the container.

### Copy Backup to Host

After executing the above `mongodump`, the backup will reside within the MongoDB container. You can use `docker cp` to copy it from the container to your host machine:

```bash
docker cp mongodb:/backup ./mongodb-backup
```

This will copy the backup to a mongodb-backup directory in your current location on the host.

### Automate with a Script

If you intend to make backups frequently, consider creating a bash script to automate the above steps:

```bash
#!/bin/bash

# Define MongoDB container name and backup directory
CONTAINER_NAME=mongodb
BACKUP_DIR=./mongodb-backup

# Run mongodump inside the MongoDB container
docker exec -it $CONTAINER_NAME mongodump --authenticationDatabase admin -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} -o /backup

# Copy the backup from the container to the host
docker cp $CONTAINER_NAME:/backup $BACKUP_DIR

echo "Backup completed successfully."
```

Make sure to give execute permissions to your script:

```bash
chmod +x your-script-name.sh
```

And then you can run it:

```bash
./your-script-name.sh
```

### Important Considerations

- **Backup Strategy**: It's essential to have a robust backup strategy. Depending on your app's criticality, consider daily backups, weekly backups, or even hourly backups for very critical databases.
- **Backup Storage**: Ensure backups are stored in a safe place. Consider cloud storage or off-site backups for critical data.
- **Backup Testing**: Regularly test restoring from your backups to ensure they're valid.

Remember, the backup steps provided assume that MongoDB is running with authentication enabled. If not, you'd need to modify the mongodump command accordingly.
