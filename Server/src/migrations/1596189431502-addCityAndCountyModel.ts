import {MigrationInterface, QueryRunner} from "typeorm";

export class addCityAndCountyModel1596189431502 implements MigrationInterface {
    name = 'addCityAndCountyModel1596189431502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `county` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `city` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, `countyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `cityId` int NULL");
        await queryRunner.query("ALTER TABLE `city` ADD CONSTRAINT `FK_473f9ba4b3863bf5356a05f0930` FOREIGN KEY (`countyId`) REFERENCES `county`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `restaurant` ADD CONSTRAINT `FK_2dee218ec5352ede6b4d56dcc79` FOREIGN KEY (`cityId`) REFERENCES `city`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP FOREIGN KEY `FK_2dee218ec5352ede6b4d56dcc79`");
        await queryRunner.query("ALTER TABLE `city` DROP FOREIGN KEY `FK_473f9ba4b3863bf5356a05f0930`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `cityId`");
        await queryRunner.query("DROP TABLE `city`");
        await queryRunner.query("DROP TABLE `county`");
    }

}
