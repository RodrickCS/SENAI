/*
  Warnings:

  - You are about to alter the column `status` on the `tarefas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `tarefas` MODIFY `status` DOUBLE NULL DEFAULT 1;
