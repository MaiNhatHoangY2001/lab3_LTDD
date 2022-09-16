import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export default function ScreenFive() {
	const [checked, setChecked] = useState('first');
	return (
		<>
			<View style={styles.circle}>
				<Text style={styles.title}>LOGIN</Text>
			</View>

			<View style={styles.center}>
				<TextInput placeholder="Email" style={styles.txtEmail} />
				<TextInput placeholder="Password" style={styles.txtEmail} secureTextEntry={true} />

				<TouchableOpacity style={styles.button}>
					<Text style={styles.txtButton}>LOGIN</Text>
				</TouchableOpacity>
				<Text style={styles.description}>When you agree to terms and conditions</Text>
				<Text style={styles.description}>For got your password?</Text>
				<Text style={styles.description}>Or login with</Text>
				<View style={styles.btn}>
					<TouchableOpacity style={[styles.LoginWith, { backgroundColor: '#0680F1' }]}>
						<Text style={styles.txtLoginWith}>f</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.LoginWith, { backgroundColor: '#0F8EE0' }]} s>
						<Text style={styles.txtLoginWith}>Z</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.LoginWith, { backgroundColor: '#FFFFFF', borderColor: '#0F8EE0', borderWidth: 1 }]}>
						<Image source={require('../assets/google.png')} style={{ width: 30, height: 45 }} />
						{/* <Text style={[styles.txtLoginWith, { color: '#000000' }]}>G</Text> */}
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	circle: {
		alignItems: 'center',
		marginTop: 60,
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
		backgroundColor: '#E53935',
		padding: 15,
		paddingLeft: 90,
		paddingRight: 90,
		marginTop: 30,
	},
	txtButton: {
		color: '#FFFFFF',
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
		height: 50,
	},
	radio: {
		flex: 1,

		flexDirection: 'row',
	},
	txtRadio: {
		marginTop: 5,
		fontWeight: 'bold',
		fontSize: 20,
	},
	btn: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	LoginWith: {
		padding: 10,
		paddingLeft: 45,
		paddingRight: 45,
		marginTop: 30,
		borderRadius: 5,
	},
	txtLoginWith: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 38,
		textAlign: 'center',
	},
});
