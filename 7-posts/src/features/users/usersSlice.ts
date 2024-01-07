import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/types';

const initialState = [
    { id: '1', name: 'Dude Lebowski' },
    { id: '2', name: 'Marcus Aurelius' },
    { id: '3', name: 'Miyamoto Musashi' },
    { id: '4', name: 'Bruce Lee' },
    { id: '5', name: 'Yoda' },
    { id: '6', name: 'Obi-Wan Kenobi' },
    { id: '7', name: 'Yugi Motou' },
    { id: '8', name: 'Seto Kaiba' },
    { id: '9', name: 'Joey Wheeler' },
    { id: '10', name: 'Mai Valentine' },
    { id: '11', name: 'Egwene Al\'Vere' },
    { id: '12', name: 'Rand Al\'Thor' },
    { id: '13', name: 'Matrim Cauthon' },
    { id: '14', name: 'Frodo Baggins' },
    { id: '15', name: 'Samwise Gamgee' },
    { id: '16', name: 'Gandalf' },
    { id: '17', name: 'Aragorn' },
    { id: '18', name: 'Legolas' },
    { id: '19', name: 'Gimli' },
    { id: '20', name: 'Leonardo DaVinci' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state: RootState) => state.users;


export default usersSlice.reducer;