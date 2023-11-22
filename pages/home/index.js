import { Showdown } from "./tabs/showdown";
import { Contests } from "./tabs/contests";
import { Rewards } from "./tabs/rewards";
import { Profile } from "./tabs/profile";
import { View } from 'react-native';
import { Header } from './components/header';
import { BottomNavigator } from './components/navigator';
import { useState } from 'react';

const Tab = ({ activeTab }) => {

    switch (activeTab) {
        case 'showdown':
            return <Showdown />;
        case 'contests':
            return <Contests />;
        case 'rewards':
            return <Rewards />;
        case 'profile':
            return <Profile />;
    }

}

export const Home = () => {

  const [activeTab, setActiveTab] = useState('showdown');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <Tab {...{activeTab}} />
      </View>
      <BottomNavigator {...{ activeTab, setActiveTab }} />
    </View>
  );
};