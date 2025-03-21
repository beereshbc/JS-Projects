const quotes = [
    { quote: "ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ವಿದ್ಯೆ ಧನಕ್ಕಿಂತ ಶ್ರೇಷ್ಠ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಕಾಲ ಎಲ್ಲವನ್ನೂ ಕಲಿಸುತ್ತದೆ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಮಾತು ಬೆಳ್ಳಿ, ಮೌನ ಬಂಗಾರ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಅತಿ ಆಸೆ ಗತಿ ಕೇಡು.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಸ್ವಲ್ಪ ಕಲಿತವನು ಸರ್ವಜ್ಞನಂತೆ ಮೆರೆಯುತ್ತಾನೆ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಸತ್ಯಕ್ಕೆ ಸಾವಿಲ್ಲ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಉಪಕಾರ ಸ್ಮರಣೆ ಮನುಷ್ಯನ ಗುಣ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಕಷ್ಟವಿಲ್ಲದೆ ಸುಖವಿಲ್ಲ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಆರೋಗ್ಯವೇ ಭಾಗ್ಯ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಕಲಿತ ವಿದ್ಯೆ ಕೈಲಾಸಕ್ಕೆ ದಾರಿ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ದುಡಿಮೆಯೇ ದೇವರು.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಒಗ್ಗಟ್ಟಿನಲ್ಲಿ ಬಲವಿದೆ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಅನುಭವವೇ ಗುರು.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮಾಡಿದ ಕೆಲಸ ಸಿದ್ಧಿಸುತ್ತದೆ.", author: "ಗಾದೆ ಮಾತು" },
    { quote: "ಮೌನಂ ಸರ್ವಾರ್ಥ ಸಾಧನಂ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಜನಸೇವೆ ಜನಾರ್ಧನ ಸೇವೆ.", author: "ಮಾತು" },
    { quote: "ಶ್ರಮವಹಿಸಿ ದುಡಿದರೆ ಫಲ ಸಿಗುವುದು ಖಂಡಿತ.", author: "ಮಾತು" },
    { quote: "ನಮ್ಮ ಭವಿಷ್ಯ ನಮ್ಮ ಕೈಯಲ್ಲಿದೆ.", author: "ಮಾತು" },
    { quote: "ಪರೋಪಕಾರವೇ ಪರಮ ಧರ್ಮ.", author: "ಮಾತು" },
    { quote: "ಸಹನೆಯೇ ಶಕ್ತಿ.", author: "ಮಾತು" },
    { quote: "ನಂಬಿಕೆ ಜೀವನದ ಆಧಾರ.", author: "ಮಾತು" },
    { quote: "ಪ್ರತಿಭೆ ಹುಟ್ಟಿನಿಂದ ಬರುತ್ತದೆ, ಆದರೆ ಪರಿಶ್ರಮದಿಂದ ಅದನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಬೇಕು.", author: "ಮಾತು" },
    { quote: "ಓದುವ ಗೀಳು ಒಂದು ಒಳ್ಳೆಯ ಹವ್ಯಾಸ.", author: "ಮಾತು" },
    { quote: "ಸ್ವಚ್ಛ ಪರಿಸರ, ಆರೋಗ್ಯಕರ ಜೀವನ.", author: "ಮಾತು" },
    { quote: "ಮನೆ ಮೊದಲ ಪಾಠಶಾಲೆ, ತಾಯಿ ಮೊದಲ ಗುರು.", author: "ಮಾತು" },
    { quote: "ಸಮಯ ಅಮೂಲ್ಯವಾದದ್ದು, ಅದನ್ನು ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ.", author: "ಮಾತು" },
    { quote: "ಕಲಿಕೆ ನಿರಂತರ ಪ್ರಕ್ರಿಯೆ.", author: "ಮಾತು" },
    { quote: "ಧೈರ್ಯವೇ ಜೀವನ.", author: "ಮಾತು" },
    { quote: "ಆರೋಗ್ಯವೇ ನಿಜವಾದ ಸಂಪತ್ತು.", author: "ಮಾತು" },
    { quote: "ಸಂತೋಷವೇ ಜೀವನದ ಗುರಿ.", author: "ಮಾತು" },
    { quote: "ಕನಸು ಕಾಣಿ, ಅದನ್ನು ನನಸು ಮಾಡಿ.", author: "ಮಾತು" },
    { quote: "ಎಲ್ಲರನ್ನೂ ಪ್ರೀತಿಸಿ, ಎಲ್ಲರಿಗೂ ಸಹಾಯ ಮಾಡಿ.", author: "ಮಾತು" },
    { quote: "ಸರಳ ಜೀವನ, ಉನ್ನತ ಚಿಂತನೆ.", author: "ಮಾತು" },
    { quote: "ಪರಿಸರವನ್ನು ರಕ್ಷಿಸಿ, ಭವಿಷ್ಯವನ್ನು ಉಳಿಸಿ.", author: "ಮಾತು" },
    { quote: "ಶಿಕ್ಷಣವೇ ಶಕ್ತಿ.", author: "ಮಾತು" },
    { quote: "ಜ್ಞಾನವೇ ಬೆಳಕು.", author: "ಮಾತು" },
    { quote: "ಸತ್ಯಮೇವ ಜಯತೇ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಅಹಿಂಸಾ ಪರಮೋ ಧರ್ಮಃ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಮಾತೃ ದೇವೋ ಭವ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಪಿತೃ ದೇವೋ ಭವ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಆಚಾರ್ಯ ದೇವೋ ಭವ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಅತಿಥಿ ದೇವೋ ಭವ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಉದ್ಯೋಗಂ ಪುರುಷಲಕ್ಷಣಂ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಆಲಸ್ಯಂ ಹಿ ಮನುಷ್ಯಾಣಾಂ ಶರೀರಸ್ಥೋ ಮಹಾರಿಪುಃ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಧರ್ಮೋ ರಕ್ಷತಿ ರಕ್ಷಿತಃ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ತ್ಯಾಗೇನೈಕೇ ಅಮೃತತ್ವಮಾನಶುಃ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ವಸುಧೈವ ಕುಟುಂಬಕಮ್.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಕ್ಷಮೆವ ಪರಮಂ ಬಲಂ.", author: "ಸಂಸ್ಕೃತ ಸುಭಾಷಿತ" },
    { quote: "ಸಂಗಚ್ಛಧ್ವಂ ಸಂವದಧ್ವಂ ಸಂ ವೋ ಮನಾಂಸಿ ಜಾನತಾಮ್.", author: "ವೇದ" },
    { quote: "ಶ್ರದ್ಧಾವಾನ್ ಲಭತೇ ಜ್ಞಾನಂ.", author: "ವೇದ" },
    { quote: "ಮಾತೃಭೂಮಿ ಸ್ವರ್ಗಾದಪಿ ಗರೀಯಸಿ.", author: "ಮಾತು" },
    { quote: "ಸ್ವಾತಂತ್ರ್ಯ ನನ್ನ ಜನ್ಮಸಿದ್ಧ ಹಕ್ಕು.", author: "ಬಾಲ ಗಂಗಾಧರ ತಿಲಕ್" },
    { quote: "ನಾನು ಭಾರತೀಯ, ಭಾರತ ನನ್ನದು.", author: "ಮಾತು" },
    { quote: "ಕಾಯಕವೇ ಕೈಲಾಸ.", author: "ಬಸವಣ್ಣ" },
    { quote: "ದಾಸೋಹ ಭಾವನೆ ಇರಬೇಕು.", author: "ಬಸವಣ್ಣ" },
    { quote: "ವಚನಗಳೇ ವೇದ.", author: "ಬಸವಣ್ಣ" },
    { quote: "ಶರಣು ಶರಣಾರ್ಥಿ.", author: "ಬಸವಣ್ಣ" },
    { quote: "ಅನುಭವ ಮಂಟಪ.", author: "ಬಸವಣ್ಣ" },
    { quote: "ಕಾಲವೇ ಉತ್ತರ.", author: "ಮಾತು" },
    { quote: "ಪ್ರೀತಿಯೇ ದೇವರು.", author: "ಮಾತು" },
    { quote: "ನಗು ಉತ್ತಮ ಔಷಧ.", author: "ಮಾತು" },
    { quote: "ಸಹಾಯ ಹಸ್ತ ಚಾಚು.", author: "ಮಾತು" },
    { quote: "ಕಲಿತು ಬಾಳು ಬೆಳಗು.", author: "ಮಾತು" },
    { quote: "ಸ್ವಾವಲಂಬನೆ ಮುಖ್ಯ.", author: "ಮಾತು" },
    { quote: "ನಿಸ್ವಾರ್ಥ ಸೇವೆ ಮಾಡಿ.", author: "ಮಾತು" },
    { quote: "ಸತ್ಯ ನುಡಿ, ಧರ್ಮ ನಡೆ.", author: "ಮಾತು" },
    { quote: "ಶಾಂತಿ ಮತ್ತು ಸಮಾಧಾನ.", author: "ಮಾತು" },
    { quote: "ಭರವಸೆಯ ಕಿರಣ.", author: "ಮಾತು" },
    { quote: "ಉತ್ಸಾಹವೇ ಯಶಸ್ಸಿನ ಗುಟ್ಟು.", author: "ಮಾತು" },
    { quote: "ಪರಿಶ್ರಮ ಪಡು, ಫಲ ನಿರೀಕ್ಷಿಸು.", author: "ಮಾತು" },
    { quote: "ಕಾಲ ಬದಲಾಗುತ್ತದೆ.", author: "ಮಾತು" },
    { quote: "ಧನಾತ್ಮಕ ಚಿಂತನೆ ಬೆಳೆಸಿ.", author: "ಮಾತು" },
    { quote: "ಸಮಯಕ್ಕೆ ಬೆಲೆ ಕೊಡಿ.", author: "ಮಾತು" },
    { quote: "ಪ್ರಕೃತಿಯನ್ನು ಪ್ರೀತಿಸಿ.", author: "ಮಾತು" },
    { quote: "ಸಮಾಜಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಿ.", author: "ಮಾತು" },
]

const repQuote = document.getElementById('quote');
const auth = document.getElementById('auth');
const selQuote = quotes
// console.log(selQuote);
const dot = document.getElementById('dot');
const fev = []

const refBtn = () => {
    randomQuoteNum = Math.floor((Math.random()* quotes.length) +1 );
    newQuote()
}

const newQuote = () => {
    repQuote.innerHTML = selQuote[randomQuoteNum].quote;
    auth.innerHTML = selQuote[randomQuoteNum].author;
}

const fevSel = () => {

}


function tweet(){
    window.open(href=`https://twitter.com/intent/tweet?text=${selQuote[randomQuoteNum].quote}`,"Tweet Window", "width=600 height=600")
}