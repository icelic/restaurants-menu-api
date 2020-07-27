import {MigrationInterface, QueryRunner} from "typeorm";

export class addLocationAddressField1594893569900 implements MigrationInterface {
    name = 'addLocationAddressField1594893569900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` ADD `locationAddress` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `locationAddress`");
    }

}
