import { createSlice } from "@reduxjs/toolkit";

const classListSlice = createSlice({
    name: "classList",
    initialState: [
        {
            id: (Date.now()),
            firstName: 'Tochukwu',
            middleName: 'Emmanuel',
            lastName: 'Onyeyaforo',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            age: '30',
            gender: 'Male',
            country: 'Nigeria',
            guardianInfo: {
                relationship: "Father",
                title: "MR",
                name: "Onobikoko Lobato",
                phoneNumber: "213456435687",
                email: 'lel@gmail.com',
                residence: '12 nano, by lofawe ire bustop',
                occupation: 'Lawyer',
                workMobile: '8947r29070',
                worKAddress: '1 Milo OSIBAjkdshu dhusdlsd h'
            },
            months: [
                {
                    name:'January',
                    week1: {
                        monday: true,
                        tuesday: true,
                        wednesday: false,
                        thursday: false,
                        friday: true
                    },
                    week2: {
                        monday: true,
                        tuesday: true,
                        wednesday: false,
                        thursday: false,
                        friday: true
                    },
                    week3: {
                        monday: true,
                        tuesday: true,
                        wednesday: false,
                        thursday: false,
                        friday: true
                    },
                    week4: {
                        monday: true,
                        tuesday: true,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                },
                {
                    name:'February',
                    week1: {
                        monday: false,
                        tuesday: false,
                        wednesday: true,
                        thursday: true,
                        friday: false
                    },
                    week2: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                    week3: {
                        monday: false,
                        tuesday: false,
                        wednesday: true,
                        thursday: false,
                        friday: false
                    },
                    week4: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                }
            ]
        },
        {
            id: (Date.now()),
            firstName: 'Okeke',
            middleName: 'Lasio',
            lastName: 'Adekunle',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            age: '20',
            gender: 'Female',
            country: 'Ghana',
            guardianInfo: {
                relationship: "Mother",
                title: "MR",
                name: "Onobikoko Lobato",
                phoneNumber: "213456435687",
                email: 'lel@gmail.com',
                residence: '12 nano, by lofawe ire bustop',
                occupation: 'Lawyer',
                workMobile: '8947r29070',
                worKAddress: '1 Milo OSIBAjkdshu dhusdlsd h'
            },
            months: [
                {
                    name:'January',
                    week1: {
                        monday: true,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                    week2: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                    week3: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                    week4: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: true
                    },
                }
            ]
        },


        {
            id: (Date.now()),
            firstName: 'Anazodo',
            middleName: 'Chinwendu',
            lastName: 'LolaToba',
            avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
            age: '210',
            gender: 'Female',
            country: 'Ghana',
            guardianInfo: {
                relationship: "Mother",
                title: "MR",
                name: "Onobikoko Lobato",
                phoneNumber: "213456435687",
                email: 'lel@gmail.com',
                residence: '12 nano, by lofawe ire bustop',
                occupation: 'Lawyer',
                workMobile: '8947r29070',
                worKAddress: '1 Milo OSIBAjkdshu dhusdlsd h'
            },
            months: [
                {
                    name:'February',
                    week1: {
                        monday: true,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false
                    },
                    week2: {
                        monday: false,
                        tuesday: true,
                        wednesday: true,
                        thursday: true,
                        friday: false
                    },
                    week3: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: true,
                        friday: true
                    },
                    week4: {
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: true
                    },
                }
            ]
        },

    ],
    reducers: {
        addStudent: (state, action) => {
            let newStudent = action.payload
            state.push(newStudent);
        },
        toggleAttendance: (state, action) => {
            const index = state.findIndex(
                (val) => val.id === action.payload.id
            );
            state[index].months.week1.monday = action.payload.months.week1.monday
        },

    },
});
export const { addStudent, toggleAttendance } = classListSlice.actions;

export default classListSlice.reducer;