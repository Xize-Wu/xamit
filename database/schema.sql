DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS students CASCADE;

CREATE TABLE "users"(
    "id" serial PRIMARY KEY,
    "email" varchar NOT NULL UNIQUE,
    "password" varchar
);

CREATE TABLE "courses"(
    "id" serial PRIMARY KEY,
    "user" integer,
    "name" varchar,
    "description" varchar
);

CREATE TABLE "students"(
    "id" serial PRIMARY KEY,
    "course" integer,
    "name" varchar,
    "class_missed" integer DEFAULT 0,
    "participation" integer DEFAULT 0,
    "extra_assignment" boolean DEFAULT false
);

ALTER TABLE "users" ADD FOREIGN KEY ("courses") REFERENCES "users" ("id");
ALTER TABLE "courses" ADD FOREIGN KEY ("course") REFERENCES "courses" ("id");

