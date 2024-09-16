# TODO List Application

A full-stack TODO list application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This application allows users to create, read, update, and delete TODO items.

## Features

- **Create TODO Items**: Add new tasks to your TODO list.
- **Read TODO Items**: View all existing tasks.
- **Update TODO Items**: Edit task details or mark tasks as completed.
- **Delete TODO Items**: Remove tasks from your list.
- **Cancel Operations**: Cancel ongoing operations like editing or creating new tasks.

## Technologies Used

- **MongoDB**: Database to store TODO items.
- **Express.js**: Backend framework to handle API requests.
- **React**: Frontend library to build the user interface.
- **Node.js**: Server-side runtime environment.

## Installation

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running instance or Atlas cluster)

### Clone the Repository

```bash
git clone https://github.com/KumarP123IT/todo.git
cd todo
```

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd todo
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `todo` directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../todo-frontend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

### Usage

1. Open your browser and navigate to `http://localhost:3000` to access the TODO list application.
2. Use the UI to add, view, edit, and delete TODO items.

## API Endpoints

- **GET** `/api/todos` - Retrieve all TODO items.
- **POST** `/api/todos` - Create a new TODO item.
- **PUT** `/api/todos/:id` - Update a TODO item by ID.
- **DELETE** `/api/todos/:id` - Delete a TODO item by ID.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact me at [kecit21048@kingsedu.ac.in](mailto:kecit21048@kingsedu.ac.in).

---
