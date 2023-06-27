# Movie Backend Project

This is a backend project template for managing movies, built with a Domain-Driven Design (DDD) approach and following best practices. It serves as a starting point for personal projects and provides examples of DDD implementation, testing, and other recommended practices.

## Features

- Domain-Driven Design (DDD) structure for improved maintainability and scalability.
- Separation of concerns using layers such as domain, application, and infrastructure.
- Use of TypeScript for type safety and enhanced developer experience.
- Integration with a database (e.g., MongoDB) for data persistence.
- Implementation of CRUD operations for managing movies.
- Inversion of Control (IoC) and Dependency Injection (DI) for managing dependencies and promoting loose coupling.
- Unit testing with a testing framework (e.g., Jest) for ensuring code quality and reliability.
- Environment-based configuration for different deployment environments.

## Project Structure

The project follows a modular structure based on DDD principles. Here's an overview of the main directories and files:

- `src/`: Contains the source code of the application.
  - `application/`: Contains the use cases (application logic) that interact with the domain.
  - `domain/`: Contains the domain models, entities, and value objects.
  - `infrastructure/`: Contains the implementation of external dependencies, such as the database.
  - `injection/`: Contains the code for dependency injection configuration and container setup.
  - `interfaces/`: Contains the implementation of the user interfaces, such as HTTP controllers and routes.
  - `shared/`: Contains shared elements and utilities used across the application.
- `test/`: Contains the unit tests for the application.
- `package.json`: Lists the project dependencies and scripts.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Start the application: `npm run dev`

## Testing

The project includes unit tests to ensure the reliability and correctness of the code. To run the tests, use the following command:

```bash
npm test
```
