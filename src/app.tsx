import * as React from 'react';
import { StripeProvider, Elements} from 'react-stripe-elements';
import Form from './form'

function App(){
    return (
        <>
            <h1>HI2</h1>
            <StripeProvider apiKey='pk_test_51IexqXEi1Zp5FPtuuyn808cPjyqahIaTxoidZLaIKkTDyagZKdhRQq0WYJkPUUzfibiLsVNwnqcGpOzo4IcLb74u0062FlK49x'>
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
        </>
    )
}

export default App;