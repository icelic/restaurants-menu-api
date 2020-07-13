import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1594545836463 implements MigrationInterface {
    name = 'initialMigration1594545836463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `food_type` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `restaurant` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, `location` varchar(255) NOT NULL, `imageKey` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `menu` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, `restaurantId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `attachment` (`id` int NOT NULL AUTO_INCREMENT, `url` varchar(255) NOT NULL, `menuId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `photoUrl` varchar(255) NOT NULL, `isStaff` tinyint NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `restaurant_has_food_type` (`restaurantId` int NOT NULL, `foodTypeId` int NOT NULL, INDEX `IDX_57f831a8187b5feb78fa0bfc6b` (`restaurantId`), INDEX `IDX_e8c73de6c62effe12856e4834a` (`foodTypeId`), PRIMARY KEY (`restaurantId`, `foodTypeId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `menu` ADD CONSTRAINT `FK_085156de3c3a44eba017a6a0846` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `attachment` ADD CONSTRAINT `FK_26e55d392c9384573a673fe0ac9` FOREIGN KEY (`menuId`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` ADD CONSTRAINT `FK_57f831a8187b5feb78fa0bfc6b8` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` ADD CONSTRAINT `FK_e8c73de6c62effe12856e4834aa` FOREIGN KEY (`foodTypeId`) REFERENCES `food_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` DROP FOREIGN KEY `FK_e8c73de6c62effe12856e4834aa`");
        await queryRunner.query("ALTER TABLE `restaurant_has_food_type` DROP FOREIGN KEY `FK_57f831a8187b5feb78fa0bfc6b8`");
        await queryRunner.query("ALTER TABLE `attachment` DROP FOREIGN KEY `FK_26e55d392c9384573a673fe0ac9`");
        await queryRunner.query("ALTER TABLE `menu` DROP FOREIGN KEY `FK_085156de3c3a44eba017a6a0846`");
        await queryRunner.query("DROP INDEX `IDX_e8c73de6c62effe12856e4834a` ON `restaurant_has_food_type`");
        await queryRunner.query("DROP INDEX `IDX_57f831a8187b5feb78fa0bfc6b` ON `restaurant_has_food_type`");
        await queryRunner.query("DROP TABLE `restaurant_has_food_type`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `attachment`");
        await queryRunner.query("DROP TABLE `menu`");
        await queryRunner.query("DROP TABLE `restaurant`");
        await queryRunner.query("DROP TABLE `food_type`");
    }

}
