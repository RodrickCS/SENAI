select * from clientes where nome = "Cesar Augusto Pascali Rago";

id:12

select * from telefones where cliente_id = 12;

Telefones:4

delete from telefones where cliente_id = 12;

insert into telefones values (12,"19991865503");

create view vw_clientes as select c.nome, t.telefone from clientes inner join telefones t on c.cliente_id =
t.cliente_id;

insert into clientes values (default,"Joaquim Inacio Silva","Rua Dois de Setembro",2,"Fundos","Mario Finotelli","De Frente ao Parque");

select * from clientes where nome = "Joaquim Inacio Silva"; 
id:107

insert into pedidos value (default,107,""2022-09-21,""10:00",45);

insert into itens_pedido value (27,5,1,32.29);


insert into itens_pedido value (27,6,1,32.13);
