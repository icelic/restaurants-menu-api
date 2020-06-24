import {MigrationInterface, QueryRunner} from "typeorm";

export class addImageKey1593003207231 implements MigrationInterface {
    name = 'addImageKey1593003207231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` ADD `imageKey` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `imageKey`");
    }

}
