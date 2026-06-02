(function() {
      const targetDate = new Date("2026-06-09T23:59:59").getTime();

      const daysSpan = document.getElementById("days");
      const hoursSpan = document.getElementById("hours");
      const minutesSpan = document.getElementById("minutes");
      const secondsSpan = document.getElementById("seconds");

      function updateTimer() {
        const now = new Date().getTime();
        let distance = targetDate - now;

        if (distance < 0) {
          daysSpan.textContent = "00";
          hoursSpan.textContent = "00";
          minutesSpan.textContent = "00";
          secondsSpan.textContent = "00";
          const subtitle = document.querySelector('.timer-ring p:first-child');
          if (subtitle) subtitle.textContent = "Darkness has fallen";
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (86400000)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (3600000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60000)) / 1000);

        daysSpan.textContent = days < 10 ? "0" + days : days;
        hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
        minutesSpan.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
      }

      updateTimer();
      const timerInterval = setInterval(updateTimer, 1000);

      document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const timerRing = document.querySelector('.timer-ring');
        if (timerRing) {
          const moveX = (x - 0.5) * 10;
          const moveY = (y - 0.5) * 10;
          timerRing.style.boxShadow = `
            0 0 80px rgba(0, 0, 0, 0.8),
            0 0 120px rgba(20, 0, 5, 0.6),
            ${moveX}px ${moveY}px 60px rgba(30, 5, 10, 0.5),
            inset 0 0 60px rgba(30, 5, 10, 0.5),
            inset 0 0 100px rgba(0, 0, 0, 0.7)
          `;
        }
      });

      window.addEventListener('beforeunload', function() {
        clearInterval(timerInterval);
      });
    })();