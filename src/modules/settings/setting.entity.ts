import { Table, Column, Model, PrimaryKey, AutoIncrement, UpdatedAt, DeletedAt, CreatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Account } from '../accounts/account.entity';

@Table
export class Setting extends Model<Setting> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    data_type: string;

    @Column
    @ForeignKey(() => Account)
    account_id: number;

    @Column
    value: string;

    @Column
    @CreatedAt
    createdAt: Date;

    @Column
    @UpdatedAt
    updatedAt: Date;

    @Column
    @DeletedAt
    deletedAt?: Date;

    @BelongsTo(() => Account)
    account: Account
}