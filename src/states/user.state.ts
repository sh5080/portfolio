import { atom } from "recoil";
import { persistAtom } from "./index.state";
import { User } from "../types/user.type";

export const userState = atom<User>({
  key: "user",
  default: { userId: 0, role: 0 },
  effects_UNSTABLE: [persistAtom],
});
