import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, Image, View, StatusBar, TouchableNativeFeedbackBase } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.navbar}>
          <Image source={require('./assets/Icons/menu_light.png')} />
          <Text style={{ fontFamily: 'Sydney-Bold', color: Themes.light.text, fontSize: 32 }}>ensom</Text>
          <Image source={require('./assets/Icons/sun.png')} />
        </View>
        <View style={styles.profileCard}>
          <Image source={require('./assets/Profiles/mtl.jpg')} style={styles.profilePicture} />
          <Text style={styles.profilePictureText}>MTL</Text>
          <Text style={styles.profilePictureCaption}>2 miles away</Text>
        </View>
        <View style={styles.audioFeature}>
          <Text style={styles.audioFeatureText}>My hottest take</Text>
          <View style={styles.audioIconContainer}>
            <Image source={require('./assets/Icons/player_light.png')} style={{ width: '20%', height: undefined, aspectRatio: 1 }} />
            <Image source={require('./assets/Icons/audio_waveform_light.png')} style={{ width: '75%', height: '70%' }} />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomButton}>
          <Image source={require('./assets/Icons/discover_light.png')} style={{ width: 30, height: 30, marginBottom: 10 }} />
          <Text style={styles.bottomButtonText}>Discover</Text>
        </View>
        <View style={styles.bottomButton}>
          <Image source={require('./assets/Icons/heart_light.png')} style={{ width: 35, height: 30, marginBottom: 10 }} />
          <Text style={styles.bottomButtonText}>Matches</Text>
        </View>
        <View style={styles.bottomButton}>
          <Image source={require('./assets/Icons/messages_light.png')} style={{ width: 30, height: 30, marginBottom: 10 }} />
          <Text style={styles.bottomButtonText}>DMs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 7,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: Themes.light.bg,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Themes.light.navigation,
  },
  bottomButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  bottomButtonText: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
  },
  navbar: {
    height: Platform.OS === 'ios' ? 41 : 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCard: {
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  profilePicture: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1.1,
    borderRadius: 10
  },
  profilePictureText: {
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    fontSize: 32,
    position: 'absolute',
    top: 10,
    left: 15
  },
  profilePictureCaption: {
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    position: 'absolute',
    bottom: 10,
    left: 15
  },
  audioFeature: {
    backgroundColor: Themes.light.bgSecondary,
    marginTop: 20,
    padding: 20,
    width: '100%',
    height: 125,
    borderRadius: 25,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  audioFeatureText: {
    fontSize: 24,
    fontFamily: 'Sydney'
  },
  audioIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
