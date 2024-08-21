import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './styles';

const TransactionItem = ({ transaction }) => {
	return (
		<View
			style={[styles.item]}
			testID='transaction-item'
		>
			<View>
				<Text
					testID='address'
					style={[styles.address]}
				>
					{transaction.location.address}
				</Text>
				<Text
					testID='city'
					style={[styles.city]}
				>
					{transaction.location.city}
				</Text>
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<View style={[styles.amountContainer]}>
					<Text
						testID='amount'
						style={[styles.amount]}
					>
						{transaction.amount}
					</Text>
					<View>
						{transaction && transaction.txnType === 'credit' ? (
							<Text style={[globalStyles.arrowUp]}>&#8593;</Text>
						) : (
							<Text style={[globalStyles.arrowDown]}>&#8595;</Text>
						)}
					</View>
				</View>
				<Text
					testID='date'
					style={[styles.date]}
				>
					{transaction.date}
				</Text>
			</View>
			<View style={[styles.shadowTL]} />
			<View style={[styles.shadowBR]} />
		</View>
	);
};

export default TransactionItem;

const styles = StyleSheet.create({
	item: {
		paddingVertical: 16,
		paddingHorizontal: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#262626',
		marginHorizontal: 16,
		marginVertical: 16,
		borderRadius: 8,
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
		shadowRadius: 6,
		position: 'absolute',
		bottom: 0,
		right: 0,
		borderRadius: 8,
		width: '100%',
		height: '100%',
	},
	address: {
		fontSize: 10,
		color: 'white',
		marginBottom: 8,
	},
	city: {
		color: '#f6e86f',
	},
	amountContainer: {
		flexDirection: 'row',
		marginBottom: 4,
		alignItems: 'center',
	},
	amount: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
		marginTop: 4,
	},
	date: {
		fontSize: 10,
		color: 'white',
		marginRight: 18,
	},
});
