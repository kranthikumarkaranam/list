import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TransactionItem from './TransactionItem';

const Transactions = ({ transactions }) => {
	return (
		<FlatList
			data={transactions}
			initialNumToRender={100}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => <TransactionItem transaction={item} />}
		/>
	);
};

export default Transactions;

const styles = StyleSheet.create({});
