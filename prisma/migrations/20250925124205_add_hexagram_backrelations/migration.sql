-- CreateTable
CREATE TABLE "public"."Trigram" (
    "id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "nameHr" TEXT NOT NULL,
    "meaning" TEXT,

    CONSTRAINT "Trigram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Hexagram" (
    "id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameHr" TEXT NOT NULL,
    "judgmentHr" TEXT NOT NULL,
    "imageTextHr" TEXT,
    "commentHr" TEXT,
    "footnoteHr" TEXT,
    "tags" TEXT[],
    "upperTrigramId" INTEGER NOT NULL,
    "lowerTrigramId" INTEGER NOT NULL,

    CONSTRAINT "Hexagram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Line" (
    "id" SERIAL NOT NULL,
    "hexagramId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "textHr" TEXT NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContentSource" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "version" TEXT NOT NULL,
    "importedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Reading" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" TEXT NOT NULL,
    "seed" TEXT,
    "tossesJson" JSONB NOT NULL,
    "movingLines" INTEGER[],
    "baseHexagramId" INTEGER NOT NULL,
    "resultHexagramId" INTEGER NOT NULL,
    "question" TEXT,
    "notes" TEXT,

    CONSTRAINT "Reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChatSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "readingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChatMessage" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ShareLink" (
    "id" TEXT NOT NULL,
    "readingId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "ShareLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "readingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."JournalEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "body" TEXT NOT NULL,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trigram_key_key" ON "public"."Trigram"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Hexagram_key_key" ON "public"."Hexagram"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Hexagram_slug_key" ON "public"."Hexagram"("slug");

-- CreateIndex
CREATE INDEX "Hexagram_slug_idx" ON "public"."Hexagram"("slug");

-- CreateIndex
CREATE INDEX "Line_hexagramId_idx" ON "public"."Line"("hexagramId");

-- CreateIndex
CREATE UNIQUE INDEX "Line_hexagramId_number_key" ON "public"."Line"("hexagramId", "number");

-- CreateIndex
CREATE UNIQUE INDEX "ContentSource_key_key" ON "public"."ContentSource"("key");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "public"."Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "public"."Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "public"."VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "public"."VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "Reading_userId_createdAt_idx" ON "public"."Reading"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Reading_baseHexagramId_idx" ON "public"."Reading"("baseHexagramId");

-- CreateIndex
CREATE INDEX "Reading_resultHexagramId_idx" ON "public"."Reading"("resultHexagramId");

-- CreateIndex
CREATE INDEX "ChatSession_readingId_idx" ON "public"."ChatSession"("readingId");

-- CreateIndex
CREATE INDEX "ChatSession_userId_createdAt_idx" ON "public"."ChatSession"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ChatMessage_sessionId_createdAt_idx" ON "public"."ChatMessage"("sessionId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ShareLink_token_key" ON "public"."ShareLink"("token");

-- CreateIndex
CREATE INDEX "ShareLink_readingId_idx" ON "public"."ShareLink"("readingId");

-- CreateIndex
CREATE INDEX "Favorite_userId_createdAt_idx" ON "public"."Favorite"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_readingId_key" ON "public"."Favorite"("userId", "readingId");

-- CreateIndex
CREATE INDEX "JournalEntry_userId_createdAt_idx" ON "public"."JournalEntry"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."Hexagram" ADD CONSTRAINT "Hexagram_upperTrigramId_fkey" FOREIGN KEY ("upperTrigramId") REFERENCES "public"."Trigram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Hexagram" ADD CONSTRAINT "Hexagram_lowerTrigramId_fkey" FOREIGN KEY ("lowerTrigramId") REFERENCES "public"."Trigram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Line" ADD CONSTRAINT "Line_hexagramId_fkey" FOREIGN KEY ("hexagramId") REFERENCES "public"."Hexagram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reading" ADD CONSTRAINT "Reading_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reading" ADD CONSTRAINT "Reading_baseHexagramId_fkey" FOREIGN KEY ("baseHexagramId") REFERENCES "public"."Hexagram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reading" ADD CONSTRAINT "Reading_resultHexagramId_fkey" FOREIGN KEY ("resultHexagramId") REFERENCES "public"."Hexagram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatSession" ADD CONSTRAINT "ChatSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatSession" ADD CONSTRAINT "ChatSession_readingId_fkey" FOREIGN KEY ("readingId") REFERENCES "public"."Reading"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatMessage" ADD CONSTRAINT "ChatMessage_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."ChatSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShareLink" ADD CONSTRAINT "ShareLink_readingId_fkey" FOREIGN KEY ("readingId") REFERENCES "public"."Reading"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorite" ADD CONSTRAINT "Favorite_readingId_fkey" FOREIGN KEY ("readingId") REFERENCES "public"."Reading"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JournalEntry" ADD CONSTRAINT "JournalEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
