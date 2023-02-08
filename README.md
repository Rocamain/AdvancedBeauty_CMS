<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://drive.google.com/uc?export=view&id=1EnnOQFkZHuW0iPJIc3mzY6mmbHpuPx_S">
  <source media="(prefers-color-scheme: light)" srcset="https://drive.google.com/uc?export=view&id=1EnnOQFkZHuW0iPJIc3mzY6mmbHpuPx_S">
  <img alt="Logo Advantage Beauty in light Mode mode." srcset="https://drive.google.com/uc?export=view&id=1EnnOQFkZHuW0iPJIc3mzY6mmbHpuPx_S">
</picture>

## Tech

[![Strapi](https://img.shields.io/badge/Express-4.1.8-black)](https://expressjs.com)
[![Postgres](https://img.shields.io/badge/PG-8.7.3-blue)](https://www.postgresql.org)

# DESCRIPTION

Advanced Beauty CMS is a Strapi headless CMS linked to postgres data base, where your can choose and reorganize the components for each avilable route, create links, and add content. [Request me access](mailto:fjrocavazquez@gmail.com) access if you want to play with it,

Project on [production](https://https://advancedbeautycms-production.up.railway.app/admin).

### What the project does.

- Serves the content to a front end.
- Establish the navigation structure.
- Define the order of the components on the front end, by using dynamic components

### Goals

My main goal was to learn and implement a CMS that will help to the user to manage and reorganize the content given to the front end. Giving to the user the independence and flexibility from the code. As well as facilitate the development in order to add new features or components to be implemented in the future.

This project is part of major project , which includes:

1. [Bank End](https://advancedbeauty-be-production.up.railway.app/), Api for bookings management
2. [Front End](https://advanced-beauty-fe.vercel.app/)

Repos:

1- [Back End](https://github.com/Rocamain/AdvancedBeauty-BE)
2- [Front End](https://github.com/Rocamain/AdvancedBeauty_FE)

##### Personal goals:

- Learn a new tech like Strapi.
- Create a flexible CMS which not only control the content, but the way it's displayed.
- Design the navigation by user needs.
- Learn to use plugins, as Cloudirary.

##### Future improvements:

- Check how to implement a continuos integration.
- Check the code to be more DRY.
- Implement a preview mode.
- Reconfigure and rename the components and end point of the api in more generic way.
- Use the design system of strapi to build my own navigation plugin.

---

## Install [PostgreSQL](https://www.postgresql.org/download/).

---

### Mac

- Please note that if you are using a Mac with the M1 chip you will need to install `psql` via your Rosetta terminal as we are installing it globally and the installation will not persist otherwise.

- Install Postgres App https://postgresapp.com/
  - Open the app (little blue elephant) and select initialize/start
- type `psql` into your terminal. You should then see something similar to:

```psql
psql (9.6.5, server 9.6.6)
Type "help" for help.

username=#
```

- if the above does not show/you get an error, run the following commands in your terminal:
  - `brew update`
  - `brew doctor`
  - `brew install postgresql`

### Ubuntu / WSL

**In your linux terminal:**

- Run these commands:
  `sudo apt-get update`

  `sudo apt-get install postgresql postgresql-contrib`

- Next run the following commands to create a database user for Postgres.

  `sudo -u postgres createuser --superuser $USER`

  `sudo -u postgres createdb $USER`

If you see the following error: _`role "username-here" already exists`,_ it means that you already have a Postgres user so can move on to the next step.

If you see the following error: _`Cannot connect to database/server` or similar,_ run `sudo service postgresql start` to ensure that the postgresql server is running before trying the above again.

- Then run this command to enter the terminal application for PostgreSQL:

  `psql`

_You may need to run the following command first to start the PostrgreSQL server in order for the `psql` command to work:_ `sudo service postgresql start`

- Now type:

  `ALTER USER username WITH PASSWORD 'mysecretword123';`

  **BUT** Instead of `username` type your Ubuntu username and instead of `'mysecretword123'` choose your own password and be sure to wrap it in quotation marks. Use a simple password like 'password'. **DONT USE YOUR LOGIN PASSWORD** !

- You can then exit out of psql by typing `\q`

#### Storing a Postgres password on Ubuntu

To set a default password to use when running the psql cli you can create a file called `.pgpass` in your home directory. (If you're using macOS this feature comes out of the box so no need to follow these steps)

**tip:** You can navigate to your home directory from any terminal by running cd with no arguments

```bash
cd
```

Create a file called `.pgpass` and open it with a text editor.

```bash
touch .pgpass
```

```bash
code .pgpass
```

The file will be empty when first created, and you should then add a single line with the following format:

```
hostname:port:database:username:password
```

Each field can be a literal value or a wildcard: `*`. We just want to set a password so should add the following to your file (replacing 'mypassword' with your actual password that you created when you ran the `ALTER USER` command):

```
*:*:*:*:mypassword
```

The permissions on `.pgpass` must disallow any access to world or group; You can do this with the following command when you are in the directory containing your `.pgpass` file.

```bash
chmod 0600 .pgpass
```

When you run psql it should now use this password as a default so you don't have to provide one on every command.

## 2 If you have postgresql installed , create your data base and connect it. If it is not connected.

1. run <code>sudo psql<code/>
2. <code>CREATE DATABASE database_name;</code>
3. <code>GRANT ALL PRIVILEGES ON DATABASE "database_name" to my_username;</code>

## 3 Add the into your .env file.

Test environment

   <code>
   TEST_USER: my_username,
   TEST_PASSWORD: my_password 
   TEST_PASSWORD: database_name
   TEST_HOST: 127.0.0.1
   TEST_PORT: 5432.
   </code>

Repeat the steps 2.2 to 2.4 to add the DEV environment. you have the env.example for your reference.

## 4. Run Scripts.

4.1. <code>yarn install</code>

4.2 <code>npm run build</code> as strapi need to build the admin panel

4.3 <code>npm run develop</code>

5. App running

5.1 you will ask to create a user.

5.2 Once you logged in you will need to configure your strapi app access to roles

5.3 Configure your navigation, [instructions](https://github.com/VirtusLab-Open-Source/strapi-plugin-navigation)

---

# Let's keep in touch

- [LinkedIn](https://example.com)
- [CV](https://example.com)
- [Porfolio](https://example.com)
