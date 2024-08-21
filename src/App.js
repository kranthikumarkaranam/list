import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Transactions from './Transactions';
import Header from './Header';
import TXNS from './transactions.json';

const App = () => {
	const [transactionType, setTransactionType] = useState('all');
	const [data, setData] = useState(TXNS);

	const sortTransactions = (type) => {
		setTransactionType(type);
		if (type === 'all') {
			setData(TXNS);
			return;
		}
		if (type === 'credit') {
			const sortedData = TXNS.filter((item) => item.txnType === 'credit');
			console.log(sortedData);
			setData(sortedData);
			return;
		}
		if (type === 'debit') {
			const sortedData = TXNS.filter((item) => item.txnType === 'debit');
			setData(sortedData);
			return;
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.frame}>
				<Header
					transactionType={transactionType}
					onPressHandler={sortTransactions}
				/>
				<Transactions transactions={data} />
			</View>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#201f1f',
	},
	frame: {
		maxWidth: 500,
		flex: 1,
		justifyContent: 'center',
	},
});
