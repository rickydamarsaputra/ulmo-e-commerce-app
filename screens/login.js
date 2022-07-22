import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constraint/colors';
import styleHeading from '../constraint/style.heading';

const screen = Dimensions.get('screen');

export default function Login({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ ...styleHeading.heading0, textTransform: 'uppercase', textAlign: 'center', fontSize: 28, zIndex: 1 }}>login to ulmo</Text>
			<View style={styles.formContainer}>
				<View style={styles.textInputContainer}>
					<Text style={{ ...styleHeading.heading0, textTransform: 'capitalize' }}>email</Text>
					<TextInput style={styles.textInput} placeholder="Enter your email" />
				</View>
				<View style={styles.textInputContainer}>
					<Text style={{ ...styleHeading.heading0, textTransform: 'capitalize' }}>password</Text>
					<TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter your password" />
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('CustomerMain')} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>login</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
					<Text style={{ ...styleHeading.heading1, fontWeight: '400' }}>don't have on account yet?</Text>
					<Text onPress={() => navigation.navigate('Register')} style={{ ...styleHeading.heading1, color: colors.blue_500, fontWeight: '400', marginLeft: 4 }}>
						register
					</Text>
				</View>
			</View>
			<View style={styles.bubbleTop}></View>
			<View style={styles.bubbleBottom}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		position: 'relative',
		padding: 24,
	},
	bubbleTop: {
		width: screen.width * 0.7,
		height: screen.width * 0.7,
		backgroundColor: colors.yellow_200,
		borderRadius: screen.width * 0.7,
		position: 'absolute',
		left: -55,
		top: -55,
	},
	bubbleBottom: {
		width: screen.width * 0.6,
		height: screen.width * 0.6,
		backgroundColor: colors.yellow_100,
		borderRadius: screen.width * 0.6,
		position: 'absolute',
		right: -55,
		bottom: -55,
	},
	formContainer: {
		marginTop: 40,
		zIndex: 1,
	},
	textInputContainer: {
		marginBottom: 15,
	},
	textInput: {
		borderWidth: 2,
		borderRadius: 50,
		borderColor: colors.gray_500,
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	buttonContainer: {
		alignItems: 'center',
		backgroundColor: colors.yellow_400,
		paddingVertical: 15,
		borderRadius: 50,
		marginTop: 40,
	},
	buttonText: {
		...styleHeading.heading0,
		textTransform: 'capitalize',
	},
});
