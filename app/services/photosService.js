import axios from 'axios';
import config from './config';

export async function searchPhotosByTag(tag, currentPage) {
	try {
		const response = await axios({
			method: 'get',
			url: `${config.url}/services/rest/?method=flickr.photos.search&api_key=${config.API_KEY}&tags=${tag}&format=json&nojsoncallback=1&page=${currentPage}`
		});
		return { data: response.data, status: response.status };
	} catch (error) {
		console.log(error);
	}
}
