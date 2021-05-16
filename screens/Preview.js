import React from "react";
import { View, Text } from 'react-native'

const Preview = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection:'column',
            alignItems:'center',
        }}>
            <Text style={{fontSize: 20}}>Ткаченко Ярослав</Text>
        </View>
    )
}

export default Preview
