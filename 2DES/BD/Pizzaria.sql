-- * criando a procedure
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;

        insert into pedidos values (default,(SELECT FLOOR(RAND()*(100-5+1)+5)),curdate(),curtime(),null);
		insert into itens_pedido values (last_insert_id(),11,1,(select valor from pizzas where pizza_id = 11));
        insert into itens_pedido values (last_insert_id(),3,1,(select valor from pizzas where pizza_id = 3));
        insert into itens_pedido values (last_insert_id(),7,1,(select valor from pizzas where pizza_id = 7));

		if erro_sql = false then
			commit;
			select 'Pedido efetivado com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na inserção do pedido' as Resultado;
		end if;
end//
delimiter ;

-- * Forçando erro
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;

        insert into pedidos values (default,(SELECT FLOOR(RAND()*(100-5+1)+5)),curdate(),curtime(),null);
		insert into itens_pedido values (last_insert_id(),11,1,(select valor from pizzas where pizza_id = 11));
        insert into itens_pedido values (last_insert_id(),3,1,(select valor from pizzas where pizza_id = 3));
        -- ? ID da pizza alterado para um inexistente
        insert into itens_pedido values (last_insert_id(),4660,1,(select valor from pizzas where pizza_id = 7));

		if erro_sql = false then
			commit;
			select 'Pedido efetivado com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na inserção do pedido' as Resultado;
		end if;
end//
delimiter ;