import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Menu() {
    return (
        <View style={styles.waper}>
            <Text>Quang Huy</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Menu;