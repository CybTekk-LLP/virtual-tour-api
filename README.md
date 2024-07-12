# virtual-tour-api
Here's a README file for your project that includes a description, setup instructions, and usage information:

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
   npm start
   ```

## Usage

### Starting the Server

To start the server, run:
```bash
npm start
```
The server will start on the port specified in the configuration (default is `1209`).

### Example Request

You can use tools like `curl` or Postman to interact with the API. Here's an example of how to upload an image:
```bash
curl -F "file=@/path/to/your/image.jpg" http://localhost:1209/api/uploads/images
```

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
- `POST /api/uploads/images`: Uploads a new image to Azure Blob Storage and returns the URI.

### Static Files
- `GET /api/uploads/*`: Serves static files from the uploads directory.

### Docs
- `GET /api/docs`: Serves API documentation.

## Error Handling

The server uses a centralized error handling middleware `ExpressErrorHandler`. Errors will be logged and appropriate HTTP status codes and messages will be returned.

## Logging

The server uses a custom `Logger` for logging information and errors. Logs include information about server startup, database connections, and errors.

## License

Add your license information here.

## Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-repo/project-name](https://github.com/your-repo/project-name)

---

This README provides an overview of the project, setup instructions, and details about how to use the provided endpoints. Feel free to customize it further based on your project's specific requirements.
