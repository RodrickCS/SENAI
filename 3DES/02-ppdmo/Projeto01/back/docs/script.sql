drop database if exists tarefas;
create database tarefas charset = UTF8 collate utf8_general_ci;
use tarefas;

create table tarefas(
  id_tarefa integer not null primary key auto_increment,
  descricao varchar(100),
  horario_tarefa time,
  horario_encerramento time default '00:00:00',
  status integer not null default '1'
);

insert into tarefas values(default,'Cozinhar', curtime(), null, default);