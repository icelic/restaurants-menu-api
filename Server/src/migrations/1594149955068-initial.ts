import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1594149955068 implements MigrationInterface {
    name = 'initial1594149955068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `user` ADD `password` tinyint NOT NULL");
    }

}
