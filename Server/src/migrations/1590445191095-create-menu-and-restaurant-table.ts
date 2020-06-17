import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMenuAndRestaurantTable1590445191095
  implements MigrationInterface {
  name = 'createMenuAndRestaurantTable1590445191095';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `menu` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `restaurant` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `restaurant`');
    await queryRunner.query('DROP TABLE `menu`');
  }
}
