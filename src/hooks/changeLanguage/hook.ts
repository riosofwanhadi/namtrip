import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectValues as selectValuesStates } from "./states";
import { IChangeLanguageActions, IInitialValuesState } from "./type";

export function useSelectLanguageAction(): IChangeLanguageActions {
	const translate: IInitialValuesState = useRecoilValue(selectValuesStates);
	const setTranslate = useSetRecoilState(selectValuesStates);
	return {
		translate,
		setTranslate,
	};
}
