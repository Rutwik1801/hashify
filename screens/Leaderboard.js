import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

const LeaderBoardBox = ({rank, hashtag, username, likes}) => {
  return (
    <View>
      <Text>{rank}</Text>
      <View>
        <Text>{hashtag}</Text>
        <View>
          <Text>{username}</Text>
          <Text>{likes} Likes</Text>
        </View>
      </View>
      <View>
        <Button title='Dislike' />
        <Button title='Like' />
      </View>
    </View>
  )
}

export default function Leaderboard() {
  const [leaderBoardData, setLeaderBoardData ] = useState([{
    rank: 1,
    hashtag: "hashtag",
    username: "username",
    likes: 10
  }])
  return (
    <View style={styles.container}>
      <ScrollView>
      {leaderBoardData.map((item) => {
        return <LeaderBoardBox {...item} />
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
