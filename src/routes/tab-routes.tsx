import { AnalyticsIcon } from '@/assets/analytics-icon'
import { HomeIcon } from '@/assets/home-icon'
import { Overview } from '@/screens/overview'
import { TabButton, Text } from '@/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled, { useTheme } from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.cyan300};
`

const { Navigator: TabNavigator, Screen: TabScreen } =
  createBottomTabNavigator()

export const TabRoutes = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Container>
      <TabNavigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 26,
            backgroundColor: theme.colors.cyan300,
            borderTopColor: 'transparent',
            elevation: 0,
            width: '70%',
            alignSelf: 'center',
          },
          tabBarIconStyle: {
            width: 24,
            height: 24,
            margin: 0,
          },
          tabBarItemStyle: {
            gap: 10,
            height: 24,
            borderColor: 'transparent',
          },
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.cyan100,
          tabBarActiveBackgroundColor: theme.colors.cyan300,
          tabBarInactiveBackgroundColor: theme.colors.cyan300,
          tabBarLabelPosition: 'beside-icon',
          tabBarButton: ({ children, ...props }) => (
            <TabButton {...props}>{children}</TabButton>
          ),
          tabBarIcon: ({ focused }) =>
            route.name === 'Overview' ? (
              <HomeIcon
                color={focused ? theme.colors.white : theme.colors.cyan100}
              />
            ) : (
              <AnalyticsIcon
                color={focused ? theme.colors.white : theme.colors.cyan100}
              />
            ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              fontFamily={
                focused
                  ? theme.fontFamily.DMSansMedium
                  : theme.fontFamily.DMSansRegular
              }
              fontSize={theme.fontSize.sm16}
              color={color}
              lineHeight={21}
            >
              {route.name === 'Overview' ? 'Geral' : 'Análise'}
            </Text>
          ),
        })}
      >
        <TabScreen name="Overview" component={Overview} />

        <TabScreen name="Analytics" component={Overview} />
      </TabNavigator>
    </Container>
  )
}
