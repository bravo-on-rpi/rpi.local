import './style.css'
import rpi5 from '/rpi-model.png'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hi, Traveller 👋</h1>

    <a href="https://www.raspberrypi.com" target="_blank">
      <img src="${rpi5}" class="logo" alt="Vite logo" />
    </a>
    
    <h1>bravo68web@rpi.local</h1>

    <p class="read-the-docs">
      <a href="https://www.raspberrypi.com/documentation/" target="_blank" rel="noopener">
        Raspberry Pi Docs
      </a>
      <span> - </span>
      <a href="https://github.com/bravo-on-rpi" target="_blank" rel="noopener">
        GitHub (BRAVO68WEB)
      </a>
      <span> - </span>
      <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noopener">
        Raspberry Pi Software Hub
      </a>
    </p>

    <p class="read-the-docs">
      Running on : Raspberry Pi 5 Model B rev 1.0 (8GB)
      <br />
      IP Address : <span id="ip-address"></span>
    </p>
  </div>
`

;(() => {
  fetch('https://ip.zxq.co').then((res) => res.json()).then((data) => {
    document.getElementById('ip-address').textContent = data.ip
  }).catch((err) => {
    console.error(err)
  })
})();