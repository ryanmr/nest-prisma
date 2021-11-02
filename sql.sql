DROP TABLE IF EXISTS "public"."providers";

CREATE TABLE "public"."providers" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "display_name" text,
    "public_id" varchar(20),
    PRIMARY KEY ("id")
);

