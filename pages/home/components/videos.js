import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SecondaryHeader } from "./secondaryHeader"
import { useEffect, useState } from "react"
import { APIService } from "../../../utils/apiservice";
import { Constant } from "../../../utils/constants";
import { COLORS, FONTS } from "../../../styles/styles";
import { VideoCardMain } from "./video";
import { Loading } from "../../../common/loading";

export const VideosScroll = ({ videos, showCreator }) => {
    return (
        <View style={{ marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
            {videos.map(({ id, categoryId, categoryLabel, title, uploadedAt, likes, views, type, thumbnail, creatorName, creatorProfile }) => (
                <VideoCardMain {...{ key: id, id, categoryId, categoryLabel, title, uploadedAt, likes, views, type, thumbnail, creatorName, creatorProfile, showCreator }} />
            ))}
        </View>
    )
}

export const HomeVideos = ({ title }) => {

    const [data, setData] = useState(null);
    const [type, setType] = useState('all');

    const { videoTypes } = Constant;

    async function getVideos(type) {
        const response = APIService.getVideos(type);
        if (response) setData(response);
    }

    function handleTypeChange(type) {
        setType(type);
        getVideos(type);
    }

    useEffect(() => {
        getVideos(type);
    }, []);

    if (!data) return <Loading />;

    return (
        <View style={{ flex: 1}}>
            <SecondaryHeader {...{title, showIcons: true}} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {[{ id: 'all', label: 'All'}, ...videoTypes].map(({id, label}, index) => (
                            <TouchableOpacity key={id} onPress={() => handleTypeChange(id)} activeOpacity={0.75} style={{ marginLeft: index ? 16 : 0, backgroundColor: type === id ? COLORS.blackMain : COLORS.slate, paddingVertical: 4, paddingHorizontal: 16, borderRadius: 14 }}>
                                <Text style={{ color: type === id ? COLORS.white : COLORS.neutral700, fontFamily: FONTS.default._500}}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <VideosScroll videos={data} showCreator={true} />
                </View>
            </ScrollView>
        </View>
    )
}