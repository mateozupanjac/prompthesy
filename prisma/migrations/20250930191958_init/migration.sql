/*
  Warnings:

  - You are about to drop the column `commentHr` on the `Hexagram` table. All the data in the column will be lost.
  - You are about to drop the column `footnoteHr` on the `Hexagram` table. All the data in the column will be lost.
  - You are about to drop the column `imageTextHr` on the `Hexagram` table. All the data in the column will be lost.
  - You are about to drop the column `judgmentHr` on the `Hexagram` table. All the data in the column will be lost.
  - You are about to drop the column `nameHr` on the `Hexagram` table. All the data in the column will be lost.
  - You are about to drop the column `textHr` on the `Line` table. All the data in the column will be lost.
  - You are about to drop the column `nameHr` on the `Trigram` table. All the data in the column will be lost.
  - Added the required column `judgment` to the `Hexagram` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Hexagram` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Line` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Trigram` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Hexagram" DROP COLUMN "commentHr",
DROP COLUMN "footnoteHr",
DROP COLUMN "imageTextHr",
DROP COLUMN "judgmentHr",
DROP COLUMN "nameHr",
ADD COLUMN     "comment" TEXT,
ADD COLUMN     "footnote" TEXT,
ADD COLUMN     "imageText" TEXT,
ADD COLUMN     "judgment" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Line" DROP COLUMN "textHr",
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Trigram" DROP COLUMN "nameHr",
ADD COLUMN     "name" TEXT NOT NULL;
