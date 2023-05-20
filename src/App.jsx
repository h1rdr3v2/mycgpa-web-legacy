import Logo from "./assets/logo.png"
import Courses from "../components/Courses"
import { Routes, Route, Link } from "react-router-dom"

import "./App.css"

function App() {
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
				<Routes>
					<Route path="/" element={<Courses />} />
				</Routes>
			</div>
		</>
	)
}

export default App
