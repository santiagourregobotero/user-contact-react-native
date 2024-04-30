import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AvatarImage from 'components/avatar-image';
import { toggleFavourite, selectContacts } from 'redux/reducers/contact-reducer';
import { ContactDetailScreenRouteProp, ContactDetailScreenNavigationProp } from 'utils/types';
import { ContactDetailItemType } from 'utils/types';
import Asset from 'config/assets';
import Helper from 'utils/helper';

type Props = {
      route: ContactDetailScreenRouteProp;
      navigation: ContactDetailScreenNavigationProp;
};

const ContactDetail: React.FC<Props> = ({ route, navigation }) => {
      const { id } = route.params;
      const dispatch = useDispatch();
      const contacts = useSelector(selectContacts);
      const contact = contacts.find(contact => contact.id === id);
      const handleFavourite = () => {
            dispatch(toggleFavourite(id));
      }

      if (contact === undefined) {
            return <></>
      }

      React.useLayoutEffect(() => {
            navigation.setOptions({
                  headerRight: () => (
                        <TouchableOpacity style={styles.favouriteIconBtn} onPress={handleFavourite}>
                              <Image
                                    source={contact.isFavorite ? Asset.T_STAR_IMG : Asset.F_STAR_IMG}
                                    style={styles.favoriteIcon}
                              />
                        </TouchableOpacity>
                  ),
            });
      }, [navigation, contact]);

      const renderItem = ({ item }: { item: { title: string; value: string; type?: string } }) => (
            <View style={styles.detailItem}>
                  <Text style={styles.detailTitle}>{item.title}</Text>
                  <View style={styles.detailValueContainer}>
                        <Text style={styles.detailValue}>{item.value}</Text>
                        {item.type && <Text style={styles.typeValue}>{item.type}</Text>}
                  </View>

            </View>
      );
      const phoneData: Array<ContactDetailItemType> = [];

      Object.keys(contact.phone).forEach((key: string) => {
            if (contact.phone[key]) {
                  phoneData.push({ title: 'PHONE', value: contact.phone[key], type: key })
            }
      })

      const detailsData: Array<ContactDetailItemType> = [
            ...phoneData,
            { title: 'EMAIL', value: contact.emailAddress },
            { title: 'ADDRESS', value: `${contact.address.street}\n${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}, ${contact.address.country}` },
            { title: 'BIRTHDAY', value: Helper.formatDate(contact.birthdate) },

      ].filter(item => typeof item === 'object' && 'title' in item && 'value' in item);

      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <AvatarImage uri={contact.largeImageURL} size={100} placeholder={Asset.LARGE_USER_IMG} />
                        <View style={styles.spacer} />
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text style={styles.companyName}>{contact.companyName}</Text>
                  </View>
                  <FlatList
                        data={detailsData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.title + index}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                  />
            </View>
      );
};


const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: 20,
            backgroundColor: 'white'
      },
      header: {
            alignItems: 'center',
            marginBottom: 20,
      },
      name: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black'
      },
      companyName: {
            fontSize: 16,
            color: 'gray',
      },
      spacer: {
            marginBottom: 10,
      },
      detailItem: {
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 10
      },
      detailTitle: {
            fontSize: 14,
            color: 'gray',
            textAlign: 'left',
            width: '60%',
      },
      detailValue: {
            fontSize: 18,
            textAlign: 'left',
            color: 'black'
      },
      typeValue: {
            fontSize: 16,
            textAlign: 'right',
      },
      separator: {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            marginHorizontal: 10
      },
      detailValueContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 10,
      },
      favoriteIconView: {
            marginLeft: 10, // Adjust as needed
      },
      favoriteIcon: {
            width: 20,
            height: 20,
      },
      favouriteIconBtn: {
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
      }
});


export default ContactDetail;
