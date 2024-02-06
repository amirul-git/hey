import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostCreate1707182196097 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE posts(id int, title varchar(255), slug varchar(255), body varchar(255))',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE posts');
  }
}
