drop database if exists restaurante;
create database restaurante charset=UTF8 collate utf8_general_ci;
use restaurante;

create table entregadores(
id_entregador integer not null primary key auto_increment,
nome varchar(120) not null,
email varchar(120) not null,
senha varchar(120) not null,
veiculo varchar(120) not null
);

create table pedidos(
  id_pedido integer not null primary key auto_increment,
  cliente varchar(120) not null,
  endereco varchar(120) not null,
  produto varchar(120) not null,
  data date not null,
  hora_pedido time,
  hora_entrega time default "00:00:00",
  hora_fim time default "00:00:00",
  entregador integer not null,
  foreign key (entregador) references entregadores(id_entregador)
);


create view vw_cozinha as 
select p.id_pedido, p.cliente, p.endereco, p.produto, p.data, p.hora_pedido, p.hora_entrega, p.hora_fim from pedidos p 
where p.hora_pedido <> '00:00:00' and hora_entrega = '00:00:00';

create view vw_caminho as
select p.id_pedido, p.cliente, p.endereco, p.produto, p.data, p.hora_pedido, p.hora_entrega, p.hora_fim from pedidos p 
where p.hora_entrega <> '00:00:00' and hora_fim = '00:00:00';

create view vw_chegou as
select p.id_pedido, p.cliente, p.endereco, p.produto, p.data, p.hora_pedido, p.hora_entrega, p.hora_fim from pedidos p 
where p.hora_fim <> '00:00:00';

LOAD DATA INFILE 'D:/SenaiDocs/01-proj/Projeto01Restaurante/docs/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/SenaiDocs/01-proj/Projeto01Restaurante/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/01-proj/Projeto01/Back/dados/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;