import {MigrationInterface, QueryRunner} from "typeorm";

export class updateRestaurantTable1593610285311 implements MigrationInterface {
    name = 'updateRestaurantTable1593610285311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` ADD `location` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `location`");
    }

}
