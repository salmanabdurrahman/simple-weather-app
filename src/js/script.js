const title = document.querySelector('#title');
const weatherForm = document.querySelector('#weatherForm');
const cityNameInput = document.querySelector('#cityNameInput');
const displayImage = document.querySelector('#displayImage');
const displayTemperature = document.querySelector('#displayTemperature');
const displayStatus = document.querySelector('#displayStatus');
const displayTime = document.querySelector('#displayTime');

weatherForm.addEventListener('submit', async event => {
	event.preventDefault();
	const cityName = cityNameInput.value.toLowerCase().trim();

	if (cityName === '') {
		displayError('Enter a city name!');
	} else {
		await getWeatherData(cityName);
	}
});

async function getWeatherData(cityName) {
	const apiKey = '20ef838e1de2c1d4998e0ef1b4a95f44';

	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

		if (response.ok) {
			const data = await response.json();
			displayWeatherInfo(data);
		} else {
			throw new Error('Could not fetch data from server');
		}
	} catch (error) {
		console.error(error);
		displayError(error);
	}
}

function displayWeatherInfo(data) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const time = new Date();
	const {
		main: { temp },
		weather: [{ id, description }],
	} = data;
	const temperature = (temp - 273.15).toFixed(1);
	const day = time.getDay();
	const hour = time.getHours();
	const date = time.getDate().toString().padStart(2, '0');
	const month = time.getMonth();
	const status = description;

	getWeatherImage(id, hour);
	displayTemperature.textContent = `${temperature}°`;
	displayStatus.textContent = status;
	displayTime.textContent = `${days[day]}, ${date} ${months[month]}`;
}

function getWeatherImage(id, hour) {
	let imageUrl = '';

	switch (true) {
		case id <= 232 && id >= 200:
			imageUrl = '11';
			break;
		case id <= 321 && id >= 300:
			imageUrl = '09';
			break;
		case id <= 504 && id >= 500:
			imageUrl = '10';
			break;
		case id <= 511 && id >= 531:
			imageUrl = '09';
			break;
		case id <= 622 && id >= 600:
			imageUrl = '13';
			break;
		case id <= 781 && id >= 701:
			imageUrl = '50';
			break;
		case id == 800:
			imageUrl = '01';
			break;
		case id == 801:
			imageUrl = '02';
			break;
		case id == 802:
			imageUrl = '03';
			break;
		case id <= 804 && id >= 803:
			imageUrl = '04';
			break;
		default:
			displayError('Invalid Weather Condition!');
			break;
	}

	if (hour <= 12 && hour >= 1) {
		imageUrl += 'd';
	} else {
		imageUrl += 'n';
	}

	if (imageUrl == '50d' || imageUrl == '50n') {
		title.classList.remove('bg-darkGray');
		title.classList.remove('bg-orange');
		title.classList.add('bg-ligthGray');
	} else if (imageUrl == '01d' || imageUrl == '02d' || imageUrl == '10d') {
		title.classList.remove('bg-ligthGray');
		title.classList.remove('bg-darkGray');
		title.classList.add('bg-orange');
	} else {
		title.classList.remove('bg-orange');
		title.classList.remove('bg-ligthGray');
		title.classList.add('bg-darkGray');
	}

	displayImage.src = `src/images/${imageUrl}@2x.png`;
}

function displayError(error) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: toast => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	});
	Toast.fire({
		icon: 'error',
		title: `${error}`,
	});
}
