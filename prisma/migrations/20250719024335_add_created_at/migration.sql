-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FantasyCharacter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_FantasyCharacter" ("element", "gender", "id", "name", "race", "role") SELECT "element", "gender", "id", "name", "race", "role" FROM "FantasyCharacter";
DROP TABLE "FantasyCharacter";
ALTER TABLE "new_FantasyCharacter" RENAME TO "FantasyCharacter";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
