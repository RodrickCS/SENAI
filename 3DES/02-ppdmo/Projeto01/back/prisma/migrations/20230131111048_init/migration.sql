/*
  Warnings:

  - Made the column `status` on table `tarefas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tarefas` MODIFY `status` INTEGER NOT NULL DEFAULT 1;
