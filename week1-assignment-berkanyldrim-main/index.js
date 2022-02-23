var XMLHttpRequest = require('xhr2');

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (this.readyState === 0) {
		console.log('request not initialized: ', this.readyState);
	}
	if (this.readyState === 1) {
		console.log('server connection established: ', this.readyState);
	}
	if (this.readyState === 2) {
		console.log('request received: ', this.readyState);
	}
	if (this.readyState === 3) {
		console.log('processing request: ', this.readyState);
	}
	if (this.readyState === 4) {
		console.log('request finished and response is ready: ', this.readyState);
	}
};
xhr.onload = () => {
    
	if (xhr.status === 200 && xhr.readyState === 4) {
		const users = JSON.parse(xhr.responseText);
		console.log(users);
        console.log("Above you see the output of the sample api made with XMLHTTPRequest :)");
	} else {
		console.log('Server response:', xhr.status);
	}
};
xhr.onerror = () => {
	console.log('An error occurred, not able to process the request.');
};
xhr.open('GET', apiUrl, true);
xhr.send();