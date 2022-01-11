## (1) Included scripts:

-   #### Developing: `npm run start`
-   #### Building: `npm run build`
-   #### Linting: `npm run lint`
-   #### Formatting: `npm run prettier`
-   #### Production: `npm run prod`
-   #### testing: `npm run test`

## (2) how i setup and connect to the database:

-   connect as super user => `psql -U postgres`

-   create the project user => `CREATE USER shoppingcompany WITH PASSWORD'48651532';`

-   make user can create a db => `ALTER USER shoppingcompany CREATEDB;`

-   create the project db => `CREATE DATABASE storeapp/storeapp_test`

-   connect to the project db => `\c storeapp/storeapp_test`

-   grant privileges => `GRANT ALL PRIVILEGES ON DATABASE storeapp/storeapp_test TO shoppingcompany;`

## (3) .env variables:

-   PORT=3000
-   ENV=dev

-   DB_NAME=`storeapp`
-   DB_NAME_TEST=`storeapp_test`
-   DB_PASS=`48651532`
-   DB_USER=`shoppingcompany`
-   DB_OWNE=`shoppingcompany`
-   DB_HOST=`localhost`
-   DB_PORT=`5432`
-   PEPPER=`bcrypt-pepper-secure`
-   SALT_ROUNDS=`10`
-   TOKEN_SECRET = `atokensecretforsecure`

## (4) Examples for Json data for endpoint:

-   Example for user's json data in the body:{"firstName":"mohamed", "lastName":"hossam", "password":"123456"}

-   Example for product's json data in the body: {"name":"chocolate", "price":"20"}

-   Example for order's json data in the body: {"user_id":"1", "status":"active"}

-   Example for AddProduct's json data in the body: {"order_id":"1", "product_id":"1",quantity:"5"}
