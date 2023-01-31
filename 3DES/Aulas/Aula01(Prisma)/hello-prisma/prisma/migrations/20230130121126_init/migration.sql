-- CreateTable
CREATE TABLE `func` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
    `contratacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTEmysqkR SET utf8mb4 COLLATE utf8mb4_unicode_ci;
