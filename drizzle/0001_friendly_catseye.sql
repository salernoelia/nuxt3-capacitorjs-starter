ALTER TABLE users ADD `created_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `timestamp`;