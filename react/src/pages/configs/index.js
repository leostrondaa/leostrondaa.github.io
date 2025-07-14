import ConfigsBar from '../../components/configsbar';
import { Container, Section } from './style';

export default function Configs() {
    return (
        <Container>
            <Section color='black'></Section>
            <Section color='#1C1C1C'>
                <ConfigsBar></ConfigsBar>
            </Section>
        </Container>
    );
}
