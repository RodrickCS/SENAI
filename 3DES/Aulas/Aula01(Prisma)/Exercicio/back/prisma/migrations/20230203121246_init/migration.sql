/*
  Warnings:

  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vendedores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `Produtos_setor_id_fkey`;

-- DropForeignKey
ALTER TABLE `vendedores` DROP FOREIGN KEY `Vendedores_idSetor_fkey`;

-- DropTable
DROP TABLE `produtos`;

-- DropTable
DROP TABLE `vendedores`;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id_vend` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `idSetor` INTEGER NOT NULL,

    PRIMARY KEY (`id_vend`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id_prod` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `setor_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_prod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendedor` ADD CONSTRAINT `Vendedor_idSetor_fkey` FOREIGN KEY (`idSetor`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_setor_id_fkey` FOREIGN KEY (`setor_id`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;