import { HomePageLink, Text, AccentText } from './AppLogo.styled';

export default function AppLogo() {
  return (
    <HomePageLink to="/">
      <AccentText>Phone</AccentText>
      <Text>Book</Text>
    </HomePageLink>
  );
}
