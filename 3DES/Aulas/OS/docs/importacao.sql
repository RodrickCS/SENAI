LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/SENAI/3DES/Aulas/OS/docs/colaboradores.csv"
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/SENAI/3DES/Aulas/OS/docs/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/SENAI/3DES/Aulas/OS/docs/oss.csv"
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

 