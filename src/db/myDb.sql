/******************************************************************* 
   This is the category we are setting to the item:

   1. Signature Cakes
   2. Gluten Free
   3. Vegan 
   4. etc
**********************************************************************/
CREATE TABLE item_category (
  id                 SERIAL        NOT NULL PRIMARY KEY
, category_name      varchar(255)  NOT NULL
);

/******************************************************************* 
   Thinking the sizes of cakes can have many modifiers? 
**********************************************************************/

CREATE TABLE item_entry (
  id            Serial             NOT NULL PRIMARY KEY 
, category_id   INT                NOT NULL REFERENCES item_category(id)
, price         DECIMAL            NOT NULL
, product_size  varchar(4000)      
);

CREATE TABLE item (
  id                 SERIAL         NOT NULL PRIMARY KEY
, item_category      INT            NOT NULL REFERENCES item_category(id)
, item_name          varchar(4000)  NOT NULL
, item_description   varchar(4000)  
, image_dest         varchar(4000)  NOT NULL 
);

/******************************************************************* 
  Item  Table
**********************************************************************/
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Chocolate Peanut Butter', 'Rich chocolate cake layers with a whipped peanut butter frosting. Topped with a chocolate drip and peanut butter cups.', 'Menu-Pictures/1.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and mini oreos.', 'Menu-Pictures/2.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Birthday Funfetti', 'Funfetti cake layers with a rainbow chip filling and vanilla swiss meringue buttercream. Topped with your choice of a white chocolate or chocolate drip.', 'Menu-Pictures/3.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Oreo Funfetti', 'Oreo studded funfetti cake layers with rainbow chip filling and an Oreo swiss meringue buttercream.', 'Menu-Pictures/5.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Cinamon Bun', 'Cinnamon swirl vanilla cake layers with cream cheese frosting and a brown sugar cinnamon caramel sauce.', 'Menu-Pictures/6.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Strawberries and Cream', 'Vanilla cake layers with a strawberry whipped cream filling and a light layer of vanilla swiss meringue buttercream', 'Menu-Pictures/7.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'S''mores', 'Graham cracker cake layers, toasted marshmallow filling, chocolate ganache, and a chocolate buttercream', 'Menu-Pictures/8.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Peanut Butter S''mores", "Graham cracker layers, toasted marshmallow filling, chocolate ganache, and a peanut butter buttercream', 'Menu-Pictures/9.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Strawberry Vanilla', 'Vanilla cake layers with a strawberry buttercream', 'Menu-Pictures/10.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Mini Egg', 'Vanilla bean cake layers studded with mini eggs with a chocolate buttercream frosting.', 'Menu-Pictures/11.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Chocolate Chip Cookie Cake', 'Yellow chocolate chip cake layers with a cookie dough filling and brown sugar buttercream topped with chocolate chip cookies.','Menu-Pictures/12.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (1, 'Lemon Blueberry', 'Lemon blueberry cake layers with a lemon cream cheese frosting.', 'Menu-Pictures/13.jpg');

INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (2, '"Loaded" Chocolate Cake', 'Rich chocolate cake layers with a chocolate ganache filling and chocolate buttercream. Topped with chocolate drip and various kinds of chocolates and treats.', 'Menu-Pictures/14.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (2, '"Loaded" Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and various cookies and cream treats.', 'Menu-Pictures/15.jpg');


INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Chocolate Peanut Butter', 'Rich chocolate cake layers with a whipped peanut butter frosting. Topped with a chocolate drip and peanut butter cups.', 'Menu-Pictures/1.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and mini oreos.', 'Menu-Pictures/2.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Birthday Funfetti', 'Funfetti cake layers with a rainbow chip filling and vanilla swiss meringue buttercream. Topped with your choice of a white chocolate or chocolate drip.', 'Menu-Pictures/3.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Oreo Funfetti', 'Oreo studded funfetti cake layers with rainbow chip filling and an Oreo swiss meringue buttercream.', 'Menu-Pictures/5.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Cinamon Bun', 'Cinnamon swirl vanilla cake layers with cream cheese frosting and a brown sugar cinnamon caramel sauce.', 'Menu-Pictures/6.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Strawberries and Cream', 'Vanilla cake layers with a strawberry whipped cream filling and a light layer of vanilla swiss meringue buttercream', 'Menu-Pictures/7.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'S''mores', 'Graham cracker cake layers, toasted marshmallow filling, chocolate ganache, and a chocolate buttercream', 'Menu-Pictures/8.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Peanut Butter S''mores", "Graham cracker layers, toasted marshmallow filling, chocolate ganache, and a peanut butter buttercream', 'Menu-Pictures/9.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Strawberry Vanilla', 'Vanilla cake layers with a strawberry buttercream', 'Menu-Pictures/10.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Mini Egg', 'Vanilla bean cake layers studded with mini eggs with a chocolate buttercream frosting.', 'Menu-Pictures/11.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Chocolate Chip Cookie Cake', 'Yellow chocolate chip cake layers with a cookie dough filling and brown sugar buttercream topped with chocolate chip cookies.','Menu-Pictures/12.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, 'Lemon Blueberry', 'Lemon blueberry cake layers with a lemon cream cheese frosting.', 'Menu-Pictures/13.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, '"Loaded" Chocolate Cake', 'Rich chocolate cake layers with a chocolate ganache filling and chocolate buttercream. Topped with chocolate drip and various kinds of chocolates and treats.', 'Menu-Pictures/14.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (3, '"Loaded" Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and various cookies and cream treats.', 'Menu-Pictures/15.jpg');


INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Chocolate Peanut Butter', 'Rich chocolate cake layers with a whipped peanut butter frosting. Topped with a chocolate drip and peanut butter cups.', 'Menu-Pictures/1.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and mini oreos.', 'Menu-Pictures/2.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Birthday Funfetti', 'Funfetti cake layers with a rainbow chip filling and vanilla swiss meringue buttercream. Topped with your choice of a white chocolate or chocolate drip.', 'Menu-Pictures/3.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Oreo Funfetti', 'Oreo studded funfetti cake layers with rainbow chip filling and an Oreo swiss meringue buttercream.', 'Menu-Pictures/5.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Cinamon Bun', 'Cinnamon swirl vanilla cake layers with cream cheese frosting and a brown sugar cinnamon caramel sauce.', 'Menu-Pictures/6.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Strawberries and Cream', 'Vanilla cake layers with a strawberry whipped cream filling and a light layer of vanilla swiss meringue buttercream', 'Menu-Pictures/7.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'S''mores', 'Graham cracker cake layers, toasted marshmallow filling, chocolate ganache, and a chocolate buttercream', 'Menu-Pictures/8.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Peanut Butter S''mores", "Graham cracker layers, toasted marshmallow filling, chocolate ganache, and a peanut butter buttercream', 'Menu-Pictures/9.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Strawberry Vanilla', 'Vanilla cake layers with a strawberry buttercream', 'Menu-Pictures/10.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Mini Egg', 'Vanilla bean cake layers studded with mini eggs with a chocolate buttercream frosting.', 'Menu-Pictures/11.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Chocolate Chip Cookie Cake', 'Yellow chocolate chip cake layers with a cookie dough filling and brown sugar buttercream topped with chocolate chip cookies.','Menu-Pictures/12.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, 'Lemon Blueberry', 'Lemon blueberry cake layers with a lemon cream cheese frosting.', 'Menu-Pictures/13.jpg');

INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, '"Loaded" Chocolate Cake', 'Rich chocolate cake layers with a chocolate ganache filling and chocolate buttercream. Topped with chocolate drip and various kinds of chocolates and treats.', 'Menu-Pictures/14.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (4, '"Loaded" Cookies and Cream', 'Rich chocolate cake layers, oreo filling, and a swiss meringue oreo frosting. Topped with a chocolate drip and various cookies and cream treats.', 'Menu-Pictures/15.jpg');


INSERT INTO item (item_category, item_name, image_dest) VALUES (5, '2 Tier', 'Menu-Pictures/16.jpg'); //Weird

INSERT INTO item (item_category, item_name, image_dest) VALUES (6, 'Cupcakes', 'Menu-Pictures/18.jpg');
INSERT INTO item (item_category, item_name, image_dest) VALUES (6, 'Gluten Free Cupcakes', 'Menu-Pictures/18.jpg');
INSERT INTO item (item_category, item_name, image_dest) VALUES (6, 'Vegan Cupcakes', 'Menu-Pictures/18.jpg');

INSERT INTO item (item_category, item_name, image_dest) VALUES (7, 'Coconut Macaroons', 'Menu-Pictures/19.jpg');
INSERT INTO item (item_category, item_name, image_dest) VALUES (7, 'Macaroons', 'Menu-Pictures/20.jpg');

INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (8, 'One Layer Cookie Cake', '8" single layer cookie cake. Choose your cookie type and favourite frosting.', 'Menu-Pictures/21.jpg');
INSERT INTO item (item_category, item_name, item_description, image_dest) VALUES (8, 'Three Layer Cookie Cake', 'Pick your cookie choice for three 6" cookie layers. Filled with your favourite buttercream.', 'Menu-Pictures/21.jpg');

/******************************************************************* 
  SItem Entry Table
**********************************************************************/
INSERT INTO item_entry (category_id, price, product_size) VALUES (1, 45, '4"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (1, 55, '6"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (1, 65, '6" tall');
INSERT INTO item_entry (category_id, price, product_size) VALUES (1, 75, '8"');

INSERT INTO item_entry (category_id, price, product_size) VALUES (2, 50, '4"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (2, 60, '6"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (2, 70, '6" tall');
INSERT INTO item_entry (category_id, price, product_size) VALUES (2, 80, '8"');

INSERT INTO item_entry (category_id, price, product_size) VALUES (3, 55, '4"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (3, 65, '6"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (3, 75, '6" tall');
INSERT INTO item_entry (category_id, price, product_size) VALUES (3, 85, '8"');

INSERT INTO item_entry (category_id, price, product_size) VALUES (4, 55, '4"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (4, 65, '6"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (4, 75, '6" tall');
INSERT INTO item_entry (category_id, price, product_size) VALUES (4, 85, '8"');

INSERT INTO item_entry (category_id, price, product_size) VALUES (5, 130, '6" and 8"');
INSERT INTO item_entry (category_id, price, product_size) VALUES (5, 185, '8" and 10"');

INSERT INTO item_entry (category_id, price) VALUES (6, 3);
INSERT INTO item_entry (category_id, price) VALUES (6, 3.50);

INSERT INTO item_entry (category_id, price) VALUES (7, 1.50);
INSERT INTO item_entry (category_id, price) VALUES(7, 2.50);

INSERT INTO item_entry (category_id, price, product_size) VALUES (8, 30, 'One 8" Layer');
INSERT INTO item_entry (category_id, price, product_size) VALUES (8, 40, 'Three 6" Layers');

/******************************************************************* 
  Item Category Table
**********************************************************************/
INSERT INTO item_category (category_name) Values ('Signature Cakes');
INSERT INTO item_category (category_name) Values ('"Loaded" Signature Cakes');
INSERT INTO item_category (category_name) Values ('Gluten Free');
INSERT INTO item_category (category_name) Values ('Vegan Free');
INSERT INTO item_category (category_name) Values ('Tiered Cakes');
INSERT INTO item_category (category_name) Values ('Cupcakes');
INSERT INTO item_category (category_name) Values ('Cookies');


INSERT INTO item_category (category_name) Values ('Cookie Cakes');





heroku pg:psql postgresql-closed-41554 --app cookies-and-cake



/********************************************************************
Simple queries
------------------------------------
SELECT * FROM food_category;
SELECT * FROM recipe;
SELECT * FROM Ingredients;
SELECT * FROM recipe_instructions;
********************************************************************/

/******************************************************************* 
Drop tables using this command  Use only in case of emergency!
--------------------------------------------------------------
DROP TABLE if exists food_category cascade;
DROP TABLE if exists recipe cascade;
DROP TABLE if exists Ingredients cascade;
DROP TABLE if exists recipe_instructions cascade;
DELETE FROM recipe WHERE recipe.id = 26;
DELETE FROM recipe WHERE recipe.id = 27;
DELETE FROM recipe WHERE recipe.id = 14;
DELETE FROM recipe WHERE recipe.id = 15;
DELETE FROM recipe WHERE recipe.id = 16;
DELETE FROM recipe WHERE recipe.id = 17;
DELETE FROM recipe WHERE recipe.id = 18;
DELETE FROM ingredients WHERE recipe_id = 26;
DELETE FROM ingredients WHERE recipe_id = 27;
DELETE FROM ingredients WHERE recipe_id = 14;
DELETE FROM ingredients WHERE recipe_id = 15;
DELETE FROM ingredients WHERE recipe_id = 16;
DELETE FROM ingredients WHERE recipe_id = 17;
DELETE FROM ingredients WHERE recipe_id = 18;
DELETE FROM recipe_instructions WHERE recipe_id = 26;
DELETE FROM recipe_instructions WHERE recipe_id = 27;
DELETE FROM recipe_instructions WHERE recipe_id = 14;
DELETE FROM recipe_instructions WHERE recipe_id = 15;
DELETE FROM recipe_instructions WHERE recipe_id = 16;
DELETE FROM recipe_instructions WHERE recipe_id = 17;
DELETE FROM recipe_instructions WHERE recipe_id = 18;
**********************************************************************/


/**********************************************************************
  Update syntax:


UPDATE recipe
	SET image_dest = 'uploads/wraps.jpg'
	WHERE id = 11;
  **********************************************************************/