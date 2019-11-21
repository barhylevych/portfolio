import {i18n} from "../utils/I18n";

export const redirect = (location) => {
	switch (location) {
		case (i18n.INSTAGRAM):
			return window.location.href = 'https://github.com/barhylevych'
		case (i18n.GITHUB):
			return window.location.href = 'https://github.com/barhylevych'
		case (i18n.VK):
			return window.location.href = 'https://github.com/barhylevych'
		case (i18n.MAIL):
			return window.location.href = 'https://github.com/barhylevych'
		default:
	}
}
