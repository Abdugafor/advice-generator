const advice = document.querySelector('#advice'),
      adviceNumber = document.querySelector('#advice-number'),
      btn = document.querySelector('#btn'),
      error = document.querySelector('.pop-up')

btn.addEventListener('click', () => {
    btn.classList.add('rotate')
    
    setTimeout (() => { btn.classList.remove('rotate') }, 500)

    fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(json => {
        adviceNumber.textContent = `#${json.slip.id}`
        advice.textContent = `"${json.slip.advice}"`
    })
    .catch(() => {
        advice.textContent = "Error, check internet connection"
        advice.style.color = '#cf4545'
    })
})
