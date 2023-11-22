import { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { APIService } from "../../../../utils/apiservice";
import GreenCircle from "../../../../assets/icons/green-circle.svg";
import CrownSecondary from "../../../../assets/icons/crown-secondary.svg";
import Pencil from "../../../../assets/icons/pencil-icon.svg";
import { COLORS, FONTS } from "../../../../styles/styles";
import { Format } from "../../../../utils/format";
import CaretDown from "../../../../assets/icons/caret-down.svg";
import { VideosScroll } from "../../components/videos";
import { Loading } from "../../../../common/loading";

export const Profile = () => {

    const [data, setData] = useState(null);

    async function getProfileData() {
        const response = APIService.getProfileData();
        if (response) setData(response);
    }

    useEffect(() => {
        getProfileData();
    }, []);

    if (!data) return <Loading />;

    return (
        <ScrollView style={{ flex: 1}}>
            <View style={{ flex: 1, marginHorizontal: 16, paddingVertical: 16 }}>
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={data.image} alt="Profile Pic" style={{ width: 80, height: 80, borderRadius: 40 }} />
                        <GreenCircle style={{ position: 'absolute', bottom: 2, right: 2 }} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <Text style={{ fontFamily: FONTS.default._500, fontSize: 20}}>{data.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, opacity: .75 }}>
                                <CrownSecondary style={{ position: 'relative', bottom: 2 }} />
                                <Text style={{ fontFamily: FONTS.default._400, textTransform: 'capitalize', fontSize: 12 }}>{data.type}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ fontFamily: FONTS.default._400, color: COLORS.neutral600 }}>@{data.username}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Pencil width={20} height={20} style={{ position: 'relative', bottom: 2}} />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 16 }}>
                        <View style={{ display: 'flex', alignItems: 'center'}}>
                            <Text style={{ color: COLORS.neutral600, fontFamily: FONTS.default._400 }}>Points</Text>
                            <Text style={{ fontFamily: FONTS.default._500, fontSize: 24 }}>{Format.shortCount(data.points)}</Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center'}}>
                            <Text style={{ color: COLORS.neutral600, fontFamily: FONTS.default._400 }}>Submission</Text>
                            <Text style={{ fontFamily: FONTS.default._500, fontSize: 24 }}>{Format.shortCount(data.submissions)}</Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center'}}>
                            <Text style={{ color: COLORS.neutral600, fontFamily: FONTS.default._400 }}>Followers</Text>
                            <Text style={{ fontFamily: FONTS.default._500, fontSize: 24 }}>{Format.shortCount(data.followers)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: FONTS.default._400, color: COLORS.neutral500 }}>My Videos</Text>
                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                        <Text style={{ fontFamily: FONTS.default._400, color: COLORS.neutral500 }}>Latest</Text>
                        <View style={{ backgroundColor: COLORS.slate, width: 20, height: 20, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: 2 }}>
                            <CaretDown/>
                        </View>
                    </View>
                </View>
                <VideosScroll videos={data.videos} showCreator={false} />
            </View>
        </ScrollView>
    )
}