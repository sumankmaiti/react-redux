import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function UseCallBack() {
	const [age, setAge] = useState(20)
	const [salary, setSalary] = useState(10000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	},[age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	},[salary])

	return(
		<div>
			<Title />
			<Count text = 'Age' count = {age} />
			<Button handleClick = {incrementAge}> Incremet Age </Button>
			<Count text = 'Salary' count = {salary} />
			<Button handleClick = {incrementSalary}> Increment Salary </Button>
		</div>
	)
}

export default UseCallBack