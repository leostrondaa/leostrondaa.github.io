import ConfigsBar from '../../components/configsbar';
import Catalog from '../../components/catalog';
import { Container, Section, Title, Bio } from './style';

export default function Configs() {
    return (
        <Container>
            <Section color='transparente'>
                <Title>Configs</Title>
                <Bio>ⓘ Esta aplicacao foi desevolvida por Leo Stronda - INFO23</Bio>
            </Section>
            <Section color='#1C1C1C'>
                <ConfigsBar></ConfigsBar>
            </Section>
        </Container>
    );
}
