import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

export enum UserType {
  Admin = "admin",
  User = "user",
}
@Entity()
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: [UserType.User],
  })
  _userType?: UserType;
}
