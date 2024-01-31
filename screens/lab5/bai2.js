import React from "react";
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bgnaruto.jpg')}
                style={styles.imageBackground}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Discover world with us</Text>
                    <Text style={styles.text2}>act native/Lab/node_modules/@babel/parser/lib/index.js:13003:2home/tuantran/react native/Lab/node_modules/@babel/parser/lib/index.js:12621:21</Text>
                    {/* <Button ><Text>get started</Text></Button> */}
                    <TouchableOpacity style={{ padding: 15, backgroundColor: 'white', borderRadius: 12, width: 150}}>
                        <Text>GET STARTED</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // margin: 0,
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: '15%',
        alignItems: 'start'
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    text2:{
        // paddingHorizontal:40,
        color: 'white'
    }
});

export default App;
