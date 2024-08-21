import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, globalStyles } from './styles';

export const Header = ({ transactionType, onPressHandler }) => {
	const pressHandler = (type) => {
		onPressHandler(type);
	};
	return (
		<View style={[styles.header]}>
			<TouchableOpacity
				style={[styles.button]}
				testID='all-button'
				onPress={() => pressHandler('all')}
			>
				<Text
					style={[
						styles.buttonText,
						transactionType === 'all' ? styles.active : null,
					]}
				>
					All
				</Text>
				<View style={[styles.shadowTL]} />
				<View style={[styles.shadowBR]} />
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button]}
				testID='credit-button'
				onPress={() => pressHandler('credit')}
			>
				<Text
					style={[
						styles.buttonText,
						transactionType === 'credit' ? styles.active : null,
					]}
				>
					Credit
				</Text>
				<Text style={[globalStyles.arrowUp]}>&#8593;</Text>
				<View style={[styles.shadowTL]} />
				<View style={[styles.shadowBR]} />
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button]}
				testID='debit-button'
				onPress={() => pressHandler('debit')}
			>
				<Text
					style={[
						styles.buttonText,
						transactionType === 'debit' ? styles.active : null,
					]}
				>
					Debit
				</Text>
				<Text style={[globalStyles.arrowDown]}>&#8595;</Text>
				<View style={[styles.shadowTL]} />
				<View style={[styles.shadowBR]} />
			</TouchableOpacity>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		marginTop: 48,
		marginBottom: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	button: {
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: '#262626',
		marginHorizontal: 8,
		width: 80,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	active: {
		color: colors.brandColor,
		fontWeight: 'bold',
	},
	buttonText: {
		color: '#fff',
	},
	shadowTL: {
		shadowColor: '#2c2c2c',
		shadowOffset: {
			width: -4,
			height: -4,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		position: 'absolute',
		left: 0,
		top: 0,
		borderRadius: 8,
		width: '100%',
		height: '100%',
	},
	shadowBR: {
		shadowColor: '#0a0a0a',
		shadowOffset: {
			width: 4,
			height: 4,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		position: 'absolute',
		bottom: 0,
		right: 0,
		borderRadius: 8,
		width: '100%',
		height: '100%',
	},
});
