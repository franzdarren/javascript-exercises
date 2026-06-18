/*
Create a file named index.html in the same folder with this content:

<!doctype html>


Save the above as index.html and run Live Server (or open index.html in a browser).
*/

// index.js - basic demo script

function formatTime(d){
	return d.toLocaleTimeString();
}

function updateTime(){
	const el = document.getElementById('time');
	if(el) el.textContent = formatTime(new Date());
}

function setup(){
	updateTime();
	setInterval(updateTime,1000);

	const btn = document.getElementById('updateBtn');
	const title = document.getElementById('title');
	if(btn && title){
		btn.addEventListener('click',()=>{
			const msg = prompt('Enter a new message for the page:', title.textContent) || title.textContent;
			title.textContent = msg;
		});
	}
}

if(typeof window !== 'undefined' && document.readyState !== 'loading'){
	setup();
} else if(typeof window !== 'undefined'){
	window.addEventListener('DOMContentLoaded', setup);
} else {
	// If run in Node, print instructions
	console.log('This file is a browser script. Create index.html (see top of this file) and open it in a browser.');
}
