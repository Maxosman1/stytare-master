import { Navigation } from './common/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Poppins_300Light ,Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

const App = () => {
  
  const [fontsLoaded, fontError] = useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
