import { Table, Column, Model, PrimaryKey, AutoIncrement, DeletedAt, UpdatedAt, CreatedAt } from 'sequelize-typescript';

@Table
export class Account extends Model<Account> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    @CreatedAt
    createdAt: Date;

    @Column
    @UpdatedAt
    updatedAt: Date;

    @Column
    @DeletedAt
    deletedAt?: Date;
}