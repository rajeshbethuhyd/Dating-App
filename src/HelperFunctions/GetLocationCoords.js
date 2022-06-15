import RNLocation from 'react-native-location';
export async function GetLocationCoords() {
  let permission = await RNLocation.checkPermission({
    android: {
      detail: 'fine', // or 'coarse'
    },
  });
  let temp_location;
  if (!permission) {
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show people near you.',
          buttonPositive: 'OK',
        },
      },
    });
    temp_location = await RNLocation.getLatestLocation({timeout: 100});
    return temp_location;
  } else {
    temp_location = await RNLocation.getLatestLocation({timeout: 100});
    return temp_location;
  }
}
