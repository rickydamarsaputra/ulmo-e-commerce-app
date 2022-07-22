import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styleHeading from '../../constraint/style.heading';

export default function CustomerMain() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ ...styleHeading.heading0, textTransform: 'uppercase', textAlign: 'center', fontSize: 28, fontWeight: '800' }}>ulmo</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 24,
	},
});
