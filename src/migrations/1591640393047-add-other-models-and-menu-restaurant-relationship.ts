import {MigrationInterface, QueryRunner} from "typeorm";

export class addOtherModelsAndMenuRestaurantRelationship1591640393047 implements MigrationInterface {
    name = 'addOtherModelsAndMenuRestaurantRelationship1591640393047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `attachment` (`id` int NOT NULL AUTO_INCREMENT, `url` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `food_type` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `menu` ADD `restaurantId` int NULL");
        await queryRunner.query("ALTER TABLE `menu` ADD CONSTRAINT `FK_085156de3c3a44eba017a6a0846` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `menu` DROP FOREIGN KEY `FK_085156de3c3a44eba017a6a0846`");
        await queryRunner.query("ALTER TABLE `menu` DROP COLUMN `restaurantId`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `food_type`");
        await queryRunner.query("DROP TABLE `attachment`");
    }

}
