import {MigrationInterface, QueryRunner} from "typeorm";

export class startdatabase1633057508163 implements MigrationInterface {
    name = 'startdatabase1633057508163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "age" real NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
