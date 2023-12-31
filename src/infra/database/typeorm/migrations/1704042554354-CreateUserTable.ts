import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1704042554354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '120',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '120',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'birth_date',
                        type: 'timestamp',
                        isNullable: false
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
