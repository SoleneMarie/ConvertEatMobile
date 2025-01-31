import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    // Raleway Fonts
    RalewayExtraLight: require("../assets/fonts/Raleway-ExtraLight.ttf"), //100
    RalewayThin: require("../assets/fonts/Raleway-Thin.ttf"), //200
    RalewayLight: require("../assets/fonts/Raleway-Light.ttf"), //300
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"), //400
    RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"), //500
    RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"), //600
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"), //700
    RalewayExtraBold: require("../assets/fonts/Raleway-ExtraBold.ttf"), //800
    RalewayBlack: require("../assets/fonts/Raleway-Black.ttf"), //900

    // Montserrat Fonts
    MontserratExtraLight: require("../assets/fonts/Montserrat-ExtraLight.ttf"), //100
    MontserratThin: require("../assets/fonts/Montserrat-Thin.ttf"), //200
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"), //300
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"), //400
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"), //500
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"), //600
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"), //700
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"), //800
    MontserratBlack: require("../assets/fonts/Montserrat-Black.ttf"), //900
  });

  return { fontsLoaded, fontError };
};

export default useCustomFonts;
