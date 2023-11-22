import { Text } from "react-native";
import { COLORS, FONTS } from "../styles/styles";

export class Format {

    static RewardLabelMarkdown({ inputString }) {
        const parts = inputString.split('**');
        const components = parts.map((part, index) => {
            if (index % 2 === 0) {
                return <Text key={index} style={{ fontFamily: FONTS.default._400, color: COLORS.neutral600 }}>{part}</Text>;
            } else {
                return (
                    <Text key={index} style={{ fontFamily: FONTS.default._600 }}>
                        {part}
                    </Text>
                );
            }
        });
        return <Text style={{ fontSize: 12 }}>{components}</Text>;
    }

    static shortCount(num) {

        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
        while (num >= 1000 && suffixIndex < suffixes.length - 1) {
            num /= 1000;
            suffixIndex++;
        }
        if (num % 1 !== 0) {
            num = num.toFixed(1);
        }
        return num + suffixes[suffixIndex];

    }

    static time(ISODate) {
        
        const now = new Date();
        const inputDate = new Date(ISODate);
        const milliseconds = now - inputDate;

        if (milliseconds < 60000) {
            return `${Math.floor(milliseconds / 1000)}s`;
        } else if (milliseconds < 3600000) {
            return `${Math.floor(milliseconds / 60000)}m`;
        } else if (milliseconds < 86400000) {
            return `${Math.floor(milliseconds / 3600000)}h`;
        } else if (milliseconds < 604800000) {
            return `${Math.floor(milliseconds / 86400000)}d`;
        } else if (milliseconds < 31449600000) {
            return `${Math.floor(milliseconds / 604800000)}w`;
        } else if (milliseconds < 3144960000000) {
            return `${Math.floor(milliseconds / 31449600000)}y`;
        } else {
            return '99y';
        }
    }

}