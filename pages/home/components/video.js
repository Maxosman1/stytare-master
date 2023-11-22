import { Image, Text, TouchableOpacity, View } from "react-native";
import Heart from "../../../assets/icons/heart.svg";
import Eye from "../../../assets/icons/eye.svg";
import CrownSecondary from "../../../assets/icons/crown-secondary.svg";
import { Format } from "../../../utils/format";
import { COLORS, FONTS } from "../../../styles/styles";
import GoldStar from "../../../assets/icons/gold-star.svg";

export const VideoCardMain = ({ id, categoryId, categoryLabel, title, uploadedAt, likes, views, type, thumbnail, creatorName, creatorProfile, showCreator }) => {

    const styles = {
        icon: 16,
        iconText: { fontFamily: FONTS.default._400, fontSize: 12 },
        iconContainer: { flexDirection: 'row', gap: 2 }
    }

    return (
        <View style={{ width: '47.5%', display: 'flex', gap: 8 }}>
            <View style={{ position: 'relative' }}>
                <Text style={{ position: 'absolute', top: 4, left: 4, borderRadius: 16, paddingHorizontal: 8, paddingVertical: 2, fontSize: 11, zIndex: 1, color: COLORS.white, backgroundColor: COLORS.blackMain, opacity: .75 }}>{categoryLabel}</Text>
                <Image style={{ width: '100%', borderRadius: 8 }} source={thumbnail} alt="" />
                {showCreator && <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, position: 'absolute', zIndex: 1, bottom: 4, left: 4 }}>
                    <Image style={{ width: 22, height: 22, borderRadius: 11 }} source={creatorProfile} />
                    <Text style={{ fontFamily: FONTS.default._500, fontSize: 11, color: COLORS.white }}>{creatorName}</Text>
                </View>}
            </View>
            <View>
                <Text style={{ fontFamily: FONTS.default._600, fontSize: 16, marginBottom: 4 }}>
                    <Text style={{ fontFamily: FONTS.default._600, fontSize: 12, color: COLORS.blackMain }}>{title} </Text>
                    <Text style={{ fontSize: 11, color: COLORS.neutral400 }}> {Format.time(uploadedAt)} ago</Text>
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={.75} style={styles.iconContainer}>
                        <Heart width={styles.icon} height={styles.icon} style={{ position: 'relative', top: 1}} />
                        <Text style={styles.iconText}>{Format.shortCount(likes)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.75} style={styles.iconContainer}>
                        <Eye width={styles.icon} height={styles.icon} style={{ position: 'relative', top: 1}} />
                        <Text style={styles.iconText}>{Format.shortCount(views)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.75} style={styles.iconContainer}>
                        <CrownSecondary width={styles.icon} height={styles.icon} />
                        <Text style={{ textTransform: 'capitalize', fontFamily: FONTS.default._400, fontSize: 12 }}>{type}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const VideoCardSecondary = ({ videoData, index }) => {

    const { title, likes, thumbnail, creatorName, creatorProfile } = videoData;

    const styles = {
        icon: 16,
        iconText: { fontFamily: FONTS.default._400, fontSize: 12 },
        iconContainer: { flexDirection: 'row', gap: 2 }
    }

    return (
        <View style={{ width: '100%', display: 'flex', gap: 8 }}>
            <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center' }}>
                <Image style={{ width: '100%', borderRadius: 8 }} source={thumbnail} alt="" />
                {index < 3 && <View style={{ position: 'absolute', zIndex: 2, top: 16, left: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ position: 'absolute', zIndex: 2, color: COLORS.white, fontFamily: FONTS.default._600 }}>{index + 1}</Text>
                    <GoldStar width={40} height={40} />
                </View>}
                <View style={{ position: 'absolute', zIndex: 1, borderRadius: 8, backgroundColor: COLORS.black, opacity: .65, width: '100%', height: '100%' }} />
                <Image style={{ position: 'absolute', zIndex: 2, width: 180, height: '100%' }} source={thumbnail} alt="" />
            </View>
            <View>
                <Text style={{ fontFamily: FONTS.default._500, color: COLORS.blackMain }}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={creatorProfile} />
                        <Text style={{ fontFamily: FONTS.default._500, fontSize: 12 }}>{creatorName}</Text>
                    </View>
                    <Text style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.iconText}>{Format.shortCount(likes)}</Text>
                        <Text style={styles.iconText}> views</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}