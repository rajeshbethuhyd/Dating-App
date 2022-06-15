import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Caption, Headline, Subheading} from 'react-native-paper';
import {Colors} from '../Colors';
import PostActionIcon from '../components/PostActionIcon';
import ReadMore from '@fawazahmed/react-native-read-more';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TestPostScreen() {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <View style={styles.postContainer}>
      <View style={styles.topSection}>
        <View style={styles.auther}>
          {/* <UserAvatar /> */}
          <Text style={styles.autherName}>Full name</Text>
          <Text style={styles.followBtn}>Follow</Text>
        </View>
        <Icon name="dots-vertical" size={25} />
      </View>
      <View>
        <Text style={styles.postTitle}>this is the title of my love story</Text>
        <ReadMore
          numberOfLines={5}
          style={styles.postBody}
          seeMoreStyle={{color: Colors.primary}}
          seeLessStyle={{color: Colors.primary}}>
          jhgd ksgd ashgd KAJHSdg akjshgd kjdh sdjhvf sjdhfb shdfb sjkhdf skjdf
          ksjdhf ksjdfh skjdhf skdjhf skdjfh skjdfhksjdhf skjdhf jhgd ksgd ashgd
          KAJHSdg akjshgd kjdh sdjhvf sjdhfb shdfb sjkhdf skjdf ksjdhf ksjdfh
          skjdhf skdjhf skdjfh jhgd ksgd ashgd KAJHSdg akjshgd kjdh sdjhvf
          sjdhfb shdfb sjkhdf skjdf ksjdhf ksjdfh skjdhf skdjhf skdjfh jhgd ksgd
          ashgd KAJHSdg akjshgd kjdh sdjhvf sjdhfb shdfb sjkhdf skjdf ksjdhf
          ksjdfh skjdhf skdjhf skdjfh jhgd ksgd ashgd KAJHSdg akjshgd kjdh
          sdjhvf sjdhfb shdfb sjkhdf skjdf ksjdhf ksjdfh skjdhf skdjhf
          skdjfhjhgd ksgd ashgd KAJHSdg akjshgd kjdh sdjhvf sjdhfb shdfb sjkhdf
          skjdf ksjdhf ksjdfh skjdhf skdjhf skdjfh jhgd ksgd ashgd KAJHSdg
          akjshgd kjdh sdjhvf sjdhfb shdfb sjkhdf skjdf ksjdhf ksjdfh skjdhf
          skdjhf skdjfh
        </ReadMore>
      </View>
      <View style={styles.bottomAction}>
        <PostActionIcon iconName={isLiked ? 'heart' : 'heart-outline'} />
        <PostActionIcon iconName="chat-outline" />
        <PostActionIcon iconName="share-outline" />
      </View>
      <View style={styles.commentSection}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: Colors.white,
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.ligthgrey2,
  },
  auther: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBtn: {
    color: 'blue',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  autherName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    paddingVertical: 10,
  },
  postTitle: {
    color: Colors.black,
    fontSize: 21,
    fontWeight: '600',
    paddingVertical: 10,
  },
  postBody: {
    fontSize: 18,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  bottomAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 16,
    borderTopColor: Colors.ligthgrey2,
    borderTopWidth: 1,
  },
});
