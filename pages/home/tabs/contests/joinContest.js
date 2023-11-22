import { ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { SecondaryHeader } from "../../components/secondaryHeader";
import { Constant } from "../../../../utils/constants";
import { useState } from "react";
import UploadVideoIcon from "../../../../assets/icons/upload-video-icon.svg";
import Checkmark from "../../../../assets/icons/checkmark.svg";
import { COLORS, FONTS } from "../../../../styles/styles";

export const JoinContest = ({ route }) => {

    const [videoLink, setVideoLink] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [agreement, setAgreement] = useState(true);

    const { id, title } = route.params;
    if (!id || !title) return <Text>Error</Text>;

    const { joinContest } = Constant;

    const styles = StyleSheet.create({
        title: { fontFamily: FONTS.default._600, fontSize: 16, color: COLORS.neutral500 },
        text: { fontFamily: FONTS.default._400, color: COLORS.neutral500 },
        listNumber: { fontFamily: FONTS.default._600, color: COLORS.neutral500 },
        input : { backgroundColor: COLORS.neutral300, flex: 1, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 12, marginVertical: 8, fontFamily: FONTS.default._400 },
        upload: { backgroundColor: COLORS.blackMain, borderRadius: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
        line: { paddingBottom: 16, borderBottomWidth: 1, marginBottom: 16, borderColor: COLORS.neutral300 }
    });

    return (
        <View style={{ flex: 1 }}>
            <SecondaryHeader {...{ title: 'Join Contest', showIcons: false}} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, marginHorizontal: 16, paddingVertical: 16 }}>
                    <View style={styles.line}>
                        <Text style={styles.title}>Requirement</Text>
                        <Text style={styles.text}>{joinContest.requirement}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.title}>Rules</Text>
                        <View>
                            {joinContest.rules.map((rule, index) => (
                                <View key={index} style={{ flexDirection: 'row', gap: 4, paddingLeft: 8 }}>
                                    <Text style={styles.listNumber}>{index + 1}. </Text>
                                    <Text style={styles.text}>{rule}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Upload Video</Text>
                        <Text style={styles.text}>{joinContest.uploadVideo}</Text>
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <TextInput style={styles.input} value={videoLink} onChangeText={setVideoLink} placeholder="Enter Link" />
                            <TouchableOpacity activeOpacity={.75} style={{ backgroundColor: COLORS.neutral600, width: 40, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                                <UploadVideoIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.title}>Description</Text>
                        <TextInput multiline numberOfLines={4} style={styles.input} textAlignVertical="top" value={videoDescription} onChangeText={setVideoDescription} placeholder="Enter video description" />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4}}>
                            <TouchableOpacity activeOpacity={.75} onPress={() => setAgreement(!agreement)} style={{ borderWidth: 1, width: 14, height: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {agreement && <Checkmark />}
                            </TouchableOpacity>
                            <Text style={styles.text}>{joinContest.agreementNotice}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={.75} style={styles.upload}>
                            <Text style={{ fontFamily: FONTS.default._600, color: COLORS.white}}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}