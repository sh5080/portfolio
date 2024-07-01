import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "portfolio-persist",
  storage: localStorage,
});
