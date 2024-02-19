/*
  Warnings:

  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(64) NULL,
    MODIFY `email` VARCHAR(64) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;
