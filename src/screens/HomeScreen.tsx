import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  Image,
  StatusBar
} from 'react-native';
import { TodayData, YesterdayData } from '../api/FakeCharts';
import TransactionHistory from '../components/transactionHistory/TransactionHistory';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {

  const sections = [
    {
      title: 'Today',
      data: TodayData,
    },
    {
      title: '5 November',
      data: YesterdayData,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.wrapperContent}>
        <Text style={styles.headerText}>
          Wallet
        </Text>

        <View style={styles.assetsContent}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>Total Balance</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>343.23</Text>

              <Text style={styles.subAmunt}>QR</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Image source={require('../assets/images/l.png')} />

              <Text style={styles.buttonText}>
                Transfer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Image source={require('../assets/images/p.png')} />

              <Text style={styles.buttonText}>
                Top-up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginVertical: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16}}>
            <Text style={styles.transactionsTitle}>Transactions</Text>

            <TouchableOpacity style={{padding: 10, backgroundColor: '#F5F5F5', borderRadius: 16}}>
                <Text style={styles.transactionBtn}>September</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.staticContainer}>
            <View style={[styles.static, {width: '14%', backgroundColor: '#7912FC',}]} />
            <View style={[styles.static, {width: '34%', backgroundColor: '#47B445',}]}/>
            <View style={[styles.static, {width: '49%', backgroundColor: '#FF8C22',}]}/>
          </View>

          <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', marginTop: 16}}>
            <LinearGradient
                colors={['#6405FF', '#D54CEB']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientWrapper}
            >
                <Image source={require('../assets/images/ve.png')} style={{width: 14, height: 14, marginRight: 4}} />
                <Text style={styles.gradientText}>Cashback  55.45 QR</Text>
            </LinearGradient>
          </View>
        </View>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({item}) => <TransactionHistory item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapperContent: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },
  assetsContent: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  },
  balance: {
    fontSize: 13, 
    fontWeight: '500',
    color: '#8C8C8D',
  },
  amountContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  amount: {
    fontSize: 52,
    fontWeight: '800',
  },
  subAmunt: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
    marginLeft: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: '#F5F5F5',
    width: '49%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  transactionsTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  transactionBtn: {
    fontSize: 16,
    fontWeight: '700',
  },
  staticContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  static: {
    height: 10,
    borderRadius: 5,
  },
  gradientWrapper: {
    borderRadius: 12,
    width: 167,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default HomeScreen;
