# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

-   Index `GET:/api/v1/products`
-   Show `GET:/api/v1/products/:product_id`
-   Create [token required] `POST:/api/v1/products`

#### Users

-   Index [token required] `GET:/api/v1/users`
-   Show [token required] `GET:/api/v1/users/:user_id`
-   Create N[token required] `POST:/api/v1/users`

###### added

-   Signup `POST:/api/v1/users/signup` (added to create token first time)

#### Orders

-   Current Order by user (args: user id)[token required]
    `GET:/api/v1/orders/current/:user_id`

###### added

-   Create `POST:/api/v1/orders/products` (added to add orders)
-   AddProduct `POST:/api/v1/orders/products` (added to add product to an order by order_id)

## DataBase Schema

#### products Table:

-   id SERIAL PRIMARY KEY
-   name VARCHAR
-   price VARCHAR

#### users Table:

-   id `SERIAL PRIMARY KEY`
-   firstName `VARCHAR`
-   lastName `VARCHAR`
-   password `VARCHAR`

#### orders Table:

-   id `SERIAL PRIMARY KEY`
-   user_id `INTEGER REFERENCES users(id)`
-   status `VARCHAR`

#### order_products Table:

-   id `SERIAL PRIMARY KEY`
-   order_id `INTEGER REFERENCES orders(id)`
-   product_id `INTEGER REFERENCES products(id)`
-   quantity `INTEGER`
