/*global webkitSpeechRecognition */

(function() {
	'use strict';

	if (! ('webkitSpeechRecognition' in window) ) return;

	var talkMsg = 'start talking';
	var patience = 6;

	function capitalize(str) {
		return str.length ? str[0].toUpperCase() + str.slice(1) : str;
	}

	var speechInputWrappers = document.getElementsByClassName('si-wrapper');

	[].forEach.call(speechInputWrappers, function(speechInputWrapper) {
		// find elements
		var inputEl = speechInputWrapper.querySelector('.si-input');
		var micBtn = speechInputWrapper.querySelector('.si-btn');

		// size and position them
		var inputHeight = inputEl.offsetHeight;
		var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
		var buttonSize = 0.8 * inputHeight;
		micBtn.style.top = 0.1 * inputHeight + 'px';
		micBtn.style.height = micBtn.style.width = buttonSize + 'px';
		inputEl.style.paddingRight = buttonSize - inputRightBorder + 'px';
		speechInputWrapper.appendChild(micBtn);

		// setup recognition
		var finalTranscript = '';
		var recognizing = false;
		var timeout;
		var oldPlaceholder = null;
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;

		function restartTimer() {
			timeout = setTimeout(function() {
				recognition.stop();
			}, patience * 1000);
		}

		recognition.onstart = function() {
			oldPlaceholder = inputEl.placeholder;
			inputEl.placeholder = talkMsg;
			recognizing = true;
			micBtn.classList.add('listening');
			restartTimer();
		};

		recognition.onend = function() {
			recognizing = false;
			clearTimeout(timeout);
			micBtn.classList.remove('listening');
			if (oldPlaceholder !== null) inputEl.placeholder = oldPlaceholder;
		};

		recognition.onresult = function(event) {
			clearTimeout(timeout);
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					finalTranscript += event.results[i][0].transcript;
				}
			}
			finalTranscript = capitalize(finalTranscript);
			inputEl.value = finalTranscript;
			restartTimer();
		};

		micBtn.addEventListener('click', function(event) {
			event.preventDefault();
			if (recognizing) {
				recognition.stop();
				return;
			}
			inputEl.value = finalTranscript = '';
			recognition.start();
		}, false);
	});
})();