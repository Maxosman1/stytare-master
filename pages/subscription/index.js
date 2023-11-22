import { useNavigation } from "@react-navigation/native"
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native"
import { COLORS, FONTS } from "../../styles/styles";
import { Constant } from "../../utils/constants";
import PremiumArtwork from "../../assets/images/premium-artwork.png";
import Checkmark from "../../assets/icons/checkmark.svg";
import Close from "../../assets/icons/close.svg";

export const Subscription = () => {

    const navigator = useNavigation();
    const { subscription } = Constant;
    const SUBSCRIPTION_LEVELS = ['Basic', 'Premium', 'Enterprise'];

    const BooleanIcon = ({ boolean, width }) => {
        return (
            <View style={{ width, display: 'flex', alignItems: 'center' }}>
                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: COLORS.neutral300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {boolean ? (
                    <Checkmark />
                ) : (
                    <Close width={7} height={7} />
                )}
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex : 1 }}>
        <ScrollView style={{ flex : 1 }}>
            <View style={{ margin: 16 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: FONTS.default._400 }} onPress={() => navigator.navigate('home')}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigator.navigate('subscription_plan')} activeOpacity={0.9}>
                        <Text style={{ fontFamily: FONTS.default._500, color: COLORS.white, backgroundColor: COLORS.blackMain, paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16 }}>Try Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 28 }}>
                    <Text style={{ fontFamily: FONTS.default._600, fontSize: 24, textAlign: 'center' }}>{subscription.title}</Text>
                    <Text style={{ fontFamily: FONTS.default._400, fontSize: 15, color: COLORS.neutral600 }}>{subscription.description}</Text>
                    <Image source={PremiumArtwork} style={{ width: '100%', borderRadius: 16, marginVertical: 12 }} />
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 8, marginVertical: 8 }}>
                        {SUBSCRIPTION_LEVELS.map((level, index) => (
                            <Text key={index} style={{ fontFamily: FONTS.default._700, fontSize: 12 }}>{level}</Text>
                        ))}
                    </View>
                    {subscription.subscriptionComparison.map(({label, levels}, index) => (
                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', borderTopColor: COLORS.neutral300, borderTopWidth: 1, paddingVertical: 8}}>
                            <Text style={{ flex: 1, fontFamily: FONTS.default._400, fontSize: 12 }}>{label}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <BooleanIcon boolean={levels.basic} width={20} />
                                <BooleanIcon boolean={levels.premium} width={90} />
                                <BooleanIcon boolean={levels.enterprise} width={40} />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigator.navigate('subscription_plan')} activeOpacity={0.9} style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
            <Text style={{ fontFamily: FONTS.default._500, color: COLORS.white, backgroundColor: COLORS.blackMain, textAlign: 'center', paddingVertical: 8, borderRadius: 16 }}>Try Strytate Premium</Text>
        </TouchableOpacity>
    </View>
    )
}