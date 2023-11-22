import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native"
import { Constant } from "../../utils/constants";
import { useState } from "react";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import RoundCheckboxFilled from "../../assets/icons/round-checkbox-filled.svg";
import RoundCheckboxOutline from "../../assets/icons/round-checkbox-outline.svg";

export const SubscriptionPlan = () => {

    const navigator = useNavigation();
    const [plan, setPlan] = useState('premium');
    const { subscriptionPlan } = Constant;

    const SubscriptionPlanCard = ({ tier, label, perMonth }) => (
        <TouchableOpacity onPress={() => setPlan(tier)} style={{ width: '100%', borderWidth: 1, borderColor: COLORS.blackMain, borderRadius: 10 }} activeOpacity={0.6}>
            <View style={{ flex: 1, width: '100%', borderWidth: 3, borderRadius: 8, borderColor: tier === plan ? COLORS.blackMain : COLORS.white, padding: 16, display: 'flex', flexDirection: 'row', gap: 16 }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {tier === plan ? <RoundCheckboxFilled /> : <RoundCheckboxOutline />}
                </View>
                <View style={{ flex: 1}}>
                    <Text style={{ fontFamily: FONTS.default._600, fontSize: 18 }}>{label}</Text>
                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <Text style={{ fontFamily: FONTS.default._600, fontSize: 18 }}>{perMonth}</Text>
                            <Text style={{ position: 'relative', top: 4}}>/ month</Text>
                        </View>
                        <Text style={{ fontFamily: FONTS.default._300, fontSize: 12, color: COLORS.neutral500 }}>{subscriptionPlan.freeTrial} free trial</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex : 1 }}>
        <ScrollView style={{ flex : 1 }}>
            <View style={{ margin: 16 }}>
                <TouchableOpacity onPress={() => navigator.navigate('subscription')} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ArrowLeft />
                </TouchableOpacity>
                <View style={{ marginTop: 28 }}>
                    <Text style={{ fontFamily: FONTS.default._600, fontSize: 24, textAlign: 'center' }}>{subscriptionPlan.title}</Text>
                    <Text style={{ fontFamily: FONTS.default._400, fontSize: 15, color: COLORS.neutral600 }}>{subscriptionPlan.description}</Text>
                </View>
                <View style={{ marginVertical: 16, display: 'flex', gap: 16 }}>
                    {subscriptionPlan.tiers.map(({label, perMonth, tier}, index) => (
                        <SubscriptionPlanCard {...{key:index, perMonth, tier, label}} />
                    ))}
                </View>
                <Text style={{ fontFamily: FONTS.default._400, fontSize: 13, color: COLORS.neutral500, textAlign: 'center' }}>{subscriptionPlan.notice}</Text>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigator.navigate('subscription')} activeOpacity={0.9} style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
            <Text style={{ fontFamily: FONTS.default._500, color: COLORS.white, backgroundColor: COLORS.blackMain, textAlign: 'center', paddingVertical: 8, borderRadius: 16 }}>Subscribe Now</Text>
        </TouchableOpacity>
    </View>
    )
}