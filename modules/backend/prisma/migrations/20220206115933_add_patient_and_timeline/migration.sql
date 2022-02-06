-- CreateTable
CREATE TABLE "Patience" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "occupation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Patience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "detail" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "locationType" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "patienceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_patienceId_fkey" FOREIGN KEY ("patienceId") REFERENCES "Patience"("id") ON DELETE CASCADE ON UPDATE CASCADE;
