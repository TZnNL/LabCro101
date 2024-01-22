import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const App = () => {


    const urlList = [
        { imageUrl: "https://i.pinimg.com/564x/09/1f/2d/091f2d95510cef7f55af7e967d672502.jpg" },
        { imageUrl: "https://i.pinimg.com/236x/23/03/c7/2303c7979340b04219413b6d43322875.jpg" },
        { imageUrl: "https://i.pinimg.com/236x/0e/80/83/0e80837a0bd348508327bbc05b8f451a.jpg" },
        { imageUrl: "https://i.pinimg.com/474x/80/72/4b/80724bf446954acc83e85f67f80ea671.jpg" },
      ];
  const renderItem = ({item}) => (
    <View>
        <Image
            source={{ uri: item.imageUrl}}
            style={styles.image}
        />
    </View>
  );

 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Tùy chọn: 'cover', 'contain', 'stretch', 'repeat', 'center'
  },
});
    return(
        <FlatList
      data={urlList}
      renderItem={renderItem}
      keyExtractor={(item) => item.imageUrl} // Thêm hàm keyExtractor để xác định key của mỗi item
    />
    )
}

export default App;



// const App = () => {



//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     image: {
//       width: 200,
//       height: 200,
//       resizeMode: 'cover', // Tùy chọn: 'cover', 'contain', 'stretch', 'repeat', 'center'
//     },
//   });

//   return (
//     <FlatList
//       data={urlList}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.imageUrl} // Thêm hàm keyExtractor để xác định key của mỗi item
//     />
//   );
// };

// export default App;

