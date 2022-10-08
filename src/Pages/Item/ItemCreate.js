import { Card, CardContent, CardHeader,Grid } from '@mui/material';
import React, { useState } from 'react'
import { Steps, Button } from 'rsuite'

function ItemCreate() {
    const [step, setStep] = useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 4 ? 4 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    return (
        <div>
            <Steps current={step}>
                <Steps.Item title="Type/Family/Category Selection" />
                <Steps.Item title="Attribute Selection" />
                <Steps.Item title="Required Attributes Filling" />
                <Steps.Item title="Speciations" />
                <Steps.Item title="Checking" />
            </Steps>
            <br />
            <Card>
                <CardHeader>
                    CreateItem
                </CardHeader>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={12} xs={12} md={12} justifyContent='flex-end' display='flex'>
                            <Button onClick={onPrevious} disabled={step === 0}>
                                Previous
                            </Button>
                            <Button onClick={onNext} disabled={step === 4}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>

    )
}

export default ItemCreate