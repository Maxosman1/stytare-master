import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SecondaryHeader } from "../../components/secondaryHeader";
import { useEffect, useState } from "react";
import { APIService } from "../../../../utils/apiservice";
import { COLORS, FONTS } from "../../../../styles/styles";
import { ContestDetailTimer } from "./components/timer";
import { VideosScroll } from "../../components/videos";
import { VideoCardSecondary } from "../../components/video";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../../../common/loading";

export const ContestDetails = ({ route }) => {

    const { id, title } = route.params;
    const [data, setData] = useState(null);

    const navigator = useNavigation();

    async function getContestDetails() {
        const response = APIService.getContestDetails(id);
        if (response) setData(response);
    }

    useEffect(() => {
        getContestDetails();
    }, []);

    if (!id || !title) return <Text>Error</Text>;

    return (
        <View style={{ flex: 1}}>
            <SecondaryHeader {...{ title, showIcons: true }} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex : 1, marginHorizontal: 16, paddingVertical: 16 }}>
                    {!data ? (
                        <Loading />
                    ) : (
                        <View style={{ flex: 1, gap: 16 }}>
                            <View>
                                <Text style={{ fontFamily: FONTS.default._600, color: COLORS.neutral600, fontSize: 20 }}>Description</Text>
                                <Text style={{ fontFamily: FONTS.default._400, color: COLORS.neutral500 }}>{data.description}</Text>
                                <Text>
                                    <Text style={{ fontFamily: FONTS.default._400 }}>Price: </Text>
                                    <Text style={{ fontFamily: FONTS.default._500 }}>{data.price.toLocaleString()} points</Text>
                                </Text>
                            </View>
                            <View>
                                <ContestDetailTimer {...{deadline: data.deadline }} />
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity onPress={() => navigator.navigate('join_contest', { id, title })} activeOpacity={.75} style={{ flex: 1, backgroundColor: COLORS.blackMain, borderRadius: 20, justifyContent: 'center', alignItems: 'center', paddingVertical: 8 }}>
                                    <Text style={{ color: COLORS.white, fontFamily: FONTS.default._600 }}>Join Contest</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.75} style={{ flex: 1, borderColor: COLORS.neutral300, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', paddingVertical: 4 }}>
                                    <Text style={{ color: COLORS.neutral500, fontFamily: FONTS.default._600 }}>My Submissions</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 8, display: 'flex', gap: 16 }}>
                                <Text style={{ fontFamily: FONTS.default._600, color: COLORS.neutral600, fontSize: 20 }}>Top Videos</Text>
                                <View style={{ flexDirection: 'column', gap: 24 }}>
                                    {data.topVideos.map((videoData, index) => (
                                        <VideoCardSecondary {...{ videoData, index, key: index }} />
                                    ))}
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}