import {MigrationInterface, QueryRunner} from "typeorm";

export class addM2mRestaurantFoodTypeRelationship1591641929953 implements MigrationInterface {
    name = 'addM2mRestaurantFoodTypeRelationship1591641929953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant_food_types_food_type` (`restaurantId` int NOT NULL, `foodTypeId` int NOT NULL, INDEX `IDX_d24d221754efcbf2890a8748d6` (`restaurantId`), INDEX `IDX_ed25b794da7c7131f8c7d3066e` (`foodTypeId`), PRIMARY KEY (`restaurantId`, `foodTypeId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant_food_types_food_type` ADD CONSTRAINT `FK_d24d221754efcbf2890a8748d63` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `restaurant_food_types_food_type` ADD CONSTRAINT `FK_ed25b794da7c7131f8c7d3066ea` FOREIGN KEY (`foodTypeId`) REFERENCES `food_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant_food_types_food_type` DROP FOREIGN KEY `FK_ed25b794da7c7131f8c7d3066ea`");
        await queryRunner.query("ALTER TABLE `restaurant_food_types_food_type` DROP FOREIGN KEY `FK_d24d221754efcbf2890a8748d63`");
        await queryRunner.query("DROP INDEX `IDX_ed25b794da7c7131f8c7d3066e` ON `restaurant_food_types_food_type`");
        await queryRunner.query("DROP INDEX `IDX_d24d221754efcbf2890a8748d6` ON `restaurant_food_types_food_type`");
        await queryRunner.query("DROP TABLE `restaurant_food_types_food_type`");
    }

}
