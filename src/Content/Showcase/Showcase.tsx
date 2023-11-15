import * as React from 'react';
import SkillShowcase from './ProductCategories';
import { Grid } from '@mui/material';


export default function Showcase() {
    return (
        <Grid container style={{
            minHeight: '85vh', maxWidth: '100%', overflow: 'hidden', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <SkillShowcase />
        </Grid >
    )
}