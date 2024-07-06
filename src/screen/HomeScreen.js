
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import HomePlanComponent from '../component/HomePlanComponent';
import ModalTester from '../component/ModalComponent';
import OfferComponent from '../component/OfferComponent';
import { ProgressLoader } from '../component/ProgressLoader';
import Header from '../component/Header';
var id = 0;
const HomeScreen = ({ navigation }) => {
  const [titleText, setTitleText] = useState(null);
  const [plan, setPlan] = useState([{}, {}, {}])
  const [planImage, setPlanImage] = useState()
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [read, setRead] = useState([])
  const [id, setId] = useState()
  const [planType, setPlanType] = useState()
  const [bannerdata, setBannerData] = useState()

  const toggleModal = (id, planType, planImage, openModal) => {
    // setLoading(openModal)
    getReadMore(id, planType, planImage)
    // setLoading(false)
    setModalVisible(!isModalVisible);
  };
  let podthrder = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const getMovies = async () => {
    try {
      const response = await fetch('http://sushantbhardwaj.com/diet/api/offer');
      const json = await response.json();
      let data = json.data[0]
      let offerData =
      {
        id: data.id,
        image: data.image,

      }
      setTitleText(offerData);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  const getPlan = async () => {
    try {
      const response = await fetch('http://sushantbhardwaj.com/diet/api/plans');
      const json = await response.json();
      setPlan(json.data);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  const bannerData = async () => {
    try {
      const response = await fetch('http://sushantbhardwaj.com/diet/api/banner');
      const json = await response.json();
      const josnData = json.data
      let newArray = []
      josnData.map((item) => {
        newArray.push({ img: item.image })
        setBannerData(newArray)
        console.log("bannerData===", bannerdata)
      })

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    bannerData()
    getMovies();
    getPlan();
    getReadMore()
  }, []);

  const navigationData = () => {
    toggleModal();
    navigation.navigate('chatbot')
  }
  const getReadMore = async (id, plan, planImage) => {
    // setLoading(true)
    try {
      // setLoading(true)
      const response = await fetch(`http://sushantbhardwaj.com/diet/api/features/${id}`);
      const json = await response.json();
      let data = json.data
      setRead(data)
      setPlanType(plan)
      setPlanImage(planImage)
      setId(id)
      setModalVisible(!isModalVisible);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  const renderItem = ({ item }) => {

    return (
      <HomePlanComponent
        plan={item?.feature_three}
        textOne={item.title}
        textTwo={item.feature_one}
        textThree={item.feature_two}
        priceOne={item.price}
        priceTwo={item.price}
        special_price={item.special_price}
        button={"Create Diet Profile and Pay"}
        loginLogo={item.image}
        onPress={() => getReadMore(item.id, item.title, item.image, true)}
        color={'#132742'}
        offer={item.discount}
        planColor={'#F79489'}
        chatPress={() => navigation.navigate('chatbot')}
        // chatPress={() => getReadMore(item.id, item.title, item.image)}
        planheadingColor={"#999999"}
        id={item.id}
      />
    )
  }
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#f79489" />
      <ProgressLoader isVisible={loading} />
      <Header
        onPress={() => navigation.pop()}
        chatLogo
      />
      <ScrollView style={{ flex: 1 }}>
        {/* {
          loading == false && */}
        <View style={{ height: '25%', width: '95%', alignSelf: 'center', top: 2 }}>
          <ImageSlider
            data={bannerdata}
            autoPlay={true}
            closeIconColor="#fff"
            onClick={() => console.log('press')}

          />
        </View>
        {/* } */}

        <OfferComponent
          source={titleText != null ? titleText.image : ''}
          discount={titleText != null ? titleText.discount : ''}
        />

        <FlatList
          data={plan}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
      <ModalTester
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        data={read}
        planType={planType}
        planImage={planImage}
        loading={loading}
        modalPress={() => navigationData()}
        id={id}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center',
  }
});

export default HomeScreen;