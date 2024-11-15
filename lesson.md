# React Native with External Components

## Brief

In this lesson, we will demonstrate how to add Expo components that uses 
the smartphone camera to scan and read a barcode. Learners will have the 
opportunity to experiment with other Expo components to enable other
features on the smartphone, e.g. contacts, calendar, camera, gyroscope, 
battery, GPS etc by adding packages

## Part 1: Creating a barcode scanner mobile app

This example is based on the Expo [BarCodeScanner](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/)
component found in the official Expo SDK 48 (latest) documentation. 

### Step 1: Create a new Expo app

```sh
npx create-expo-app demo-scanner

```

### Step 2: Install the BarCodeScanner package

```sh
cd demo-scanner
npx expo install expo-barcode-scanner
```

### Step 3: Configure `app.json`

Configure the plugin to enable access to the smartphone camera device.


```json
// app.json
{
  "expo": {
    "plugins": [
      [
        "expo-barcode-scanner",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access camera."
        }
      ]
    ],
    "name": "demo-scanner",
    "slug": "demo-scanner",
...
  }
}

```

### Step 4: Edit code in `App.js`

```js
// App.js


import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';

export default function App() {
  
  // Set component states here
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // Request for permission to access the user's camera when component loads
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // Bar code scanner handler - displays the data type and its content
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // Checks component state for camera access permission
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // JSX starts here
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
```

The code above uses the `<BarCodeScanner>` component to scan the barcode 
on a camera window on your smartphone. 

The component has a prop `onBarCodeScanned` that invokes a callback 
function `handlerBarCodeScanned` when a bar code has been successfully 
scanned. If `undefined` is passed to the `onBarCodeScanned` prop, it 
will effectively pause the scanner. 

In the callback function `handleBarCodeScanned`, a `BarCodeScannerResult` object 
is available to the function where the `data` and `type` values can be read by 
the application.

To make the barcode `data` value available to the parent component (App.js),
you can set the `data` value in a `useState` or `useContext` setting function.

