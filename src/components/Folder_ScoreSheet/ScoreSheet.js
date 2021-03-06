import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ScoreSheet = () => {
    const classList = useSelector((state) => state.classList);

    return (
        <div>
            {classList.map((val, index) => (
                <div
                    className="border border-black" key={index}>
                    <div className="fle">
                        <p>{index + 1}</p>
                        <p>{val.firstName}<br /></p>
                        <p>{val.middleName}<br /></p>
                        <p>{val.lastName}<br /></p>
                        <p>{val.gender.charAt(0)}<br /></p>

                        {val.exams.map((exam, i) => {
                            return (
                                <div key={i}>
                                    <p>{exam.subject}</p>
                                    <p>{exam.score}</p>
                                </div>
                            )
                        })}
                        <NavLink
                            to={{
                                pathname: `/exams/results/${val.firstName} ${val.lastName}`,
                                state: { classList: val }
                            }}>
                            View Results
                        </NavLink>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default ScoreSheet
