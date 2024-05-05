import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const LeaderBoardBox = ({rank, hashtag, username, likes, feed}) => {
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
      {feed && <View>
        <Button title='like' />
        </View>}
    </View>
  )
}

export default function Feed() {
  const [leaderBoardData, setLeaderBoardData ] = useState([{
    rank: 1,
    hashtag: "hashtag",
    username: "username",
    likes: 10
  }])
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
      {leaderBoardData.map((item) => {
        return <LeaderBoardBox {...item} feed={true} />
      })}
      <StatusBar style="auto" />
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
