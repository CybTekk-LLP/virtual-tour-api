Sure! Here's an updated version of the README file including the information about using Multer for file uploads:

---

# Project Title

A brief description of what this project does and who it's for.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/project-name.git
   cd project-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   ACCOUNT_NAME=your_account_name
   SAS_TOKEN=your_sas_token
   CONTAINER_NAME=your_container_name
   UPLOADS_PATH=path_to_uploads_directory
   ```

4. **Build and start the server:**
   ```bash
   npm run build
   npm run dev
   ```

## Usage

### Starting the Server

To start the server, run:
```bash
npm run dev
```
The server will start on the port specified in the configuration (default is `1209`).


## Configuration

### AppConfig
- `port`: The port on which the server will run. Default is `1209`.

### Environment Variables
- `ACCOUNT_NAME`: Your Azure Blob Storage account name.
- `SAS_TOKEN`: Your Azure Blob Storage SAS token.
- `CONTAINER_NAME`: The name of your Azure Blob Storage container.
- `UPLOADS_PATH`: The path to the directory where uploads will be stored.

## Endpoints

### Uploads
- `POST /api/uploads/images`: Uploads a new image to Azure Blob Storage using Multer and returns the URI.

### Static Files
- `GET /api/uploads/*`: Serves static files from the uploads directory.

## Middleware

### Multer
Multer is used for handling file uploads. It is configured to handle image uploads and store them in the specified `UPLOADS_PATH`.

Here is an example of how Multer is set up in the server:

```javascript
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/uploads/images', upload.single('file'), (req, res) => {
  // Handle the uploaded file here
});
```

## Error Handling

The server uses a centralized error handling middleware `ExpressErrorHandler`. Errors will be logged and appropriate HTTP status codes and messages will be returned.

## Logging

The server uses a custom `Logger` for logging information and errors. Logs include information about server startup, database connections, and errors.

