import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const NewPostForm = () => {
  const [text, setText] = useState('#');
  const maxLength = 26;

  const handleTextChange = (inputText) => {
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const handleButtonPress = () => {
    console.log("Button pressed");
  };

  return (
    <View >
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        maxLength={maxLength}
        onChangeText={handleTextChange}
        value={text}
        placeholder="Type here..."
      />
      <Text style={styles.remainingText}>
        Characters left: {maxLength - text.length}/{maxLength}
      </Text>
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

export default function NewPost() {
  return (
    <View style={styles.container}>
      <View>
        <Text>1/2 Likes left</Text>
      </View>
      <View>
       <Text>Create Your hashtag</Text>
       <NewPostForm />
      </View>
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
  formContainer: {
    margin: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  remainingText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
});
