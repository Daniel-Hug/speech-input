/*global webkitSpeechRecognition */

(function() {
	'use strict';

	if (! ('webkitSpeechRecognition' in window) ) return;

	function capitalize(str) {
		return str.length ? str[0].toUpperCase() + str.slice(1) : str;
	}

	var speechInputWrappers = document.getElementsByClassName('speech-input-wrapper');

	[].forEach.call(speechInputWrappers, function(speechInputWrapper) {
		var finalTranscript = '';
		var recognizing = false;
		var ignoreOnEnd;
		var inputEl = speechInputWrapper.firstElementChild;
		var micBtn = document.createElement('button');
		//var micImg = document.createElement('img');
		var micIcon = document.createElement('span');
		var holderIcon = document.createElement('span');
		micBtn.className = 'icon';
		micIcon.className = 'mic';
		holderIcon.className = 'holder';
		//micImg.src = 'mic.gif';
		micBtn.appendChild(micIcon);
		micBtn.appendChild(holderIcon);
		var inputHeight = inputEl.offsetHeight;
		var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
		var buttonSize = 0.8 * inputHeight;
		micBtn.style.top = 0.1 * inputHeight + 'px';
		micBtn.style.height = micBtn.style.width = buttonSize + 'px';
		inputEl.style.paddingRight = buttonSize - inputRightBorder + 'px';
		speechInputWrapper.appendChild(micBtn);
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;

		recognition.onstart = function() {
			recognizing = true;
			micBtn.classList.add('listening');
		};

		recognition.onerror = function(event) {
			console.log(event.error);
			ignoreOnEnd = true;
		};

		recognition.onend = function() {
			recognizing = false;
			if (ignoreOnEnd) return;
			micBtn.classList.remove('listening');
		};

		recognition.onresult = function(event) {
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					finalTranscript += event.results[i][0].transcript;
				}
			}
			finalTranscript = capitalize(finalTranscript);
			inputEl.value = finalTranscript;
		};

		micBtn.addEventListener('click', function(event) {
			event.preventDefault();
			if (recognizing) {
				recognition.stop();
				return;
			}
			finalTranscript = '';
			recognition.start();
			ignoreOnEnd = false;
			inputEl.value = '';
			//micImg.src = 'mic-slash.gif';
		}, false);
	});
})();