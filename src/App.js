import React , {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native'
import ProductList from './pages/ProductList'
import FlexBox from './pages/FlexBox' 
import Position from './pages/Position'
import ProfileList from './pages/ProfileList'
// import BottomNav from './pages/BottomNav'
import  PropsDinamis from './pages/PropsDinamis'
import StateDinamis from './pages/StateDinamis'

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(()=> {
  //     SetIsShow(false)
  //   }, 6000)
  // }, [])
  return (
    <ScrollView style={{ margin: 20 }}>
      <Text style={style.title}>
        Product List
      </Text>

      <ScrollView horizontal>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
        <ProductList></ProductList>
      </ScrollView>

      <Position/>

      { isShow && <FlexBox/>}

      <View>
        
        <Text style={style.title}>FlexBox Layouting Profile</Text> 
        <ScrollView horizontal>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
          <ProfileList/>
        </ScrollView>
      </View>

      {/* <BottomNav/> */}


      <View>
        <Text style={style.title}>Props Dinamis</Text> 
        <PropsDinamis/>
      </View>

      <View>
        <Text style={style.title}>State Dinamis</Text> 
        <StateDinamis/>
      </View>


      <View>
        <Text style={style.title}>Communication</Text> 

      </View>

    </ScrollView>
  )
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16
  }
});

export default App;