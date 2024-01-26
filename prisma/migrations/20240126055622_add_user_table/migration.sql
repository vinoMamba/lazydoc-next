-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT NOT NULL,
    `username` VARCHAR(64) NOT NULL,
    `email` VARCHAR(64) NOT NULL,
    `password` VARCHAR(64) NOT NULL,
    `is_deleted` TINYINT NOT NULL DEFAULT 0,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
