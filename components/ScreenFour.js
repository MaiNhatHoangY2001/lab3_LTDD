import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export default function ScreenFour() {
	const [checked, setChecked] = useState('first');
	return (
		<>
			<View style={styles.circle}>
				<Text style={styles.title}>REGISTER</Text>
			</View>

			<View style={styles.center}>
				<TextInput placeholder="Name" style={styles.txtEmail} />
				<TextInput placeholder="Phone" style={styles.txtEmail} />
				<TextInput placeholder="Email" style={styles.txtEmail} />
				<TextInput placeholder="Password" style={styles.txtEmail} secureTextEntry={true} />
				<TextInput placeholder="Birthday" style={styles.txtEmail} />
				<View style={{ marginBottom: 20 }}>
					<View style={styles.radio}>
						<RadioButton value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
						<Text style={styles.txtRadio}>Male</Text>
						<RadioButton value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
						<Text style={styles.txtRadio}>Female</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.txtButton}>REGISTER</Text>
				</TouchableOpacity>
				<Text style={styles.description}>When you agree to terms and conditions</Text>
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
});
