window.onload = function() {
  let flipEl = document.querySelector('.flip');
  let suiteEls = document.querySelectorAll('.suite');
  let numberEl = document.querySelector('.number');
  let countdownEl = document.querySelector('.countdown');
  let progressEl = document.getElementById('progressBar');

  flipEl.addEventListener('click', flipIt);

  // flip card
  function flipIt() {
    const suites = ['heart', 'spade', 'club', 'diamond'];
		const numNum = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    // function ranNum(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // }
    // const newNum = ranNum(2, 10);
    // numberEl.innerHTML = newNum;

    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
    }
    const result = getRandomItem(suites);
		const ranNum = getRandomItem(numNum);

		numberEl.innerHTML = ranNum;
    
    for (const suiteEl of suiteEls) {
      suiteEl.src = `img/${result}.svg`;
    }
		if (result == 'heart' || result == 'diamond') {
			numberEl.classList.add('red');
			console.log('red');
		}
		else {
			numberEl.classList.remove('red');
			console.log('black');
		}
  }

  // timer
  let timeleft = 10;
  let downloadTime = setInterval(function() {
    if (timeleft <= 10 && timeleft > -1) {
			progressEl.value = 10 - timeleft;
			timeleft -= 1;
			countdownEl.innerHTML = timeleft + 1;
			console.log('c');
		}
		if (timeleft <= -1) {
			flipIt();
			clearInterval(downloadTime);
			timeleft -= 1;
			progressEl.value = 0;
			countdownEl.innerHTML = '10';
			console.log('a');
    }
  }, 1000);

  // change dimensions
  let widthEl = document.getElementById('width');
  let heightEl = document.getElementById('height');
  let submitEl = document.getElementById('submit');
  submitEl.addEventListener('click', changeWidth);

  function changeWidth() {
    document.querySelector('.card').style.width = widthEl.value + 'px';
    document.querySelector('.card').style.height = heightEl.value + 'px';
  }
};