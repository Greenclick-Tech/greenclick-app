import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

const Stack = createStackNavigator();

const MapContainer = styled.View`
    width: 100%;
    height: 100%;
    max-height: 270px;
    border-radius: 10px;
`

const MainContainer = styled.View`
    padding: 0px 20px;
`;

function Content({navigation}) { 
    const [mapRegion, setmapRegion] = useState({
        latitude: 49.292133,
        longitude: -123.129135,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    });


    return (
        <MainContainer>

        <MapContainer>
            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={mapRegion}
            >
                <Marker coordinate={mapRegion} title='Marker' />
            </MapView>
        </MapContainer>
        <Button title={"Open Map"} onPress={()=> {
            navigation.navigate('Map', {coordinates: mapRegion})
        }}></Button>
        </MainContainer>

    );
}

const HomeStack = ({}) => {

   

    return (
        <Stack.Navigator 
        >
            <Stack.Screen 
                name="Content"
                component={Content}
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    );
}

export default HomeStack