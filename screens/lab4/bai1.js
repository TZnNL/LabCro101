import {  FlatList, StyleSheet} from 'react-native';
import DirectoryItem from './DirectoryItem';



const Bai1 = () => {
    const data = [
        {
            id: Math.random().toString(),
            image : 'https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/torch_fire_light_hot_flaming_flare_explorer_adventure_man_person-256.png',
            name: 'Myah',
            occupation: 'it',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/torch_fire_light_hot_flaming_flare_explorer_adventure_man_person-256.png',
            name: 'Atony',
            occupation: 'it',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/torch_fire_light_hot_flaming_flare_explorer_adventure_man_person-256.png',
            name: 'Atony',
            occupation: 'sale',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn4.iconfinder.com/data/icons/treasure-hunter-2/500/torch_fire_light_hot_flaming_flare_explorer_adventure_man_person-256.png',
            name: 'Atony',
            occupation: 'it',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Swith',
            occupation: 'Marketing',
        },
    ]
    return(
        <FlatList style ={styles.flatList} data={data}
        renderItem={(itemData) => {
         return <DirectoryItem id = {itemData.item.id} name={itemData.item.name} image = {itemData.item.image} occupation = {itemData.item.occupation}/>;
       }} 
        alwaysBounceVertical= {false} 
       keyExtractor={(item, index) =>
          {return item.id;
           }}
           >
         </FlatList>
    )
}
export default Bai1;
const styles = StyleSheet.create({
    flatList: {
      backgroundColor: '#F7F7F7',
    },
  });