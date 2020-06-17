import {MigrationInterface, QueryRunner} from "typeorm";

export class addAttachmentMenuRelationship1591642656895 implements MigrationInterface {
    name = 'addAttachmentMenuRelationship1591642656895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `attachment` ADD `menuId` int NULL");
        await queryRunner.query("ALTER TABLE `attachment` ADD CONSTRAINT `FK_26e55d392c9384573a673fe0ac9` FOREIGN KEY (`menuId`) REFERENCES `menu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `attachment` DROP FOREIGN KEY `FK_26e55d392c9384573a673fe0ac9`");
        await queryRunner.query("ALTER TABLE `attachment` DROP COLUMN `menuId`");
    }

}
