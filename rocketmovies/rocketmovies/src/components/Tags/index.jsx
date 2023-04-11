import { Container } from "./styles";

export function Tags({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon size={16} />}
    </Container>
  );
}