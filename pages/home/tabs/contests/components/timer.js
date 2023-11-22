import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS } from "../../../../../styles/styles";

const ContestDetailTimerCalculator = (date) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };
  

export const ContestDetailTimer = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState(ContestDetailTimerCalculator(deadline));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(ContestDetailTimerCalculator(deadline));
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    const rendercards = [
        { label: 'Days', content: timeLeft.days },
        { label: 'Hours', content: timeLeft.hours },
        { label: 'Minutes', content: timeLeft.minutes },
        { label: 'Seconds', content: timeLeft.seconds }
    ]

    return (
        <View style={{ flexDirection: 'row', gap: 12 }}>
            {rendercards.map(({label, content}, index) => (
                <View key={index} style={{ flex: 1, alignItems: 'center', gap: 6 }}>
                    <Text style={{ fontFamily: FONTS.default._500, color: COLORS.neutral500, fontSize: 12 }}>{label}</Text>
                    <View style={{ width: '100%', borderWidth: 1, borderBottomWidth: 3, borderColor: COLORS.neutral300, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60 }}>
                        <Text style={{ fontFamily: FONTS.default._600, fontSize: 20 }}>{content}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}