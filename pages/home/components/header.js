import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import StyrateLogo from '../../../assets/styrate-logo.svg';
import CrownMainIcon from '../../../assets/icons/crown-main.svg';
import BellIcon from '../../../assets/icons/bell.svg';
import SettingsIcon from '../../../assets/icons/gear.svg';
import RedCircle from "../../../assets/icons/red-circle.svg";
import { useNavigation } from '@react-navigation/native';

export const Header = () => {

  const navigator = useNavigation();

  const iconSize = 22;

  return (
    <View style={{ height: 60, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: 'black' }}>
      <StyrateLogo width={70} height="100%" />
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ position: 'relative' }}>
          <TouchableOpacity onPress={() => navigator.navigate('subscription')}>
            <CrownMainIcon width={iconSize} height={iconSize} />
          </TouchableOpacity>
        </View>
        <View style={{ position: 'relative'}}>
          <BellIcon width={iconSize} height={iconSize} />
          <RedCircle width={12} height={12} style={{ position: 'absolute', top: 0, right: 0 }} />
        </View>
        <View style={{}}>
          <SettingsIcon width={iconSize} height={iconSize} />
        </View>
      </View>
    </View>
  );
};