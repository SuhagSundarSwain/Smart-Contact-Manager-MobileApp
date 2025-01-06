import {Dimensions} from 'react-native';

const isTablet = () => {
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;
  return aspectRatio < 1.6;
};

export default isTablet;
