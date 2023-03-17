import {loginUser} from "@/services/swagger/user";

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin',
  };
}
