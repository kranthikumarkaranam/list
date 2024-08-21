import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import transactions from '../src/transactions.json'
import {FlatList} from 'react-native'
import Transactions from "../src/Transactions";
import TransactionItem from "../src/TransactionItem";

const TEST_IDS = {
    TRANSACTION_ITEM: 'transaction-item',
    AMOUNT: 'amount',
    DATE: 'date',
    CITY: 'city',
    ADDRESS: 'address',
    DEBIT_BUTTON: 'debit-button',
    CREDIT_BUTTON: 'credit-button',
    ALL_BUTTON: 'all-button'
}

global.setImmediate = callback => callback();

describe('Transactions List', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render the transactions list', () => {
        const tree = render(<Transactions transactions={transactions}/>)
        expect(tree.UNSAFE_getAllByType(FlatList).length).toBe(1)
        expect(tree.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.length)
    });

    it('should render the Transaction List Item correctly', () => {
        transactions.map(transaction => {
            const tree = render(<TransactionItem transaction={transaction}/>)
            expect(tree.getByTestId(TEST_IDS.AMOUNT)).toHaveTextContent(transaction.amount)
            expect(tree.getByTestId(TEST_IDS.CITY)).toHaveTextContent(transaction.location.city)
            expect(tree.getByTestId(TEST_IDS.ADDRESS)).toHaveTextContent(transaction.location.address)
            expect(tree.getByTestId(TEST_IDS.DATE)).toHaveTextContent(transaction.date)
        })
    })

    it('should filter the list based on filter button click', async () => {
        const app = render(<App/>)
        expect(app.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.length)

        await fireEvent.press(app.getByTestId(TEST_IDS.CREDIT_BUTTON));
        expect(app.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.filter(t => t.txnType === 'credit').length)

        await fireEvent.press(app.getByTestId(TEST_IDS.ALL_BUTTON));
        expect(app.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.length)

        await fireEvent.press(app.getByTestId(TEST_IDS.DEBIT_BUTTON));
        expect(app.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.filter(t => t.txnType === 'debit').length)

        await fireEvent.press(app.getByTestId(TEST_IDS.ALL_BUTTON));
        expect(app.UNSAFE_getAllByType(TransactionItem).length).toBe(transactions.length)

    })

});
