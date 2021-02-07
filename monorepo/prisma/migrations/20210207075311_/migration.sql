/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `firstname` on table `User` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `User` required. The migration will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- DropTable
DROP TABLE "Post";
