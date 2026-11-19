-- Add binary line encoding (bottom → top, 1 = yang) and Chinese names to canonical content.
-- Columns are added nullable, backfilled for existing rows, then made NOT NULL,
-- so this works both on an empty database and on one that is already seeded.

-- AlterTable
ALTER TABLE "public"."Trigram" ADD COLUMN "binary" CHAR(3),
ADD COLUMN "hanzi" TEXT,
ADD COLUMN "pinyin" TEXT;

-- AlterTable
ALTER TABLE "public"."Hexagram" ADD COLUMN "binary" CHAR(6),
ADD COLUMN "hanzi" TEXT,
ADD COLUMN "pinyin" TEXT;

-- Backfill trigrams
UPDATE "public"."Trigram" AS t
SET "binary" = v."binary", "hanzi" = v."hanzi", "pinyin" = v."pinyin"
FROM (VALUES
  (1, '111', '乾', 'qián'),
  (2, '000', '坤', 'kūn'),
  (3, '100', '震', 'zhèn'),
  (4, '010', '坎', 'kǎn'),
  (5, '001', '艮', 'gèn'),
  (6, '011', '巽', 'xùn'),
  (7, '101', '離', 'lí'),
  (8, '110', '兌', 'duì')
) AS v("id", "binary", "hanzi", "pinyin")
WHERE t."id" = v."id";

-- Backfill hexagram binary from its trigrams (lower first, then upper)
UPDATE "public"."Hexagram" AS h
SET "binary" = lo."binary" || up."binary"
FROM "public"."Trigram" AS lo, "public"."Trigram" AS up
WHERE lo."id" = h."lowerTrigramId" AND up."id" = h."upperTrigramId";

-- Backfill hexagram Chinese names
UPDATE "public"."Hexagram" AS h
SET "hanzi" = v."hanzi", "pinyin" = v."pinyin"
FROM (VALUES
  (1, '乾', 'qián'),
  (2, '坤', 'kūn'),
  (3, '屯', 'zhūn'),
  (4, '蒙', 'méng'),
  (5, '需', 'xū'),
  (6, '訟', 'sòng'),
  (7, '師', 'shī'),
  (8, '比', 'bǐ'),
  (9, '小畜', 'xiǎo chù'),
  (10, '履', 'lǚ'),
  (11, '泰', 'tài'),
  (12, '否', 'pǐ'),
  (13, '同人', 'tóng rén'),
  (14, '大有', 'dà yǒu'),
  (15, '謙', 'qiān'),
  (16, '豫', 'yù'),
  (17, '隨', 'suí'),
  (18, '蠱', 'gǔ'),
  (19, '臨', 'lín'),
  (20, '觀', 'guān'),
  (21, '噬嗑', 'shì kè'),
  (22, '賁', 'bì'),
  (23, '剝', 'bō'),
  (24, '復', 'fù'),
  (25, '無妄', 'wú wàng'),
  (26, '大畜', 'dà chù'),
  (27, '頤', 'yí'),
  (28, '大過', 'dà guò'),
  (29, '坎', 'kǎn'),
  (30, '離', 'lí'),
  (31, '咸', 'xián'),
  (32, '恆', 'héng'),
  (33, '遯', 'dùn'),
  (34, '大壯', 'dà zhuàng'),
  (35, '晉', 'jìn'),
  (36, '明夷', 'míng yí'),
  (37, '家人', 'jiā rén'),
  (38, '睽', 'kuí'),
  (39, '蹇', 'jiǎn'),
  (40, '解', 'xiè'),
  (41, '損', 'sǔn'),
  (42, '益', 'yì'),
  (43, '夬', 'guài'),
  (44, '姤', 'gòu'),
  (45, '萃', 'cuì'),
  (46, '升', 'shēng'),
  (47, '困', 'kùn'),
  (48, '井', 'jǐng'),
  (49, '革', 'gé'),
  (50, '鼎', 'dǐng'),
  (51, '震', 'zhèn'),
  (52, '艮', 'gèn'),
  (53, '漸', 'jiàn'),
  (54, '歸妹', 'guī mèi'),
  (55, '豐', 'fēng'),
  (56, '旅', 'lǚ'),
  (57, '巽', 'xùn'),
  (58, '兌', 'duì'),
  (59, '渙', 'huàn'),
  (60, '節', 'jié'),
  (61, '中孚', 'zhōng fú'),
  (62, '小過', 'xiǎo guò'),
  (63, '既濟', 'jì jì'),
  (64, '未濟', 'wèi jì')
) AS v("id", "hanzi", "pinyin")
WHERE h."id" = v."id";

-- Enforce NOT NULL
ALTER TABLE "public"."Trigram" ALTER COLUMN "binary" SET NOT NULL,
ALTER COLUMN "hanzi" SET NOT NULL,
ALTER COLUMN "pinyin" SET NOT NULL;

ALTER TABLE "public"."Hexagram" ALTER COLUMN "binary" SET NOT NULL,
ALTER COLUMN "hanzi" SET NOT NULL,
ALTER COLUMN "pinyin" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Trigram_binary_key" ON "public"."Trigram"("binary");

-- CreateIndex
CREATE UNIQUE INDEX "Hexagram_binary_key" ON "public"."Hexagram"("binary");

-- CreateIndex
CREATE UNIQUE INDEX "Hexagram_upperTrigramId_lowerTrigramId_key" ON "public"."Hexagram"("upperTrigramId", "lowerTrigramId");
