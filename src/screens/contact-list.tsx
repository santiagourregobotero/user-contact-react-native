import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, selectContacts } from 'redux/reducers/contact-reducer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ApiClient from 'utils/api-client';
import Asset from 'config/assets';
import AvatarImage from 'components/avatar-image';
import Contact from 'model/contact';
import { RootStackParamList } from 'utils/types';

const ContactList = () => {
      const dispatch = useDispatch();
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
      const contacts = useSelector(selectContacts);
      const [contactList, setContactList] = useState<{ title: string, data: Contact[] }[]>([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            fetchContacts();
      }, []);

      useEffect(() => {
            if (contacts) loadContacts();
      }, [contacts]);

      const loadContacts = () => {
            const favoriteItems = contacts.filter(item => item.isFavorite);
            const otherItems = contacts.filter(item => !item.isFavorite);

            setContactList([
                  { title: 'Favorite', data: favoriteItems },
                  { title: 'Other Contacts', data: otherItems },
            ]);
      };

      const fetchContacts = async () => {
            try {
                  const data: Contact[] = await ApiClient.fetchContacts();
                  dispatch(setContacts(data));
                  setLoading(false);
            } catch (error) {
                  console.error('Error fetching contacts: ', error);
                  setLoading(false);
            }
      };

      const onDetail = (item: Contact) => {
            navigation.navigate('ContactDetail', { id: item.id });
      };

      const renderContactItem = ({ item }: { item: Contact }) => (
            <TouchableOpacity style={styles.contactItem} onPress={() => onDetail(item)}>
                  <View style={styles.contactDetails}>
                        <AvatarImage uri={item.smallImageURL} size={50} placeholder={Asset.SMALL_USER_IMG} />
                        <View style={styles.spacer} />
                        <View style={styles.favoriteIconView}>
                              {item.isFavorite && <Image source={Asset.T_STAR_IMG} style={styles.favoriteIcon} />}
                        </View>
                        <View>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text style={styles.companyName}>{item.companyName}</Text>
                        </View>
                  </View>
            </TouchableOpacity>
      );

      const keyExtractor = (item: Contact) => item.id.toString();

      if (loading) {
            return (
                  <View style={styles.loadingContainer}>
                        <Text>Loading...</Text>
                  </View>
            );
      }

      return (
            <View style={styles.container}>
                  <SectionList
                        sections={contactList}
                        renderItem={renderContactItem}
                        keyExtractor={keyExtractor}
                        renderSectionHeader={({ section: { title } }) => (
                              <Text style={styles.section}>{title}</Text>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
                  />
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white'
      },
      loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      contactItem: {
            backgroundColor: 'white',
            padding: 15,
      },
      spacer: {
            marginRight: 10,
      },
      section: {
            fontSize: 14,
            paddingLeft: 15,
            paddingVertical: 3,
            backgroundColor: 'lightgray',
            color: 'black'
      },
      favoriteIconView: {
            width: 20
      },
      favoriteIcon: {
            width: 15,
            height: 15,
            marginBottom: 20,
      },
      contactDetails: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
      },
      name: {
            color: 'black',
            fontSize: 16,
      },
      companyName: {
            color: 'gray',
            fontSize: 14,
      },
      listSeparator: {
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            marginHorizontal: 10,
      },
});

export default ContactList;
