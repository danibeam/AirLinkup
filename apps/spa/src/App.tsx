import type { ReactElement } from "react";

const App = (): ReactElement => {
	return (
		<div>
			<button
				type="button"
				onClick={async () => {
					const response = await fetch("/api/");
					const data = await response.json();
					console.info(data);
				}}
			>
				click
			</button>
		</div>
	);
};

export default App;
