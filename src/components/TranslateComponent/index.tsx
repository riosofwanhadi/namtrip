import { Fragment, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../../I18N";
import messages from "../../I18N/messages";
import { useSelectLanguageAction } from "../../hooks/changeLanguage/hook";

interface IProvider {
	children?: ReactNode;
	locale?: LOCALES;
}

function TranslateComponent(props: IProvider) {
	const { translate } = useSelectLanguageAction();
	return (
		<IntlProvider
			locale={translate.value}
			textComponent={Fragment}
			messages={messages[translate.value]}
		>
			{props.children}
		</IntlProvider>
	);
}

export default TranslateComponent;
