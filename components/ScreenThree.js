import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function ScreenThree() {
	return (
		<>
			<View style={styles.circle}>
				<Text style={(styles.title, { fontSize: 40 })}>CODE</Text>
			</View>
			<View style={styles.titles}>
				<Text style={styles.title}>VERIFICATION</Text>
				<Text style={styles.description}>Enter ontime password sent on ++849092605798</Text>
			</View>

			<View style={styles.center}>
				<OTPInputView
					style={{ width: '80%', height: 200 }}
					pinCount={6}
					autoFocusOnLoad
					codeInputFieldStyle={styles.underlineStyleBase}
					codeInputHighlightStyle={styles.underlineStyleHighLighted}
					// onCodeFilled={(code) => {
					// 	console.log(`Code is ${code}, you are good to go!`);
					// }}
				/>
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
		fontSize: 25,
	},
	description: {
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 20,
		textAlign: 'center',
		padding: 30,
	},
	center: {
		margin: 20,
		alignItems: 'center',
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
	borderStyleBase: {
		width: 40,
		height: 45,
		color: '#0a0a0a',
		borderColor: '#0a0a0a',
	},

	borderStyleHighLighted: {
		borderColor: '#0a0a0a',
	},

	underlineStyleBase: {
		width: 50,
		height: 45,
		borderWidth: 1,
		borderBottomWidth: 1,
		color: '#0a0a0a',
		fontSize: 20,
	},

	underlineStyleHighLighted: {
		borderColor: '#0a0a0a',
		color: '#0a0a0a',
	},
});
