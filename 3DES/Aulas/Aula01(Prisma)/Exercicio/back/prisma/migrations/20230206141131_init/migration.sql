-- CreateTable
CREATE TABLE `Setor` (
    `id_setor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `comissao` DOUBLE NOT NULL,

    PRIMARY KEY (`id_setor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `Vendas` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `idVendedor` INTEGER NOT NULL,

    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalhe` (
    `id_detalhe` INTEGER NOT NULL AUTO_INCREMENT,
    `idProd` INTEGER NOT NULL,
    `idVenda` INTEGER NOT NULL,
    `quantidade` DOUBLE NOT NULL,

    PRIMARY KEY (`id_detalhe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendedor` ADD CONSTRAINT `Vendedor_idSetor_fkey` FOREIGN KEY (`idSetor`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_setor_id_fkey` FOREIGN KEY (`setor_id`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_idVendedor_fkey` FOREIGN KEY (`idVendedor`) REFERENCES `Vendedor`(`id_vend`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_idProd_fkey` FOREIGN KEY (`idProd`) REFERENCES `Produto`(`id_prod`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_idVenda_fkey` FOREIGN KEY (`idVenda`) REFERENCES `Vendas`(`id_venda`) ON DELETE RESTRICT ON UPDATE CASCADE;
