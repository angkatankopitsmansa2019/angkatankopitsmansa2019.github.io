//DOM
  const settingAbsenbg = document.querySelector(`.blind`);
  const settingAbsen = document.querySelector(`.settings-absen`);
  const SAnama = settingAbsen.childNodes[5];
  const SAnomor = settingAbsen.childNodes[9];
  const alert = document.querySelector(`.alert`);
  const save = document.querySelector(`.save`);
  const changeButton = document.querySelector(`.change-button`);


  const absen = document.querySelector(`.absen`);
  const nama = document.querySelector(`.nama`);
  const nomor = document.querySelector(`.nomor`);
  const deviceInfo = document.querySelector(`.device-info`);

  const status = document.querySelector(`.status`);

  const ubah = document.querySelector(`.change-settings`);
  const kirim = document.querySelector(`.submit-button`);

  const footer = document.getElementsByTagName('footer')[0];



//storage key
  const formValueKey = `formValueKey`;
  const checkInKey = `checkInKey`;



// window load eventlistener
  window.addEventListener(`load`, ()=>{
    if(checkStorage()){

      if(loadFormValue()) { applyDefault();
      }else { 
        settingAbsenbg.removeAttribute(`hidden`);
        document.querySelector(`.save`).removeAttribute(`hidden`); }

      if(latestCheckIn() == getTime()) {
        kirim.setAttribute(`disabled`, '')
        setStatus(`completed`);
      }else { setStatus(`uncompleted`); }

    }else { alert(`browser anda tidak memiliki penyimpanan lokal`) }

    footer.innerHTML = `<p>${getTime(`/`)}</p>`;
    deviceInfo.value = `${screen.height} x ${screen.width} || ${navigator.appVersion}`
  })

 

// setting absen change listener and verification
  settingAbsen.addEventListener(`change`, e => {

    //verification
    let ver1 = null;
    let ver2 = null;
    if(findSiswa(SAnama.value).length == 1) {
      ver1 = true;
      alert.innerHTML = ``;

      if(findSiswa(SAnama.value)[0].nomor == SAnomor.value) {
          ver2 = true;
          alert.innerHTML = ``;
        }else if(SAnomor.value == ``) {
          ver2 = false;
          alert.innerHTML = ``;
        }else {
          ver2 = false;
          alert.innerHTML = `<p>*Nomor tidak sesuai</p>`; }

    }else {
      ver1 = false;
      alert.innerHTML = `<p>*Nama tidak terdaftar</p>` }

    if(ver1 == true && ver2 == true) {
      save.removeAttribute(`disabled`);
      changeButton.removeAttribute(`disabled`);
    }else {
      save.setAttribute(`disabled`, ``);
      changeButton.setAttribute(`disabled`, ``); }
  })



// container eventlistener
  document.querySelector(`.container`).addEventListener(`click`, e => {
    const pointer = e.target.className;
    console.log(pointer);

    if(pointer.includes(`change-settings`)) {
      settingAbsenbg.removeAttribute(`hidden`);
      document.querySelector(`.change-button`).removeAttribute(`hidden`); }

    if(pointer.includes(`save`)) {
      settingAbsenbg.setAttribute(`hidden`, ``);
      document.querySelector(`.save`).setAttribute(`hidden`, ``);  }

    if(pointer.includes(`change-button`)) {
      settingAbsenbg.setAttribute(`hidden`, ``);
      document.querySelector(`.change-button`).setAttribute(`hidden`, ``); }
  })



// setting absen submit listener
  settingAbsen.addEventListener(`submit`, e => {
    e.preventDefault();

    const settings = {
      nama : SAnama.value,
      nomor : SAnomor.value }

    saveSettings(settings);
    applyDefault();
  })



//Up google
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyIKmxdrqhu5TXXdjiny-lVoEwcc39950mI0hQxrk1BPAtchTjRrEVkGpmmIR2uCew7Yg/exec'

  const form = document.forms['form-absen']

  form.addEventListener('submit', e => {
    e.preventDefault()
    loadAnim();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        
        console.log('Success!', response);
        checkIn();
        stopAnim();
        setStatus(`completed`);

        if(latestCheckIn() == getTime()) {
          kirim.setAttribute(`disabled`, '')
        }

      }
      ).catch(error => console.error('Error!', error.message))
  })