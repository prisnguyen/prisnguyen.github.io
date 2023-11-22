document.addEventListener('DOMContentLoaded', function() {
    const welcomeElement = document.getElementById('welcome-text');
    typeText(welcomeElement, welcomeText, 100);
});

function typeText(element, text, delay = 100) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    type();
}

// document.addEventListener("DOMContentLoaded", function () {
//     const toRotate = ["an aspiring CS major.", "a travel addict.", "blah blah"];
//     const introContainer = document.getElementById("introduction");
//     let loopNum = 0;
//     let isDeleting = false;
//     let text = '';
//     let delta = 300 - Math.random() * 100;
//     let index = 0;
//     const period = 2000;
  
//     function tick() {
//       const i = loopNum % toRotate.length;
//       const fullText = toRotate[i];
//       const updatedText = isDeleting
//         ? fullText.substring(0, text.length - 1)
//         : fullText.substring(0, text.length + 1);
  
//       introContainer.innerHTML = updatedText;
  
//       if (isDeleting) {
//         delta /= 2;
//       }
  
//       if (!isDeleting && updatedText === fullText) {
//         isDeleting = true;
//         index--;
//         delta = period;
//       } else if (isDeleting && updatedText === '') {
//         isDeleting = false;
//         loopNum++;
//         index = 0;
//         delta = 500;
//       } else {
//         index++;
//       }
  
//       setTimeout(tick, 50);
//     }
  
//     // Start typing the first line
//     tick();
//   });