﻿<div id="top"></div>

  <h3>Martha's Accesories Backend/Api</h3>

Daniel Rodriguez
[![LinkedIn][linkedin-shield]][linkedin-url]

  <p>
    Martha's Accesories Backend/API
    <br />
    <a href="https://drs-marthas-accesories.herokuapp.com/">https://drs-marthas-accesories.herokuapp.com/</a>
    <br />
    <a href="https://github.com/Danrodsf/Proyecto-Laravel/issues">Reportar un Error</a>
  </p>
</div>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/97a7a816d9072207c165?action=collection%2Fimport)

## About the DataBase.

The Database is made from 12 tables.

1. `Users` - All of the User's Info is stored here.
2. `Orders` - Tied to User by the "userId" foreignKey. Saves all the orders a user makes.
3. `OrderDetails` - Tied to Orders and Products by "orderId" and "productId" foreignKeys. Saves all the products that belongs to an Order.
4. `Products` - Inventory of all the products of the ecommerce.
5. `Wishlist` - Tied to Users and Products by "userId" and "productId" foreignKeys. Saves a product to the wishlist of the user.
6. `Messages` - Tied to User by the "userId" foreignKey. Saves all messages between users and admins.
7. `Admin` - Saves all information related to ecommerce administrators.
8. `CustomOrders` - Tied to Orders and CurstomProducts by "orderId" and "productId" foreignKeys. Saves all the customProducts that belongs to an Order.
9. `CustomProducts` - Tied to Chains, Letters and Balls by "chainId", "letterId" and "ballId" foreignKeys. Saves all products customized by the user.
10. `Chains` - Inventory of all the chains that can be customized into a product.
11. `Letters` - Inventory of all the letters that can be customized into a product.
12. `Balls` - Inventory of all the decoration balls that can be customized into a product.

### Entity Relation Diagram

<img src=img/EntityRelationDiagram.png>

```
Features:

● User register, login and logout.
● Users authentication by token (JWT).
● Users can view and edit their own profile.
● Users must be able to view and send messages to an Admin.
● Users can view, edit and delete products from their own wishlist.
● Users can view all products.
● Users can create orders with chosen products.
● Users can customize specific products choosing the chain, letters and decoration balls of the product.
● Admins can view, create, update and delete users (as long as there doesn't exist any relationships with other tables).
● Admins can view, create, update and delete products (as long as there doesn't exist any relationships with other tables).
● Admins can view, create, update and delete orders (as long as there doesn't exist any relationships with other tables).
● Admins can view, create, update(reply) and delete messages that has been sent by users.

```

### Tecnologies.

The technologies used for this project were the following:

- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)

### How to install

1. It is required to have `Node.js` installed on the system in order to install the dependencies.

2. To install locally you must execute the command `npm install`.

3. To use in your own database, you must change the database conection info in the /config/config.json file and add the conection to your own database.

4. Then the migrations of the tables must be carried out with the command `sequelize db:migrate`.

5. As a last OPTIONAL step you can use the `sequelize db:seed` command to generate sample data in the database tables.

<p align="right">(<a href="#top">Go to Top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/danielrodriguezserafin/

### Endpoints

#### Endpoints without token protection.

```
Post -- user/signUp -- User Register.
Post -- user/signIn -- User Login.
Post -- admin/signIn -- admin Login.
```

#### Endpoints with Token requirements.

##### Users

```
Get -- user/ -- Show all Users.
Post -- user/getById -- Show user's Info.
Put -- user/update -- Update User's Info.
Delete -- user/delete -- Delete User.
```

##### Admins

```
Post -- admin/signUp -- admin Register. (Only an admin can register another admin)
Put -- admin/update -- Update admin's Info.
Delete -- admin/delete -- Delete admin.
```

##### Messages

```
Get -- message/ -- Show all messages of all users.
Post -- message/getByUser -- Show all messages of a User.
Post -- message/create -- Add a message to DB.
Put -- message/update -- Update message.
Delete -- message/delete -- Delete message.
```

##### Orders

```
Get -- order/ -- Show all orders of all users.
Post -- order/getById -- Show an order searched by its id.
Post -- order/getByUser -- Show all orders of a User.
Post -- order/create -- Add an order.
Put -- order/update -- Update order.
Delete -- order/delete -- Delete order.
```

##### OrderDetails

```
Get -- orderDetail/ -- Show all orderDetails of all orders.
Post -- orderDetail/getByOrderId -- Show all orderDetails of an Order.
Post -- orderDetail/create -- Adds a orderDetail to DB.
Put -- orderDetail/update -- Update orderDetail.
Delete -- orderDetail/delete -- Delete orderDetail.
```

##### Products

```
Get -- product/ -- Show all products.
Post -- product/getById -- Show product by its id.
Post -- product/getByNumber -- Show products with pagination.
Post -- product/getByName -- Show product by its name.
Post -- product/random -- Show 10 random products.
Post -- product/create -- Adds a product to DB.
Put -- product/update -- Updates product.
Delete -- product/delete -- Delete product.
```

##### Wishlist

```
Get -- wishlist/ -- Show all wishlists of all users.
Post -- wishlist/getByUser -- Show all products from a wishlists of an User.
Post -- wishlist/create -- Add product to a wishlist.
Put -- wishlist/update -- Update product from wishlist.
Delete -- wishlist/delete -- Delete product from wishlist.
```

<p align="right">(<a href="#top">Go to Top</a>)</p>
