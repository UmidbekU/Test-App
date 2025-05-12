import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
    item: any
}

const TransactionHistory = ({ item }: IProps) => {
    const isHighlighted = item.amount === '343 QR';

  return (
    <TouchableOpacity style={styles.container}>
        <View style={[styles.wrapperContent, {marginBottom: 5}]}>
            <Text style={styles.value}>{item.value}</Text>

            {isHighlighted ? (
                <LinearGradient
                    colors={['#6405FF', '#D54CEB']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.statusWrapper}
                >
                    <Image source={require('../../assets/images/ve.png')} style={{width: 14, height: 14, marginRight: 4}} />
                    <Text style={styles.statusText}>{item.amount}</Text>
                </LinearGradient>
            ) : (
                <Text style={[styles.amountText, {color: item.amount === '+43.36 QR'? '#47B445' : ''}]}>{item.amount}</Text>
            )}
        </View>

        <View style={styles.wrapperContent}>
            <Text style={styles.subValue}>{item.subValue}</Text>

            <Text style={styles.subValue}>{item.status}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  subValue: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusWrapper: {
    borderRadius: 12,
    width: 80,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TransactionHistory;
