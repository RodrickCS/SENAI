drop database if exists emprestimos;
create database emprestimos charset=UTF8 collate utf8_general_ci;
use emprestimos;

create table clientes (
    cpf varchar(14) not null primary key,
    nome varchar(20) not null,
    sobrenome varchar(20) not null,
    cep varchar(10) not null,
    complemento varchar(10)
);

create table telefones (
    cpf varchar(22),
    tipo varchar(10),
    numero varchar(22),
    foreign key (cpf) references clientes (cpf) on delete cascade
);

create table emprestimos (
    id integer not null primary key auto_increment,
    cpf varchar(22),
    data date not null,
    capital float(9,2) not null,
    n_parcelas integer not null,
    taxa_juros float(5,2),
    impostos float(6,2),
    foreign key (cpf) references clientes (cpf)
);

create table parcelas (
    id integer not null primary key auto_increment,
    vencimento date not null,
    pagamento date,
    valor float(9,2) not null,
    val_recebido float(9,2),
    diferenca float(9,2)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/emprestimos/back/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/emprestimos/back/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/emprestimos/back/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


drop trigger if exists tgr_parcelas_insert;
DELIMITER $

CREATE TRIGGER tgr_parcelas_insert AFTER INSERT ON emprestimos
FOR EACH ROW BEGIN
	INSERT INTO parcelas values
        (default,"2022-09-21",curdate(),(select capital from emprestimos where cpf = "086.921.592-20" ),1000,0);
END$

DELIMITER ;