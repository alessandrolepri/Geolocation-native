import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const fetchLocation = props => {
    return (
        <Button title='Get Location' onPress={props.onGetLocation} />
    )
}

const styles = StyleSheet.create({});

export default fetchLocation;