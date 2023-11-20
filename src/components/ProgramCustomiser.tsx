import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ProgramCustomiser() {
    const [daySelected, setDaySelected] = useState<string>('3'); // Set a default value

    const days: { [key: string]: number } = {
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
    };

    return (
        <View>
            <View className="flex items-center">
                <Text className="text-xl my-2">
                    How many days do you want to train?
                </Text>
            </View>
            <Picker
                itemStyle={{ height: 44 }}
                selectedValue={daySelected}
                onValueChange={(value) => {
                    setDaySelected(value);
                }}
            >
                {Object.keys(days).map((value) => (
                    <Picker.Item key={value} value={value} label={value} />
                ))}
            </Picker>
        </View>
    );
}
