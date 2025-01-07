import {View} from 'react-native';
import React from 'react';
import SectionTitle from '../../CommonComponents/SectionTitle';
import QuickActionButtonSection from './QuickActionButtonSection';

const QuickActions = () => {
  return (
    <View>
      <SectionTitle title={'Quick Actions'} />
      <QuickActionButtonSection />
    </View>
  );
};

export default QuickActions;
