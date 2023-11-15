simplyCountdown('.simply-countdown', {
   year: 2023, // required
   month: 12, // required
   day: 28, // required
   hours: 9, // Default is 0 [0-23] integer
   minutes: 0, // Default is 0 [0-59] integer
   seconds: 0, // Default is 0 [0-59] integer
   words: { //words displayed into the countdown
      days: { singular: 'hari', plural: 'hari' },
      hours: { singular: 'jam', plural: 'jam' },
      minutes: { singular: 'menit', plural: 'menit' },
      seconds: { singular: 'detik', plural: 'detik' }
   },
   plural: true, //use plurals
   onEnd: function () {
      // your code
      return;
   },
   refresh: 1000, //default refresh every 1s
});

const stickyTop = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');

offCanvas.addEventListener('show.bs.offcanvas', function () {
   stickyTop.style.overflow = 'visible';
});

offCanvas.addEventListener('hidden.bs.offcanvas', function () {
   stickyTop.style.overflow = 'hidden';
});


