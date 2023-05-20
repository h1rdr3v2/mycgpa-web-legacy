import { useState } from "react"
import Logo from "./assets/logo.png"
// import Calculate from
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="head">
				<img src={Logo} width={142} height={69} alt="logo" />
				<span className="fil-right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5"
					>
						<path
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</div>
			<div className="actionArea">
				<span className="addCourse">
					<svg
						width="37"
						height="37"
						viewBox="0 0 37 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM19.6562 10.4062C19.6562 10.0996 19.5344 9.8055 19.3176 9.58866C19.1008 9.37182 18.8067 9.25 18.5 9.25C18.1933 9.25 17.8992 9.37182 17.6824 9.58866C17.4656 9.8055 17.3438 10.0996 17.3438 10.4062V17.3438H10.4062C10.0996 17.3438 9.8055 17.4656 9.58866 17.6824C9.37182 17.8992 9.25 18.1933 9.25 18.5C9.25 18.8067 9.37182 19.1008 9.58866 19.3176C9.8055 19.5344 10.0996 19.6562 10.4062 19.6562H17.3438V26.5938C17.3438 26.9004 17.4656 27.1945 17.6824 27.4113C17.8992 27.6282 18.1933 27.75 18.5 27.75C18.8067 27.75 19.1008 27.6282 19.3176 27.4113C19.5344 27.1945 19.6562 26.9004 19.6562 26.5938V19.6562H26.5938C26.9004 19.6562 27.1945 19.5344 27.4113 19.3176C27.6282 19.1008 27.75 18.8067 27.75 18.5C27.75 18.1933 27.6282 17.8992 27.4113 17.6824C27.1945 17.4656 26.9004 17.3438 26.5938 17.3438H19.6562V10.4062Z"
							fill="#001A64"
						/>
					</svg>
				</span>
				<div className="courses">
					<div className="course_1">
						<h3 className="course-tagname">course 1</h3>
						<div className="course-details container">
							<input
								type="text"
								className="course--input"
								placeholder="Course Name"
							/>
							<input
								type="text"
								className="course--input"
								placeholder="Grade Scored"
							/>
							<input
								type="text"
								className="course--input"
								placeholder="Credit Load"
							/>
						</div>
					</div>
					<div className="course_2">
						<h3 className="course-tagname">course 2</h3>
						<div className="course-details container">
							<input
								type="text"
								className="course--input"
								placeholder="Course Name"
							/>
							<input
								type="text"
								className="course--input"
								placeholder="Grade Scored"
							/>
							<input
								type="text"
								className="course--input"
								placeholder="Credit Load"
							/>
						</div>
					</div>
				</div>
				<div className="foot">
					<input
						className="calcbtn"
						type="submit"
						value="CALCULATE"
						// onSubmit={calculate()}
					/>
				</div>
			</div>
		</>
	)
}

export default App
