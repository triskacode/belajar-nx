import { UserEntity } from "@belajar-nx/shared-data-types";
import { Http } from "@belajar-nx/shared-utils-http";
import { config } from "@belajar-nx/shared/environments";

export interface CreateUserDto {
  email: string;
  password: string;
  confirmPassword: string;
}

const createUser = async (paylaod: CreateUserDto): Promise<UserEntity> => {
  const { data } = await Http.post(
    `${config.api.SERVER_API_BASE_URL}/auth/login`,
    paylaod
  );

  return data;
};

export function useCreateUserMutation() {
  return
}
