

import { configureStore } from '@reduxjs/toolkit';
import featureSlice from './FeatureSlice';
import { money } from './Cartslice';

export const store = configureStore({
    reducer: {
        featurekey: featureSlice,
        productkey: money,
    },
});
