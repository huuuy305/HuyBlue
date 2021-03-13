import React from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Menu from '../../services/Menu';
import { useState } from 'react/cjs/react.development';

function Item({ uri }) {
	return (
		<View style={styles.itemContainer}>
			<Image source={{ uri }} style={styles.img}></Image>
		</View>
	);
}

function MenuDetail({ navigation, route }) {
	const { idMenu } = route.params;
    const [number, setNumber] = useState(0);
	const menu = Menu.filter((item) => item.id === idMenu)[0];
	return (
		<View style={styles.container}>
			<Header
				onBack={() => navigation.goBack()}
				title='Menu detail'
			></Header>
			<ScrollView>
				<View style={styles.content}>
					<View
						style={{
							height: 400,
						}}
					>
						<FlatList
							showsHorizontalScrollIndicator={false}
							pagingEnabled={true}
							horizontal={true}
							data={menu.carouselImages}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => {
								return <Item uri={item}></Item>;
							}}
						></FlatList>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Menu name</Text>
						<Text style={styles.info}>{menu.name}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Menu detail</Text>
						<Text style={styles.info}>{menu.details}</Text>
					</View>
		
					<View style={styles.item}>
						<Text style={styles.header}>Menu price</Text>
						<Text style={styles.info}>{Menu.price}</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default MenuDetail;