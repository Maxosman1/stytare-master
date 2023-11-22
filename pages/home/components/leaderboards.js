import { Image, Text, View } from "react-native";
import CrownIcon from "../../../assets/icons/crown-secondary.svg";
import { COLORS, FONTS } from "../../../styles/styles";
import { useEffect, useState } from "react";
import { APIService } from "../../../utils/apiservice";
import { Loading } from "../../../common/loading";

const Leaderboard = ({ data, index }) => {

    const { name, profile, category, points, wonPoints } = data;

    return (
        <View style={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: index ? 8 : 0, paddingBottom: 8, borderTopWidth: index ? 1 : 0, borderColor: COLORS.neutral300 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: FONTS.default._500, width: 20 }}>{index + 1}</Text>
                <Image source={profile} alt={name + ' profile pic'} style={{ width: 30, height: 30, borderRadius: 15 }} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ fontFamily: FONTS.default._500 }}>{name}</Text>
                    <View style={{ display: 'flex', gap: 2, alignItems: 'center', flexDirection: "row" }}>
                        <View style={{ position: 'relative', top: -2 }}>
                            <CrownIcon width={12} height={10} />
                        </View>
                        <Text style={{ textTransform: 'capitalize', fontSize: 10, fontFamily: FONTS.default._400 }}>{category}</Text>
                    </View>
                </View>
            </View>
            <View style={{ display: 'flex', alignItems: 'flex-end'}}>
                <Text style={{ fontFamily: FONTS.default._500 }}>
                    {points.toLocaleString()}pts
                </Text>
                <Text style={{ fontFamily: FONTS.default._400, fontSize: 11, color: COLORS.neutral600 }}>
                    Won {wonPoints.toLocaleString()}pts
                </Text>
            </View>
        </View>
    )
}

export const Leaderboards = () => {

    const [leaderboards, setLeaderboards] = useState(null);

    async function fetchLeaderboards() {
        const response = APIService.getLeaderboards();
        if (response) setLeaderboards(response);
        else setLeaderboards('error');
    }

    useEffect(() => {
        fetchLeaderboards();
    }, []);

    if (!leaderboards) return <Loading />;
    else if (leaderboards === 'error') return <Text>Internal Server Error !</Text>;
    else return (
        <View style={{ width: '100%', paddingHorizontal: 16 }}>
            {leaderboards.map((leaderboardData, index) => (
                <Leaderboard {...{data: leaderboardData, index, key: index}} />
            ))}
        </View>
    )
}