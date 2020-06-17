import {MigrationInterface, QueryRunner} from "typeorm";

export class fixM2mTableName1591642139334 implements MigrationInterface {
    name = 'fixM2mTableName1591642139334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant_has_food_type` (`restaurantId` int NOT NULL, `foodTypeId` int NOT NULL, INDEX `IDX_57f831a8187b5feb78fa0bfc6b` (`restaurantId`), INDEX `IDX_e8c73de6c62effe12856e4834a` (`foodTypeId`), PRIMARY KEY (`restaurantId`, `foodTypeId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` ADD CONSTRAINT `FK_57f831a8187b5feb78fa0bfc6b8` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` ADD CONSTRAINT `FK_e8c73de6c62effe12856e4834aa` FOREIGN KEY (`foodTypeId`) REFERENCES `food_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` DROP FOREIGN KEY `FK_e8c73de6c62effe12856e4834aa`");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` DROP FOREIGN KEY `FK_57f831a8187b5feb78fa0bfc6b8`");
        await queryRunner.query("DROP INDEX `IDX_e8c73de6c62effe12856e4834a` ON `restaurant_has_food_type`");
        await queryRunner.query("DROP INDEX `IDX_57f831a8187b5feb78fa0bfc6b` ON `restaurant_has_food_type`");
        await queryRunner.query("DROP TABLE `restaurant_has_food_type`");
    }

}
