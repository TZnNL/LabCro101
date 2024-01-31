import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default () => {
  return (
    <ImageBackground style={styles.container} source={require('../../assets/bghoian.jpg')}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.top2}>
            <Text style={{ color: 'white', fontSize: 25 }}> PHO CO HOI AN</Text>
            <Text style={{ color: 'white', fontSize: 25 }}> 5 sao</Text>
          </View>
        </View>
        <View style={styles.bot}>
           <View style={styles.bot1}>
           <Image source={require('../../assets/Location-Outline-32px.png')}/>
            <Text style={{fontSize: 22, color: 'blue', fontWeight: 100}}> Quang nam</Text>
             </View>
             <Text style={{fontWeight: 600, fontSize: 23}}> Thong tin chuyen di</Text>
             <Text style={{lineHeight: 25,
                paddingVertical: 22,

             }}>Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999.</Text>
            
        </View>
        <View style={{
            width: '100%',
            // height: '10%',
            padding: 5,
            alignContent: 'center', 
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor:'blue',
            alignItems: 'center',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            position: "absolute",
            bottom: 0,
        }}> 
            <Text style={{marginHorizontal: 30, fontSize: 20, fontWeight: 'bold', color: 'white'}}> 100$/ngay</Text>
            <TouchableOpacity style={{paddingHorizontal: 35, marginHorizontal: 30, borderRadius: 20, paddingVertical: 15, backgroundColor: 'white',}}>
                <Text style={{ color: 'blue', fontWeight: '500'}}>Dat ngay</Text>
            </TouchableOpacity>
        </View>
        {/* SVG Image */}
        <View style={styles.heartimg}> 
        <Image source={require('../../assets/heart1.png')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  top: {
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  top2: {
    width: '100%',
    position: "absolute",
    bottom: 0,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a background color for visibility
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bot: {
    width: '100%',
    height: '50%',
    position: 'relative',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
    paddingHorizontal: 25
  },
    bot1:{
        flexDirection: 'row'
    },
    heartimg: { backgroundColor:'white',padding: 10, borderRadius: '60%', position: 'absolute', right: 30, top: '49%', zIndex: 99 ,
    elevation: 5, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    }
});
