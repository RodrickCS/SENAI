drop database if exists clientes_blob;
create database clientes_blob charset = UTF8 collate = utf8_general_ci;
use clientes_blob;

create table usuarios(
    login varchar(15) primary key not null,
    nome varchar(50) not null,
    nascimento date not null,
    telefone varchar(15) not null,
    avatar mediumblob
);

load data infile 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/Back/Atv-Blob-Aula11/docs/clientes.csv'
into table usuarios
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows
set avatar = null;

update usuarios set avatar = to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/SENAI/2DES/Back/Atv-Blob-Aula11/docs/assets/avatar01.png")) where login = 'adrianalemos';
update usuarios set avatar = to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/SENAI/2DES/Back/Atv-Blob-Aula11/docs/assets/avatar02.png")) where login = 'mauricioduarte';
update usuarios set avatar = to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/SENAI/2DES/Back/Atv-Blob-Aula11/docs/assets/avatar03.png")) where login = 'anamello';
