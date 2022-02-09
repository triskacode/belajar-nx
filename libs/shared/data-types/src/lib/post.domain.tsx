import { UserEntity } from "..";

export interface PostEntity {
  id: string;
  title: string;
  content: string;
  userId: string;
  user: UserEntity;
}
