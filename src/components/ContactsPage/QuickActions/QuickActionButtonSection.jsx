import {StyleSheet, View} from 'react-native';
import QuickActionButton from './QuickActionButton';
import QuickActionsList from './QuickActionsList';

const QuickActionButtonSection = () => {
  return (
    <View style={styles.quickActionButtonSection}>
      {QuickActionsList.map(
        ({title, iconName, buttonColor, textColor}, index) => (
          <QuickActionButton
            key={index}
            title={title}
            iconName={iconName}
            buttonColor={buttonColor}
            textColor={textColor}
          />
        ),
      )}
    </View>
  );
};

export default QuickActionButtonSection;

const styles = StyleSheet.create({
  quickActionButtonSection: {
    flexDirection: 'row',
    gap: 20,
  },
});
