import { View, StyleSheet, ImageBackground, Button, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

// You can import from local files
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';

// or any pure javascript modules available in npm
import { useState } from 'react';

export default function App() {
	const background = {
		backScreen1: ['#C4C4C400', '#28F7AC'],
		backScreen2: ['#BDF6C600', '#BDF6C6'],
		backScreen3: ['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9'],
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
			default:
				return { img: background.backScreen1, screen: <ScreenOne /> };
		}
	};

	return (
		<LinearGradient style={styles.container} colors={getScreen().img}>
			<ScrollView>{getScreen().screen}</ScrollView>
			<View style={styles.screenChangeButton}>
				<Button title="Screen 1" onPress={() => setTypeBackground(0)} />
				<Button title="Screen 2" onPress={() => setTypeBackground(1)} />
				<Button title="Screen 3" onPress={() => setTypeBackground(2)} />
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
		flexDirection: 'row',
		margin: 50,
		justifyContent: 'space-around',
	},
});
