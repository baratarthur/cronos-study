-- DropForeignKey
ALTER TABLE "topicos" DROP CONSTRAINT "topicos_category_id_fkey";

-- AddForeignKey
ALTER TABLE "topicos" ADD CONSTRAINT "topicos_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
