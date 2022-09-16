import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function ScreenTwo() {
	return (
		<>
			<View style={styles.circle}>
				<Image source={require('../assets/lock.png')} />
			</View>
			<View style={styles.titles}>
				<Text style={styles.title}>FORGET PASSWORD</Text>
				<Text style={styles.description}>Provide your account’s email for which you want to reset your password</Text>
			</View>

			<View style={styles.center}>
				<TextInput placeholder="Email" style={styles.txtEmail} />
				<TouchableOpacity style={styles.button}>
					<Text style={styles.txtButton}>NEXT</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	circle: {
		alignItems: 'center',
		marginTop: 150,
	},
	titles: {
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		marginTop: 30,
		fontSize: 30,
	},
	description: {
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 15,
		textAlign: 'center',
		margin: 20,
	},
	center: {
		margin: 40,
	},
	button: {
		backgroundColor: '#E3C000',
		padding: 15,
		paddingLeft: 90,
		paddingRight: 90,
	},
	txtButton: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},
	bottom: {
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 25,
		textAlign: 'center',
		margin: 20,
	},
	txtEmail: {
		marginBottom: 30,
	},
});
