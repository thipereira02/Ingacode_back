# Tasky

Tasky is is a task control application, being able to add, edit and add time trackers.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>

  ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
  ![PostgresSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)&nbsp;
  
  ## How to run

1. Clone this repository
```bash
git clone https://github.com/thipereira02/Ingacode_back
```

1. Create a Database using the ``dump.sql`` file inside the ``dump`` folder by following these steps:
    - 2.1 Open your terminal. **Important: the terminal must be opened in the same path as the ``dump.sql`` file is located.**
    - 2.2 Access PostgreSQL using the command ``sudo su postgres`` and enter your password when prompted.
    - 2.3 Next, type ``psql postgres`` and hit enter.
    - 2.4 Create a database by typing ``CREATE DATABASE ingacode;`` and hitting enter.
    - 2.5 Type ``\q`` and hit enter.
    - 2.6 Finally, type ```psql ingacode < dump.sql``` and hit enter. Your database should be ready after this step.
2. Set the environment variables by following these steps:
    - 3.1 Create a ``.env`` file in the folder root
    - 3.2 Copy the content of the ``.env.example`` into it
    - 3.3 Set the database parameters
    - 3.4 Set the ``PORT`` for 4000
3. In your terminal, go back to the root folder and install the dependencies
```bash
npm i
```
