import { AvatarOptions } from '../../../../../projects/avatar/src/lib/avatar.enum';
import { User } from '../../../core/auth/interfaces/user';

interface CommonResponse {
  message: string;
}

export interface GetAvatarResponse {
  _id: string;
  _creator: User;
  options?: AvatarOptions;
}

export interface GetAvatarResponseData extends CommonResponse {
  data: GetAvatarResponse[];
}
