import ImageArtist from '../../components/imageartist';
import { Container, Section } from './style';
import { useLocation } from 'react-router-dom';

export default function Home() {

    const { state } = useLocation();
    const artist = state?.artist; 

    return (
        <Container>
            <Section>
            </Section>
            <Section color="black">
                <ImageArtist artist={artist}></ImageArtist>
            </Section>
        </Container>
    );
}
