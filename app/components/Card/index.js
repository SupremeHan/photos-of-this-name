import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default function Card(props) {
	const { item, onPress } = props;
	let url = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
	return (
		<TouchableOpacity onPress={onPress} style={styles.cardView} key={item.id}>
			<View>
				<FastImage source={{ uri: url }} resizeMode="cover" style={styles.cardImg} />
				<Text style={styles.cardTextUsername}>{item.owner}</Text>
				<Text style={styles.cardText}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	);
}
