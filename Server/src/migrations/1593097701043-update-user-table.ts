import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUserTable1593097701043 implements MigrationInterface {
    name = 'updateUserTable1593097701043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `imageKey`");
        await queryRunner.query("ALTER TABLE `user` ADD `photoUrl` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `isStaff` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `isStaff`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `photoUrl`");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `imageKey` varchar(255) NOT NULL");
    }

}
