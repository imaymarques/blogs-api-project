# Blog Content Management API

Este é um projeto de API e banco de dados para gerenciar o conteúdo de um blog!

Neste projeto, desenvolvi uma aplicação em Node.js usando o pacote Sequelize para realizar operações de CRUD em posts.

Implementei endpoints conectados ao banco de dados, seguindo os princípios do REST.

Alguns pontos importantes do projeto:

- Para criar um post, é necessário ter um usuário e estar logado. Portanto, trabalhei na relação entre usuário e post.
- Utilizei categorias para classificar os posts, estabelecendo a relação entre posts e categorias.

## Funcionalidades do Projeto

A aplicação de gerenciamento de conteúdo do blog inclui as seguintes funcionalidades:

- **Gerenciamento de Usuários e Posts**: Implementei endpoints para autenticação de usuários, criação de usuários e criação de posts.
- **Gerenciamento de Categorias**: As categorias estão associadas aos posts, permitindo a categorização e organização do conteúdo.

## Endpoints da API

A API fornece os seguintes endpoints:

- `POST /login`: Realiza o login do usuário e retorna um token de autenticação.
- `POST /user`: Cria um novo usuário no banco de dados.
- `GET /user`: Retorna todos os usuários do banco de dados.
- `GET /user/:id`: Retorna um usuário específico com base no ID fornecido.
- `POST /categories`: Cria uma nova categoria no banco de dados.
- `GET /categories`: Retorna todas as categorias do banco de dados.
- `POST /post`: Cria um novo post no blog e associa-o a categorias.
- `GET /post`: Retorna todos os posts do blog, juntamente com o usuário e as categorias associadas.
- `GET /post/:id`: Retorna um post específico com base no ID fornecido.
- `PUT /post/:id`: Atualiza o título e o conteúdo de um post.
- `DELETE /post/:id`: Exclui um post específico.
- `DELETE /user/me`: Exclui o usuário atualmente logado.

## Autenticação

Para acessar determinados endpoints, como criar um usuário, criar um post ou excluir um usuário, é necessária autenticação. Você precisa incluir um token de autenticação no cabeçalho da solicitação para essas operações.

## Modelos de Dados e Migrations

A aplicação utiliza o pacote Sequelize para gerenciamento do banco de dados. Criei migrations e models para as seguintes tabelas: `users`, `categories`, `blog_posts` e `posts_categories`. Os models devem estar localizados no diretório apropriado e seguir as convenções de nomenclatura especificadas nos requisitos.

__________________________________________________________________________________________________________________________________________________________

# Blog Content Management API

This is a project for an API and database to manage the content of a blog!

In this project, I developed a Node.js application using the Sequelize package to perform CRUD operations on posts.

I implemented endpoints connected to the database, following REST principles.

Some important points of the project:

- To create a post, a user is required and must be logged in. Therefore, I worked on the relationship between users and posts.
- I used categories to classify the posts, establishing the relationship between posts and categories.

## Project Features

The blog content management application includes the following features:

- **User and Post Management**: I implemented endpoints for user authentication, user creation, and post creation.
- **Category Management**: Categories are associated with posts, allowing for the categorization and organization of content.

## API Endpoints

The API provides the following endpoints:

- `POST /login`: Performs user login and returns an authentication token.
- `POST /user`: Creates a new user in the database.
- `GET /user`: Retrieves all users from the database.
- `GET /user/:id`: Retrieves a specific user based on the provided ID.
- `POST /categories`: Creates a new category in the database.
- `GET /categories`: Retrieves all categories from the database.
- `POST /post`: Creates a new post in the blog and associates it with categories.
- `GET /post`: Retrieves all posts from the blog, along with the associated user and categories.
- `GET /post/:id`: Retrieves a specific post based on the provided ID.
- `PUT /post/:id`: Updates the title and content of a post.
- `DELETE /post/:id`: Deletes a specific post.
- `DELETE /user/me`: Deletes the currently logged-in user.

## Authentication

To access certain endpoints, such as creating a user, creating a post, or deleting a user, authentication is required. You need to include an authentication token in the request header for these operations.

## Data Models and Migrations

The application uses the Sequelize package for database management. I created migrations and models for the following tables: `users`, `categories`, `blog_posts`, and `posts_categories`. The models should be located in the appropriate directory and follow the naming conventions specified in the requirements.
