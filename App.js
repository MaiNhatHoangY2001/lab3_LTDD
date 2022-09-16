import { View, StyleSheet, ImageBackground, Button, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

// You can import from local files
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import ScreenFour from './components/ScreenFour';
import ScreenFive from './components/ScreenFive';

// or any pure javascript modules available in npm
import { useState } from 'react';

export default function App() {
	const background = {
		backScreen1: ['#C4C4C400', '#28F7AC'],
		backScreen2: ['#BDF6C600', '#BDF6C6'],
		backScreen3: ['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9'],
		backScreen4: ['#FFFFFF', '#FFFFFF'],
	};

	const [typeBackground, setTypeBackground] = useState(0);

	const getScreen = () => {
		switch (typeBackground) {
			case 0:
				return { img: background.backScreen1, screen: <ScreenOne /> };
			case 1:
				return { img: background.backScreen2, screen: <ScreenTwo /> };
			case 2:
				return { img: background.backScreen3, screen: <ScreenThree /> };
			case 3:
				return { img: background.backScreen4, screen: <ScreenFour /> };
			case 4:
				return { img: background.backScreen4, screen: <ScreenFive /> };
			default:
				return { img: background.backScreen1, screen: <ScreenOne /> };
		}
	};

	return (
		<LinearGradient style={styles.container} colors={getScreen().img}>
			<ScrollView>{getScreen().screen}</ScrollView>
			<View style={styles.screenChangeButton}>
				<Button style={styles.buttonScreen} title="Screen 1" onPress={() => setTypeBackground(0)} />
				<Button style={styles.buttonScreen} title="Screen 2" onPress={() => setTypeBackground(1)} />
				<Button style={styles.buttonScreen} title="Screen 3" onPress={() => setTypeBackground(2)} />
				<Button style={styles.buttonScreen} title="Screen 4" onPress={() => setTypeBackground(3)} />
				<Button style={styles.buttonScreen} title="Screen 5" onPress={() => setTypeBackground(4)} />
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// remove width and height to override fixed static size
	},
	screenChangeButton: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		margin: 10,
		justifyContent: 'space-around',
	},
});
