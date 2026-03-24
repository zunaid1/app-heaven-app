
const STROAGE_KEY = "installList";
const getInstallationList = () => {
	try {
		const storedApps = localStorage.getItem(STROAGE_KEY);
		return storedApps ? JSON.parse(storedApps) : [];
	}
	catch (error) {
		console.log("LocalStorage parse error: ", error);
		return [];
	}
}

const addToInstallationList = (id) => {
	const storedAppsData = getInstallationList();
	const appId = Number(id);


	if (storedAppsData.includes(appId)) {
		alert("App Already Installed...");
		return false;
	}

	const updatedList = [...storedAppsData, appId];
	localStorage.setItem(STROAGE_KEY, JSON.stringify(updatedList));

	return true;
}




const appIsInstalled = (id) => {
	try {
		const storedApps = localStorage.getItem("installList");

		if (!storedApps) return false;

		const storedAppsData = JSON.parse(storedApps);

		return storedAppsData.includes(Number(id));
	}
	catch (error) {
		console.log("LocalStorage parse error:", error);
		return false;
	}
};









export { addToInstallationList, getInstallationList, appIsInstalled }; 