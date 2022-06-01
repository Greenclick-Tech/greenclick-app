import React from 'react'
import styled from 'styled-components'
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const MapContainer = styled.View`
    flex: 1;
    height: 100%;
`;

const CustomButton = styled.Button`
    width: 100%;
    padding: 20px;
`;

const ExampleList = ["Car1", "Car2", "Car3", "Car4", "Car5", "Car6"]

const MapPage = ({route}) => {
    const [mapRegion, setmapRegion] = useState(route.params.coordinates);

    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((number) => {
        console.log('handleSheetChanges', number);
    }, []);

    return (
        <MapContainer>
            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={mapRegion}
            >
                <Marker coordinate={mapRegion} title='Marker' />
            </MapView>

            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <FlatList
                    style={{ 
                        width: "100%",
                        backgroundColor: "none",
                    }}
                    renderItem={ ({ item }) => {
                        
                        return (
                            <CustomButton
                                title={item}
                            >

                            </CustomButton>
                        )
                    }}
                    data={ExampleList}
                    >

                    </FlatList>
                </View>
            </BottomSheet>
            
        </MapContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });

export default MapPage
