import React from "react"

export default function Result({ courseData }) {
	return (
		<div className="results">
			<div className="results--header">
				<span>TCL : 90</span>
				<span>Total Points : 90</span>
				<span>GP : 5.0</span>
			</div>
			<h2>Result Page</h2>
			<ul>
				{courseData.map((course, index) => (
					<li key={index}>
						<strong>Course Name:</strong> {course.courseName},{" "}
						<strong>Grade:</strong> {course.grade},{" "}
						<strong>Credit Load:</strong> {course.creditLoad}
					</li>
				))}
			</ul>
		</div>
	)
}
