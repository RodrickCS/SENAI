select * from clientes where nome like "Cesar%";
-- cliente_id = 12;
select * from pedidos where cliente_id = 12;
-- o último pedido foi:
select * from itens_pedido where pedido_id = 18;
select * from itens_pedido where pedido_id = 22;

-- pedido_id = 18 data = 2022-09-14 {
select * from pizzas where pizza_id = 22;
-- pizza_id = 22 (Margerita) qtd: 5
-- }

-- pedido_id = 22 data = 2022-09-15 {
select * from pizzas where pizza_id = 5;
-- pizza_id = 5 (Atum) qtd: 4
select * from pizzas where pizza_id = 7;
-- pizza_id = 7 (Bauru) qtd: 5
select * from pizzas where pizza_id = 8;
-- pizza_id = 8 (Caipira) qtd: 1
select * from pizzas where pizza_id = 25;
-- pizza_id = 25 (Moda do Clientes) qtd: 1
-- }

-- ele pediu 16 pizzas

-- o preço foi:
-- pedido_id 18 preço = 171.85
-- pedido_id 22 preço = 354.71 

select * from itens_pedido order by pedido_id;

-- vw_itens
create view vw_itens as
select i.pedido_id, p.pizza_id, p.nome, i.quantidade, i.valor from itens_pedido i 
inner join pizzas p 
on p.pizza_id = i.pizza_id
order by pedido_id;

-- vw_pedidos
-- pe = pedidos
-- p = pizzas
-- c = clientes
-- ip = itens_pedido
create view vw_pedidos as
select pe.pedido_id, c.cliente_id, pe.data, pe.hora, p.pizza_id, p.nome, p.valor as pi_valor, ip.valor as ip_valor, pe.valor as total
from pedidos pe 
inner join pizzas p
on p.pizza_id = p.pizza_id
inner join itens_pedido ip
on pe.pedido_id = ip.pedido_id
inner join clientes c 
on c.cliente_id = pe.cliente_id
order by pedido_id;
-- limit 200;

-- Acrescente na view anterior o nome do cliente
-- e mostre na ordem de pedido decrescente.
create view vw_pedidos as
select pe.pedido_id, c.cliente_id, c.nome as nome_cli, pe.data, pe.hora, p.pizza_id, p.nome as pi_nome, p.valor as pi_valor, ip.valor as subtotal, pe.valor as total
from pedidos pe 
inner join pizzas p
on p.pizza_id = p.pizza_id
inner join itens_pedido ip
on pe.pedido_id = ip.pedido_id
inner join clientes c 
on c.cliente_id = pe.cliente_id
order by pedido_id desc;
-- limit 200;
