import * as photosService from '@services/photosService';
import { photosConstants } from '@constants';

export function searchPhotosByTag(tag, currentPage, pagination) {
	return async (dispatch) => {
		dispatch(searchPhotosByTagRequest());
		let result = await photosService.searchPhotosByTag(tag, currentPage);
		if (result.status === 200) {
			dispatch(searchPhotosByTagSuccess(result.data, pagination));
		} else {
			dispatch(searchPhotosByTagFailure());
		}

		function searchPhotosByTagRequest() {
			return { type: photosConstants.SEARCH_PHOTOS_BY_TAG_REQUEST };
		}

		function searchPhotosByTagSuccess(result) {
			return { type: photosConstants.SEARCH_PHOTOS_BY_TAG_SUCCESS, result, pagination };
		}

		function searchPhotosByTagFailure() {
			return { type: photosConstants.SEARCH_PHOTOS_BY_TAG_FAILURE };
		}
	};
}
