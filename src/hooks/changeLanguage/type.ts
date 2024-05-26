import { LOCALES } from "../../I18N";

interface IInitialValuesState {
  key: string;
  value: LOCALES;
}

interface IChangeLanguageActions {
  translate: IInitialValuesState;
  setTranslate(
    valOrUpdated:
      | IInitialValuesState
      | ((currVal: IInitialValuesState) => IInitialValuesState)
  ): void;
}

export type { IInitialValuesState, IChangeLanguageActions };
