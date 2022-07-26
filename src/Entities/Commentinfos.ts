import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commentinfos extends BaseEntity {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  postId: number;

  @Column()
  userId: number;
}
