// import React, {useRef, useEffect} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
//   Platform,
//   Image,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import logo from '../../assets/images/walletlogo.png';

// const Animation = ({navigation}) => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(200)).current;
//   const borderExpand = useRef(new Animated.Value(200)).current;

//   const expandBorderWidth = () => {
//     Animated.timing(borderExpand, {
//       toValue: 350,
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   };

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds

//     Animated.timing(fadeAnim, {
//       toValue: 270,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();
//   };
//   fadeAnim.addListener(({value}) => {
//     if (value === 270) {
//       fadeOut();
//     } else if (value === 200) {
//       fadeIn();
//     }
//   });

//   const fadeOut = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 200,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();
//   };
//   const stopLoop = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 200,
//       duration: 1500,
//       useNativeDriver: false,
//     }).stop();
//     expandBorderWidth();
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <SafeAreaView />
//       <Header nav={navigation} logo={logo} />
//       <View style={styles.container}>
//         <Animated.View
//           style={[
//             styles.outerView,
//             {
//               width: fadeAnim,
//               height: fadeAnim,
//             },
//           ]}>
//           <LinearGradient
//             start={{
//               x: Platform.OS === 'ios' ? 0.2 : 0.0,
//               y: Platform.OS === 'ios' ? 0 : 0,
//             }}
//             end={{
//               x: Platform.OS === 'ios' ? 0.5 : 0.5,
//               y: Platform.OS === 'ios' ? 1 : 0.6,
//             }}
//             colors={['#00F3F9', '#FFFFFF']}
//             style={styles.linearGradient}></LinearGradient>
//           <Animated.View
//             style={[
//               styles.fadingContainer,
//               {
//                 height: borderExpand,
//                 width: borderExpand,
//                 borderWidth: 8,
//                 borderColor: 'blue',
//                 backgroundColor: 'blue',
//               },
//             ]}
//           />
//           <Animated.View style={styles.innerView} />
//         </Animated.View>
//       </View>
//       <View style={styles.barStyle}>
//         <View style={styles.bar}></View>
//         <Text style={styles.number}>10%</Text>
//       </View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={stopLoop} />
//       </View>
//
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//   },
//   container: {
//     marginTop: Platform.OS === 'ios' ? 156 : 140,
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     // padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 200,
//     height: 200,
//     borderRadius: 1000,

//     backgroundColor: 'white',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     marginTop: 50,
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
//   innerView: {
//     position: 'absolute',
//     zIndex: 99,
//     borderRadius: 1000,
//     width: 200,
//     height: 200,
//     borderWidth: 8,
//     borderColor: 'blue',
//     backgroundColor: 'white',
//   },
//   outerView: {
//     width: 220,
//     height: 220,
//     borderRadius: 1000,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'blue',
//   },
//   linearGradient: {
//     borderRadius: 1000,
//   },
//   barStyle: {
//     marginTop: 60,
//     width: '80%',
//     // alignItems:'center'
//   },
//   number: {
//     position: 'absolute',
//     right: 0,
//     bottom: 14,
//     color: 'black',
//   },
//   bar: {
//     borderWidth: 5,
//     borderRadius: 10,
//     alignItems: 'center',
//     borderColor: '#EFEFEF',
//   },
//   center: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   text: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 12,
//     fontWeight: '400',
//     lineHeight: 18,
//     width: '70%',
//     color: 'black',
//     textAlign: 'center',
//     marginTop: 14,
//   },

//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// export default Animation;
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  Button,
} from 'react-native';
import GradientButton1 from '../../compnent/button/GradientButton1';
import React, {useRef} from 'react';
import {styles} from './AnimateStyle';
import Header from '../../compnent/header/Header';
import logo from '../../assets/images/walletlogo.png';
import LinearGradient from 'react-native-linear-gradient';
import icon from '../../assets/icons/warning.png';

const Animate = ({navigation}) => {
  // const [progressBarN]
  const fadeAnim = useRef(new Animated.Value(200)).current;
  const borderExpand = useRef(new Animated.Value(200)).current;
  const progressBar = useRef(new Animated.Value(1)).current;

  const increaseProgress = () => {
    Animated.timing(progressBar, {
      toValue: 250,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };

  const expandBorderWidth = () => {
    Animated.timing(borderExpand, {
      toValue: 400,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const fadeIn = () => {
    //     // Will change fadeAnim value to 1 in 5 seconds

    Animated.timing(fadeAnim, {
      toValue: 325,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    increaseProgress()
  };
  fadeAnim.addListener(({value}) => {
    if (value === 325) {
      fadeOut();
    } else if (value === 295) {
      fadeIn();
    }
  });

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 295,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  const stopLoop = () => {
    Animated.timing(fadeAnim, {
      toValue: 295,
      duration: 1500,
      useNativeDriver: false,
    }).stop();
    expandBorderWidth();
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <Header logo={logo} nav={navigation} />
      <View style={styles.container}>
        <Animated.View
          style={{
            // width: borderExpand,
            // height:borderExpand,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: fadeAnim,
              height: fadeAnim,
              borderColor: '#00F3F9',
              borderWidth: 2,
              borderRadius: 500,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LinearGradient
              start={{x: 0.4, y: 1.5}}
              end={{x: 1.5, y: 0.5}}
              colors={['#00F3F9', 'rgba(10, 52, 205, 0.5)', '#FFFFFF']}
              style={{
                width: 295,
                height: 295,
                borderRadius: 500,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.bgColor}>
                <Text style={styles.title}>Processing Mint</Text>
                <Text style={styles.title}>You have Minted Sucessfully</Text>
                <Text style={styles.return}>
                  Your next minting session will be in{' '}
                  <Text style={styles.hours}>17 hours</Text>
                </Text>
              </View>
            </LinearGradient>
          </Animated.View>
        </Animated.View>
      </View>

      <View style={styles.barStyle}>
        <View style={styles.bar}>
          <Animated.View
            style={{
              borderWidth: 3,
              borderRadius: 20,
              borderColor: '#36DEDC',
              width:progressBar,
            }}></Animated.View>
        </View>

        <Text style={styles.number}>10%</Text>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={stopLoop} />
      </View>
      <View style={styles.center}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.text}>
          Please don’t do any activities while processing the mint to avoid
          error.
        </Text>
        <GradientButton1
          click={() => navigation.navigate('DashBoard')}
          text="Close"
          width="100%"
          height={54}
        />
      </View>
    </View>
  );
};

export default Animate;
