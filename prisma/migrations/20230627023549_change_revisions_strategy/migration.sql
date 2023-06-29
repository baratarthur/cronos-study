/*
  Warnings:

  - You are about to drop the column `revisions` on the `topicos` table. All the data in the column will be lost.
  - Added the required column `firstRevision` to the `topicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastRevision` to the `topicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topicos" DROP COLUMN "revisions",
ADD COLUMN     "firstRevision" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "lastRevision" TIMESTAMP(3) NOT NULL;
