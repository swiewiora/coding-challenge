-- SQLite v3.20.1

BEGIN TRANSACTION;

-- create tables products and categories with relation M:M - intermediate array products_categories. 

create table products(id integer primary key autoincrement, name varchar, price decimal, created date default (date('now')) );
create table categories(id integer primary key autoincrement, name varchar, private boolean);
create table products_categories(id integer primary key, id_product integer, id_category integer);

-- populate arrays

insert into products(name, price) values('a', 0.01);
insert into products(name, price) values('b', 9.99);
insert into categories(name, private) values('first', 0);
insert into categories(name, private) values('second', 0);
insert into categories(name, private) values('3', 0);
insert into categories(name, private) values('4', 0);
insert into categories(name, private) values('5', 0);
insert into categories(name, private) values('hidden', 1);
insert into products_categories values(1, 1, 1);
insert into products_categories values(2, 1, 2);
insert into products_categories values(3, 1, 3);
insert into products_categories values(4, 1, 4);
insert into products_categories values(5, 1, 5);
insert into products_categories values(6, 1, 6);
insert into products_categories values(7, 2, 2);

COMMIT;

-- select all columns from products, join arrays by ids, check condition if category is private, group by id_product in order to count the products with distinct id_categories and check if the count is bigger than 5

select  p.*
from products_categories pc
join products p on p.id = pc.id_product
join categories c on pc.id_category = c.id
where c.private = 0
group by id_product
having count(distinct pc.id_category) > 5;