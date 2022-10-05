drop database if exists pizzaria;
create database pizzaria charset=UTF8 collate utf8_general_ci;
use pizzaria;

create table cliente(
    id_cliente integer not null primary key auto_increment,
    telefone varchar(12) not null,
    nome varchar(30) not null,
    logradouro varchar(50) not null,
    numero float(5,2) not null,
    complemento varchar(10) not null,
    bairro varchar(20) not null,
    referencia varchar(30) not null
);


create table pedido(
    id_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data datetime,
    valor float(5,2),
    foreign key (id_cliente) references cliente (id_cliente)
);

create table pizza(
    id_pizza integer not null primary key auto_increment,
    sabor varchar(20) not null,
    descricao varchar(40) not null,
    valor float(5,2) not null
);

create table item_pedido(
    id_pedido integer not null,
    id_pizza integer not null,
    quantidade float(5,2) not null,
    valor float(5,2) not null,
    foreign key (id_pedido) references pedido (id_pedido),
    foreign key (id_pizza) references pizza (id_pizza)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Pizzaria/back/csv/cliente.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Pizzaria/back/csv/pedido.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Pizzaria/back/csv/pizza.csv'
INTO TABLE pizza
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/Pizzaria/back/csv/item_pedido.csv'
INTO TABLE item_pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;