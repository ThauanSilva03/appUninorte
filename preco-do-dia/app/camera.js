  import { CameraView, useCameraPermissions } from 'expo-camera';
  import { useEffect, useRef, useState } from 'react';
  import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import { useRouter } from 'expo-router';

  export default function Camera() {
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState(null);
    const router = useRouter();
      //const [type, setType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);
    
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    
      

    const snapPhoto = async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri)
        console.log(photo.uri);
        router.back();
      }
    };


    if (!permission) {
      // Camera permissions are still loading.
      return <View />;
    }

    if (!permission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={"front"} ref={cameraRef} >
          <TouchableOpacity onPress={snapPhoto} style={{backgroundColor:'green'}}>
              <Text>Foto</Text>
          </TouchableOpacity>
        </CameraView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
