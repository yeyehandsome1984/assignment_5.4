import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { styles } from "../styles/styles";

export default function App() {
    const RAD_TO_DEG = 180 / Math.PI;
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const _slow = () => Gyroscope.setUpdateInterval(1000);
    const _fast = () => Gyroscope.setUpdateInterval(16);

    const _subscribe = () => {
        setSubscription(
        Gyroscope.addListener(gyroscopeData => {
            setData({
                x: parseFloat((gyroscopeData.x * RAD_TO_DEG).toFixed(3)), 
                y: parseFloat((gyroscopeData.y * RAD_TO_DEG).toFixed(3)),
                z: parseFloat((gyroscopeData.z * RAD_TO_DEG).toFixed(3)),
            });
        })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.gText}>Gyroscope:</Text>
        <View style={{height:15}}></View>
        <Text style={styles.gText}>x: {x} °</Text>
        <Text style={styles.gText}>y: {y} °</Text>
        <Text style={styles.gText}>z: {z} °</Text>
        <View style={styles.gyroButtonContainer}>
            <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.firstButton}>
            <Text style={{color:'white'}}>{subscription ? 'On' : 'Off'}</Text>
            </TouchableOpacity>
            <View style={{width:5}}></View>
            <TouchableOpacity onPress={_slow} style={[styles.firstButton, styles.middleButton]}>
            <Text style={{color:'white'}}>Slow</Text>
            </TouchableOpacity>
            <View style={{width:5}}></View>
            <TouchableOpacity onPress={_fast} style={styles.firstButton}>
            <Text style={{color:'white'}}>Fast</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

