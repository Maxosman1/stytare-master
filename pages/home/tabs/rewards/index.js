import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS } from "../../../../styles/styles"
import { APIService } from "../../../../utils/apiservice"
import { useEffect, useState } from "react"
import { Constant } from "../../../../utils/constants"
import { Format } from "../../../../utils/format";
import { Loading } from "../../../../common/loading"

const RewardCard = ({ id, label, points, itemsLeft, image }) => (
    <View style={{ width: '47.5%', paddingVertical: 12, paddingHorizontal: 8, borderRadius: 8, borderColor: COLORS.neutral400, borderWidth: 1, borderBottomWidth: 3, display:'flex', gap: 8 }}>
        <View style={{ position: 'relative'}}>
            <Text style={{ position: 'absolute', top: 4, left: 4, borderRadius: 16, paddingHorizontal: 8, paddingVertical: 2, fontSize: 11, zIndex: 1, color: COLORS.white, backgroundColor: COLORS.blackMain, opacity: .75 }}>{itemsLeft} items left</Text>
            <Image style={{ width: '100%', borderRadius: 8 }} source={image} alt="" />
        </View>
        <View>
            <Format.RewardLabelMarkdown inputString={label} />
            <Text style={{ fontFamily: FONTS.default._600, fontSize: 16, color: COLORS.neutral500, marginBottom: 4 }}>
                <Text>{points.toLocaleString()}</Text>
                <Text>pts</Text>
            </Text>
            <TouchableOpacity activeOpacity={.75} style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 4, borderWidth: 1, borderColor: COLORS.neutral400, borderRadius: 20 }}>
                <Text style={{ fontFamily: FONTS.default._500, fontSize: 12, color: COLORS.neutral600 }}>Redeem prize</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export const Rewards = () => {

    const [data, setData] = useState(null);
    const [tab, setTab] = useState('discounts');

    const { rewardTypes } = Constant;

    async function fetchRewardsData() {
        const response = APIService.getRewards;
        if (response) setData(response);
    }

    useEffect(() => {
        fetchRewardsData();
    }, []);

    if (!data) return <Loading />;

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1, paddingTop: 4 }}>
                <View style={{ display: 'flex', gap: 16 }}>
                    <Text style={{ fontSize: 20, fontFamily: FONTS.default._500, marginHorizontal: 16 }}>Rewards</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontFamily: FONTS.default._500, color: COLORS.neutral500, fontSize: 16 }}>Rewards Balance</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Text style={{ fontFamily: FONTS.default._600, fontSize: 28 }}>{data.balance.toLocaleString()}</Text>
                            <Text style={{ fontFamily: FONTS.default._600, fontSize: 16 }}>pts</Text>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 16, paddingBottom: 0 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {rewardTypes.map(({id, label}, index) => (
                            <TouchableOpacity key={id} onPress={() => setTab(id)} activeOpacity={0.75} style={{ marginLeft: index ? 16 : 0, backgroundColor: tab === id ? COLORS.blackMain : COLORS.slate, paddingVertical: 4, paddingHorizontal: 16, borderRadius: 14 }}>
                                <Text style={{ color: tab === id ? COLORS.white : COLORS.neutral700, fontFamily: FONTS.default._500}}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style={{ fontFamily: FONTS.default._400, color: COLORS.neutral600, marginTop: 16 }}>{rewardTypes.filter(x => x.id === tab)[0].description}</Text>
                </View>
                <View style={{ padding: 16, display: 'flex', flexWrap: 'wrap', flexDirection: 'row', rowGap: 16, justifyContent: 'space-between' }}>
                    {data[tab].map(({ id, label, points, itemsLeft, image }) => (
                        <RewardCard {...{key:id, id, label, points, itemsLeft, image}} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}