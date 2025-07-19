-- CreateTable
CREATE TABLE "FantasyCharacter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
