/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header/>
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={styles.body}>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>TEST OOOOO</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>

                        <View style={[styles.sectionContainer, {flex: 1}]}>
                            <Text style={[styles.sectionTitle, { color: '#FF00FF', fontSize: 30 }]}> Hellow!! </Text>
                            <Text style={styles.sectionTitle}>TEST OOOOO</Text>
                            <Image style={[styles.center, { width: 400 }]}
                                   source={{ uri: 'http://lorempixel.com/1920/1920/cats' }}>

                            </Image>
                            <Text style={styles.textCenter}> React Native </Text>
                            <View style={{backgroundColor: '#4e33ee', flex: 1}} />
                            <View style={{backgroundColor: '#5bff7a', flex: 1}} />
                        </View>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step One</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.js</Text> to change this
                                screen and then come back to see your edits.
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>See Your Changes</Text>
                            <Text style={styles.sectionDescription}>
                                <ReloadInstructions/>
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Debug</Text>
                            <Text style={styles.sectionDescription}>
                                <DebugInstructions/>
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Learn More</Text>
                            <Text style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                            </Text>
                        </View>
                        <LearnMoreLinks/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        color: '#fff000',
        backgroundColor: 'rgba(50,50,50,0.3)',
        fontSize: 40,
    }
});

export default App;
