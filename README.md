##### connect as super user => psql -U postgres

##### create the project user => CREATE USER shoppingcompany WITH PASSWORD '48651532';

##### make user can create a db => ALTER USER shoppingcompany CREATEDB;

##### enter as shoppingcompany instead of postgres => psql -U shoppingcompany

##### create the project db => CREATE DATABASE storeapp

##### connect to the project db => \c storeapp

##### grant privileges => GRANT ALL PRIVILEGES ON DATABASE storeapp TO shoppingcompany;

##### same for database storeapp_test
