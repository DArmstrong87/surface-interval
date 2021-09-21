import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
export const MyDocument = () => (
    <Document>
        <Page>
            <View style={styles.section}>
                <Text>Section #1 fdsgfdgsdf
                </Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
        <Page>
            <View style={styles.section}>
                <Text>
                </Text>
            </View>
        </Page>
    </Document>
);