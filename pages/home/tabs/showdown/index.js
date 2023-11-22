import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Leaderboards } from "../../components/leaderboards";
import { COLORS, FONTS } from '../../../../styles/styles';
import NewImage from "../../../../assets/images/new-image.png";
import TrendingImage from "../../../../assets/images/trending-image.png";
import { useNavigation } from "@react-navigation/native";

const ShowdownCard = ({ image, title, description, id }) => {

    const navigator = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.75} onPress={() => navigator.navigate(id)} style={{ width: '100%', maxWidth: 230, borderRadius: 10, borderCurve: 30, padding: 24, borderWidth: 1, borderBottomWidth: 3, borderColor: COLORS.neutral300, flex: 1, gap: 4, alignItems: 'center' }}>
            <Image source={image} alt={title + ' illustration'} />
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <Text style={{ fontFamily: FONTS.default._600, fontSize: 20 }}>{title}</Text>
                <Text style={{ color: COLORS.neutral600, fontFamily: FONTS.default._400, textAlign: 'center', fontSize: 12 }}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
};

const ShowdownContainer = ({ label, children }) => (
    <View style={{ flex: 1, gap: 16 }}>
        <Text style={{ fontSize: 20, fontFamily: FONTS.default._500, marginHorizontal: 16 }}>{label}</Text>
        <View style={{ flex: 1, alignItems: 'center', gap: 16 }}>
            {children}
        </View>
    </View>
);

export const Showdown = () => {

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1, gap: 16, paddingTop: 4, paddingBottom: 12 }}>
                <ShowdownContainer label="Showdown">
                    <ShowdownCard id="new" image={NewImage} title="New" description="Dive into fresh, engaging contests" />
                    <ShowdownCard id="trending" image={TrendingImage} title="Trending" description="Join the popular showdowns setting Styrate ablaze" />
                </ShowdownContainer>
                <ShowdownContainer label="Leaderboard">
                    <Leaderboards />
                </ShowdownContainer>
            </View>
        </ScrollView>
    )
}