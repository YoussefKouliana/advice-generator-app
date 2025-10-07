const url = 'https://api.adviceslip.com/advice';

const adviceId = document.getElementById('advice');
const adviceText = document.getElementById('advice-text');
const newAdviceBtn = document.getElementById('new-advice');

async function getAdvice(){
    try {
        const response =  await fetch(`${url}?t=${Date.now()}`, { cache: 'no-cache' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        adviceId.innerHTML = `Advice #${data.slip.id}`;
        adviceText.innerHTML = `"${data.slip.advice}"`;
    } catch (error) {
        console.log('Error fetching advice:', error);
        adviceText.textContent = "Couldn’t fetch advice. Please try again.";
    }
}
getAdvice();

newAdviceBtn.addEventListener('click', getAdvice);