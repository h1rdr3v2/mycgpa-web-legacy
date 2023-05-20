import { useNavigate } from "react-router-dom"

export default function Result({ courseData }) {
	const navigate = useNavigate()
	const GoBack = () => {
		navigate("/")
	}
	console.log(courseData, courseData.length)
	if (courseData.length == 0) {
		GoBack()
	}
	const gpController = (data) => {
		// Solve for it
		let [tcl, totalpoints, cgp, results] = [0, 0, 0, courseData]
		results.forEach((result) => {
			let gradepoint = gradePoint(result.grade)
			tcl += parseInt(result.creditLoad)
			totalpoints += gradepoint * parseInt(result.creditLoad)
		})
		cgp = totalpoints / tcl
		return { tcl, totalpoints, cgp }
	}
	const gradePoint = (l) => {
		var grade = {
			A: 5,
			B: 4,
			C: 3,
			D: 2,
			E: 1,
			F: 0,
		}
		return grade[l]
	}
	const result = gpController(courseData)
	return (
		<div className="results">
			<div className="results--header">
				<span>TCL : {result.tcl}</span>
				<span>Total Points : {result.totalpoints}</span>
				<span>GP : {result.cgp}</span>
			</div>
			<div className="courses">
				<table>
					<thead>
						<tr>
							<th>Courses</th>
							<th>Grade</th>
							<th>Credit Load</th>
						</tr>
					</thead>
					<tbody>
						{courseData.map((course, index) => (
							<tr key={index}>
								<td>{course.courseName}</td>
								<td>{course.grade}</td>
								<td>{course.creditLoad}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div onClick={GoBack} className="results--footer">
				<span>
					<svg
						width="7"
						height="13"
						viewBox="0 0 7 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M6.6131 1.08695C6.82869 1.30261 6.9498 1.59506 6.9498 1.9C6.9498 2.20494 6.82869 2.49739 6.6131 2.71305L2.82615 6.5L6.6131 10.2869C6.82258 10.5038 6.93849 10.7943 6.93587 11.0959C6.93325 11.3974 6.81231 11.6858 6.59909 11.899C6.38587 12.1123 6.09743 12.2332 5.79591 12.2358C5.49438 12.2384 5.20389 12.1225 4.987 11.913L0.386998 7.31305C0.171406 7.09739 0.050293 6.80494 0.050293 6.5C0.050293 6.19506 0.171406 5.90261 0.386998 5.68695L4.987 1.08695C5.20265 0.871357 5.49511 0.750244 5.80005 0.750244C6.10499 0.750244 6.39744 0.871357 6.6131 1.08695Z"
							fill="#001A64"
						/>
					</svg>
				</span>

				<span>Back</span>
			</div>
		</div>
	)
}
