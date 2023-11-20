import { Text } from 'react-native';

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    return <Text className="font-bold text-xl">{props.title}</Text>;
}
