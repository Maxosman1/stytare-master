import { View, Text, TouchableOpacity, Image } from 'react-native';
import ShowdownIcon from "../../../assets/icons/showdown-icon.svg";
import ContestsIcon from "../../../assets/icons/contests-icon.svg";
import RewardsIcon from "../../../assets/icons/rewards-icon.svg";
import { COLORS, FONTS } from "../../../styles/styles";
import { APIService } from '../../../utils/apiservice';
import { useEffect, useState } from 'react';

export const BottomNavigator = ({ activeTab, setActiveTab }) => {

  const [userProfile, setUserProfile] = useState(null);

  const tabs = [
    { id: 'showdown', title: 'Showdown', Icon: ShowdownIcon },
    { id: 'contests', title: 'Contests', Icon: ContestsIcon },
    { id: 'rewards', title: 'Rewards', Icon: RewardsIcon },
    { id: 'profile', title: 'Profile', Icon: userProfile },
  ];

  async function getProfilePic() {
    const response = APIService.getNavigatorProfilePic();
    if (response) setUserProfile(response);
  }

  useEffect(() => {
    getProfilePic();
  }, []);

  return (
    <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: COLORS.neutral300 , height: 60, opacity: .75 }}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={{ opacity: tab.id === activeTab ? 1 : 0.6, flex: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setActiveTab(tab.id)}
        >
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                {tab.id === 'profile' ? 
                    (userProfile ? <Image source={tab.Icon} style={{ width: 22, height: 22, borderRadius: 11 }} /> : <View style={{ height: 22, width: 22, borderRadius: 11, backgroundColor: COLORS.neutral600 }} />)
                 : (
                    <tab.Icon width={22} height={22} />
                )}
                <Text style={{ fontSize: 11, fontFamily: tab.id === activeTab ? FONTS.default._500 : FONTS.default._400 }}>{tab.title}</Text>
            </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};