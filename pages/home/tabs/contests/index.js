import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Constant } from "../../../../utils/constants";
import { COLORS, FONTS } from "../../../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export const Contests = () => {

    const { contests } = Constant;
    const navigator = useNavigation();

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1, gap: 16, paddingTop: 4, paddingBottom: 12 }}>
                <View style={{ flex: 1, gap: 16 }}>
                <Text style={{ fontSize: 20, fontFamily: FONTS.default._500, marginHorizontal: 16 }}>{contests.title}</Text>
                    <View style={{ flex: 1, gap: 16 }}>
                        {contests.categories.map(({id, label, contests}) => (
                            <View key={id}>
                                <Text style={{ marginLeft: 16, fontFamily: FONTS.default._600, fontSize: 16 }}>{label}</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ margin: 16, display: 'flex' }}>
                                    {contests.map(({id, label, description, icon: Icon}, index) => (
                                        <TouchableOpacity key={id}
                                        onPress={() => navigator.navigate('contest_details', { id, title: label })}
                                        activeOpacity={0.7} style={{ marginLeft: index ? 16 : 0 }}>
                                            <View style={{ padding: 16, borderRadius: 20, width: 180, height: 180, borderColor: COLORS.neutral300, borderWidth: 1, borderBottomWidth: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon width={40} height={40} />
                                                <Text style={{ fontFamily: FONTS.default._500, marginTop: 4 }}>{label}</Text>
                                                <Text style={{ fontFamily: FONTS.default._400, fontSize: 11, textAlign: 'center' }}>{description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}