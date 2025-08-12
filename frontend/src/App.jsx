import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState(null);

	const sendDataToFlask = async () => {
		const res = await fetch("/api/data", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: "React User", age: 25 }),
		});
		const data = await res.json();
		console.log(data);
	};

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/data");
			const data = await res.json();
			setData(data);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Data from Flask:</h1>
			<pre>{JSON.stringify(data, null, 4)}</pre>
			<button onClick={sendDataToFlask}>Send Data to Flask</button>
		</div>
	);
}

export default App;
