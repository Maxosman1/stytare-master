import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BellIcon from '../../../assets/icons/bell.svg';
import SettingsIcon from '../../../assets/icons/gear.svg';
import RedCircle from "../../../assets/icons/red-circle.svg";
import { useNavigation } from '@react-navigation/native';
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import { COLORS, FONTS } from '../../../styles/styles';

export const SecondaryHeader = ({ title, showIcons }) => {

  const navigator = useNavigation();

  const iconSize = 22;

  return (
    <View style={{ height: 60, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: COLORS.neutral300, borderBottomWidth: 1 }}>
      <TouchableOpacity activeOpacity={.75} onPress={() => navigator.navigate('home')} style={{ width: 64, height: 22, flexDirection: 'row', alignItems: 'center'}}>
        <ArrowLeft />
      </TouchableOpacity>
      <Text style={{ fontFamily: FONTS.default._600, fontSize: 18 }}>{title}</Text>
      <View style={{ flexDirection: 'row', gap: 16, opacity: showIcons ? 1 : 0 }}>
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