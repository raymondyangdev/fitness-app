import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownSelectorProps {
    initialItems: Array<{}>;
    placeholder: string;
    title: string;
}

const DropdownSelector = ({
    initialItems,
    placeholder,
    title,
}: DropdownSelectorProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(initialItems);

    return (
        <>
            <View className="mx-2">
                <View className="mt-1 mb-2 mx-1">
                    <Text className="font-medium">{title}</Text>
                </View>
            </View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={placeholder}
            />
        </>
    );
};

export default DropdownSelector;
