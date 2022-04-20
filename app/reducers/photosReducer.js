import { photosConstants } from '@constants';

export function photosReducer(
	state = {
		photos: []
	},
	action = {}
) {
	switch (action.type) {
		case photosConstants.SEARCH_PHOTOS_BY_TAG_REQUEST:
			return {
				...state,
				photosLoading: true,
				photosFailed: false
			};
		case photosConstants.SEARCH_PHOTOS_BY_TAG_SUCCESS:
			let result;
			if (action.pagination === true) {
				result = [...state.photos, ...action.result.photos.photo];
			} else {
				result = action.result.photos.photo;
			}
			return {
				...state,
				photosLoading: false,
				photosFailed: false,
				photos: result
			};
		case photosConstants.SEARCH_PHOTOS_BY_TAG_FAILURE:
			return {
				...state,
				photosLoading: false,
				photosFailed: true
			};
		default:
			return state;
	}
}
