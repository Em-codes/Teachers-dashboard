import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/classListSlice';
import { countries, genderList, months } from '../../GlobalData'
import { TextField, Box, Button, Grid, CssBaseline } from '@material-ui/core';
import { Autocomplete, Alert, Snackbar } from '@mui/material';
import MuiButton from '../MuiButton';



import { Save, Close } from '@material-ui/icons'
import useStyles from './Styles';
import GuardianInfo from './GuardianInfo';


const AddNewStudent = ({ toggleAddStudentModal, showAddStudentModal }) => {
	const classes = useStyles();
	const [success, setSuccess] = useState(false)

	// const [toggleModal, setToggleModal] = useState(false)



	const [newStudent, setNewStudent] = useState(
		{
			firstName: "", middleName: "", lastName: "",
			age: "", gender: "", country: "",

			guardianInfo: {
				relationship: '',
				title: '',
			},

			months,
			exams: [
				{
					name: '',
					score: ''
				}
			],

		}
	)


	function handleChange(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			[evt.target.name]: value,
		});

	}
	function handleChange2(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			guardianInfo: {
				...newStudent.guardianInfo,
				[evt.target.name]: value,
			}

		});

	}
	function examScore(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			exams: {
				...newStudent.exams,
				[evt.target.name]: value,
			}

		});

	}



	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addStudent({
				...newStudent,
			}),
			setSuccess(true),
			setTimeout(function () {
				setSuccess(false)
			}, 3000),
		);
		toggleAddStudentModal();
	};


	return (
		showAddStudentModal &&
		<StudentForm onSubmit={onSubmit}>

			<CssBaseline />
			<MuiButton onClick={toggleAddStudentModal} startIcon={<Close />} />

			<div className="inputs-holder">

				{success && <Alert className={classes.alert} variant="filled" severity="success" >Student Added To List</Alert>}

				<TextField value={newStudent.firstName} onChange={handleChange} variant="outlined" label="First Name" name="firstName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.middleName} onChange={handleChange} variant="outlined" label="Middle Name" name="middleName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.lastName} onChange={handleChange} variant="outlined" label="Last Name" name="lastName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.age} onChange={handleChange} variant="outlined" label="Age" name="age" fullWidth className={classes.inputField} />

				{/* <TextField value={newStudent.guardianInfo.relationship} onChange={handleChange2}
					variant="outlined" label="Relationship" name="relationship" fullWidth className={classes.inputField} /> */}
				<TextField value={newStudent.guardianInfo.title} onChange={handleChange2}
					variant="outlined" label="Title" name="title" fullWidth className={classes.inputField} />


				<TextField value={newStudent.exams.maths} onChange={examScore}
					variant="outlined" label="Maths" name="maths" fullWidth className={classes.inputField} />
				<TextField value={newStudent.exams.english} onChange={examScore}
					variant="outlined" label="English" name="english" fullWidth className={classes.inputField} />



				<Autocomplete
					options={genderList} id="combo-box-demo"
					onChange={(event, value) => (newStudent.gender = value.label)}
					renderInput={params => (
						<TextField {...params} label="Select Gender" variant="outlined" fullWidth />
					)}
				/>


				<Autocomplete
					id="country-select-demo"
					sx={{ width: 'auto' }}
					options={countries}
					autoHighlight
					onChange={(event, value) => (newStudent.country = value.label)}
					getOptionLabel={(option) => option.label}
					renderOption={(props, option) => (
						<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
							<img loading="lazy" width="20" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`} alt=""
							/>
							&nbsp; {option.label}  ({option.code})
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							variant="outlined"
							{...params}
							label="Choose a country"
							inputProps={{
								...params.inputProps,
								autoComplete: 'new-password', // disable autocomplete and autofill
							}}
						/>
					)}
				/>
			</div>

			<GuardianInfo handleChange2={handleChange2} guardianRelationship={newStudent.guardianInfo.relationship} />

			<MuiButton type="submit" text="SAVE" startIcon={<Save />} variant="contained" color="primary" />
		</StudentForm>



	);
};

const StudentForm = styled.form`
    background:var(--tertiary);
    position: absolute;
    top:64px;
    right:0;
    width: calc(100vw - 220px);
    height: calc(100vh - 64px);
    padding-left: 33px;
    padding-right: 136px;
`

export default AddNewStudent;
