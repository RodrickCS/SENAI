-- AlterTable
ALTER TABLE `tarefas` MODIFY `horario_tarefa` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `horario_encerramento` DATETIME(3) NULL,
    MODIFY `status` INTEGER NULL DEFAULT 1;
