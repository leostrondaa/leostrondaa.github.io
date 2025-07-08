import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import { reports } from '../../utils/datatest';

export default function Home() {

    return (
        <>
            <NavigationBar />
            <Container className='mt-2'>
                <DataTable 
                    title="Relatórios de Inteligência" 
                    rows={['Data', 'Assunto', 'Policial', 'Ações']}
                    hide={[true, false, true, false]}
                    data={reports}
                    keys={['date', 'subject', 'police']}
                />
            </Container>
        </>
    )
}

