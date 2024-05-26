import { RecoilState, atom } from "recoil";
import { IInitialValuesState } from "./type";
import { LOCALES } from "../../I18N";

const INITIAL_VALUES_STATES: IInitialValuesState = {
  key: "",
  value: LOCALES.ENGLISH,
};

const selectValues: RecoilState<IInitialValuesState> = atom({
  key: "selectValues",
  default: INITIAL_VALUES_STATES,
});

export { INITIAL_VALUES_STATES, selectValues };
