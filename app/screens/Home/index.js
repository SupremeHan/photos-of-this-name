import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PhotosActions } from '@actions';
import WebView from 'react-native-webview';
import { Card } from '../../components';
import styles from './styles';

let currentPage = 1;
export default function Home() {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState('');
	//const [images, setImages] = useState([]);
	//const [contacts, setContacts] = useState([]);
	//const [modalVisible, setModalVisible] = useState(false);
	const { photos } = useSelector((state) => state.photosReducer);
	const [webViewOpen, setWebViewOpen] = useState(false);
	const [webViewUrl, setWebViewUrl] = useState('');

	/*
	useEffect(() => {
		try {
			PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
				title: 'Contacts',
				message: 'This app would like to view your contacts.',
				buttonPositive: 'Please accept bare mortal'
			}).then(
				Contacts.getAll()
					.then((contacts) => {
						// work with contacts
						console.log(contacts);
					})
					.catch((e) => {
						console.log(e);
					})
			);
		} catch (e) {
			console.log(e);
		}
	}, []);
	*/

	async function handleSearch() {
		currentPage = 1;
		dispatch(PhotosActions.searchPhotosByTag(searchInput, currentPage, false));
	}

	async function handleSearchPaging() {
		dispatch(PhotosActions.searchPhotosByTag(searchInput, currentPage, true));
	}

	const renderItem = ({ item }) => {
		return (
			<Card
				item={item}
				onPress={() => {
					setWebViewUrl(`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_z.jpg`);
					setWebViewOpen(true);
				}}
			/>
		);
	};

	return (
		<View style={styles.homeView}>
			<View style={styles.searchContainer}>
				<TextInput style={styles.searchInput} placeholder="Search photos" onChangeText={(text) => setSearchInput(text)} value={searchInput} />
				<Button onPress={() => handleSearch()} color="#2F6690" title="Search"></Button>
			</View>

			{photos?.length > 0 && (
				<View style={styles.photosListView}>
					<FlatList
						data={photos}
						renderItem={(photo) => {
							return renderItem(photo);
						}}
						onEndReached={() => {
							currentPage = currentPage + 1;
							handleSearchPaging();
						}}
					/>
				</View>
			)}

			{webViewOpen && (
				<Modal visible={webViewOpen}>
					<WebView source={{ uri: webViewUrl }} />
					<Button onPress={() => setWebViewOpen(false)} color="#C51B29" title="Close"></Button>
				</Modal>
			)}

			{/** 
			 * 
			 * <FlatList
				data={photos}
				renderItem={(({item, index}) => {
					const url = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
					return(
						<FastImage key={image.id} source={{ uri: url }} resizeMode="cover" style={{ width: 100, height: 70, margin: 10 }} />
					)
				})}
			/>
			 * <Button onPress={() => setModalVisible(true)} title="Contacts">
				Contacts
				</Button>

			<Modal visible={modalVisible}>
				<View>
					<Button onPress={() => setModalVisible(false)} title="Close"></Button>
					<ScrollView>
						{contacts.length > 0 ? (
							contacts.map((person) => (
								<TouchableOpacity
									onPress={() => {
										setSearchInput(person.givenName);
										setModalVisible(false);
									}}>
									<Text key={person.recordID}>{person.givenName}</Text>
								</TouchableOpacity>
							))
						) : (
							<Text>There are no contacts!</Text>
						)}
					</ScrollView>
				</View>
			</Modal>
			*/}
		</View>
	);
}
