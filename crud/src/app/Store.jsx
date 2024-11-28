import counter from '../features/Counterslice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        Counterkey: counter
    }
});
