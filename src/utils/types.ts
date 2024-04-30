import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ContactList: undefined;
  ContactDetail: { id: string };
};

export type ContactDetailScreenRouteProp = RouteProp<RootStackParamList, 'ContactDetail'>;

export type ContactDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactDetail'
>;

export type ContactDetailItemType = {
  title: string;
  value: string;
  type?: string | undefined;
};
