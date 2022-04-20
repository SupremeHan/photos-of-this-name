import { View } from 'react-native-web';
import WebView from 'react-native-webview';

export default function Photo({ route }) {
	const { url } = route.params;

	return (
		<View>
			<WebView source={{ uri: url }} />
		</View>
	);
}
