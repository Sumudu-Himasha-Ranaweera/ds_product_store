import {
    Card, Container, Stack, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../../../components/Page';
import { PaymentForm } from './Form';


const ContentStyle = styled('div')(({ theme }) => ({
    margin: '5vh 0',
    display: 'flex',
    flexDirection: 'column',
}));


export default function Payment() {

    return (
        <Page title="payment">
            <Container> 
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Payment
                    </Typography>
                </Stack>
                <Card>
                    <Container maxWidth="md">
                        <ContentStyle>  
                            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter Payment details below.</Typography> 
                            <PaymentForm />
                        </ContentStyle>
                    </Container>
                </Card>
            </Container>
        </Page>
    );
}
