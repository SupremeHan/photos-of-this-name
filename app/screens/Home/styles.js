import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	homeView: {
		flex: 1
	},
	searchContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		paddingHorizontal: 10
	},
	searchInput: {
		height: 50,
		backgroundColor: '#dee2e6',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		width: '80%',
		marginRight: 5
	},
	photosListView: {
		flex: 1,
		justifyContent: 'center'
	}
});
