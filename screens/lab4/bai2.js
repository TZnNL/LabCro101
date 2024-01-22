import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  StyleSheet,
  Text
} from 'react-native';

const Bai2 = () => {
  const [barStyle, setBarStyle] = useState('default');
  const [refreshing, setRefreshing] = useState(false);
    const [getBG, setBG] = useState('white');
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // Thay đổi màu StatusBar khi tải lại hoàn tất
      setBG('black')
      setBarStyle('dark-content');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Đặt StatusBar ở đây để nó nằm trên cùng */}
     
      
      <ScrollView
        style={{...styles.scrollView, backgroundColor: getBG}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            // tintColor= // Màu của chữ "Kéo để tải lại"
            title = "Đang tải lại..."
            titleColor='yellow' // Màu của tiêu đề "Đang tải lại..."
            colors={['red']} // Màu của vòng quay khi tải lại
          />
        }
      >
         <StatusBar
        translucent={false}
        backgroundColor={'transparent'} // Màu của StatusBar khi không tải lại
        barStyle={barStyle} // Kiểu chữ của StatusBar
      />
        {/* Nội dung của ScrollView */}
      <Text style={{ color: 'red', textAlign: 'center', marginTop: 50, width: '100%'}}>Kéo xuống để thấy RefreshControl </Text>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default Bai2;