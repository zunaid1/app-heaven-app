import { FaHome } from "react-icons/fa";

const GradientButton = () => {
	return (
		<button className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl 
    bg-gradient-to-r from-blue-500 to-purple-600 
    hover:from-purple-600 hover:to-blue-500
    transition-all duration-300 
    shadow-lg hover:shadow-2xl 
    hover:scale-105"
		>
			<i class="fa-brands fa-github"></i>
			<a target="_blank" href="https://github.com/zunaid1/app-heaven-app">Contribute</a>
		</button>
	);
};

export default GradientButton;