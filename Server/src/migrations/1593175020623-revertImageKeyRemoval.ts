import {MigrationInterface, QueryRunner} from "typeorm";

export class revertImageKeyRemoval1593175020623 implements MigrationInterface {
    name = 'revertImageKeyRemoval1593175020623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` ADD `imageKey` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `imageKey`");
    }

}
