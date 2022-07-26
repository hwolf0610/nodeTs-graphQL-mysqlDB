import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Postinfos extends BaseEntity {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  userId: number;
}
