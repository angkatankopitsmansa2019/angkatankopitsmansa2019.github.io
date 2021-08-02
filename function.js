// FUNCTION MODULE
function checkStorage() {
	return typeof(Storage) !== `undefined`;
}

const loadFormValue = () => {
	return JSON.parse(localStorage.getItem(formValueKey));
}

const saveSettings = (data) => {
	localStorage.setItem(formValueKey, JSON.stringify(data))
}

const checkIn = () => {
	localStorage.setItem(checkInKey, JSON.stringify(getTime()))
}

const latestCheckIn = () => {
	return JSON.parse(localStorage.getItem(checkInKey));
}

const applyDefault = () => {
	const defData = loadFormValue();

        nama.value = defData.nama;
        nomor.value = defData.nomor;
}


const getTime = sptr => {
	const d = new Date();
	
	if(sptr) {
		return `${d.getFullYear()}${sptr}${d.getMonth()+1}${sptr}${d.getDate()}`
	}   return `${d.getFullYear()}${d.getMonth()+1}${d.getDate()}`;
}


const loadAnim = () => {
	kirim.innerHTML = `<span class="material-icons loading">autorenew</span>`;

	setTimeout(()=>{
		const loadingIcon = document.querySelector(`.loading`);
		loadingIcon.classList.add(`loadingAnim`);
	},100);
}

const stopAnim = () => {
	kirim.innerHTML = `kirim`
}

const setStatus = state => {

	if(state == `completed`) {
		status.innerHTML = `<p>Absen hari ini sudah anda isi</p>`;
		status.style.backgroundColor = `#b3ffcc`
	} else {
		status.innerHTML =  `
		<p>Anda belum mengisi absen hari ini</p>`
	}
}

const findSiswa = name => {
	return daftarSiswa.filter(siswa => siswa.nama == name)
}

// SISWA LIST JSON
const daftarSiswa = 
[
	{
		nama : `Abdullah faiz A.A.`,
		nomor : 1,
	},
	{
		nama : `Alfishar Wuekero`,
		nomor : 2,
	},
	{
		nama : `Andini Afrianti`,
		nomor : 3,
	},
	{
		nama : `Angelina I Lumeling`,
		nomor : 4,
	},
	{
		nama : `Angger P.A.W. Sono`,
		nomor : 5,
	},
	{
		nama : `Anggi R.W. Ningrum`,
		nomor : 6,
	},
	{
		nama : `Bagas Pamungkas`,
		nomor : 7,
	},
	{
		nama : `Charles R. Suruan`,
		nomor : 8,
	},
	{
		nama : `Cindy B. Agustin`,
		nomor : 9,
	},
	{
		nama : `Devi Wahyuni`,
		nomor : 10,
	},
	{
		nama : `Dewy febriani A.`,
		nomor : 11,
	},
	{
		nama : `Febi Tri Andini`,
		nomor : 12,
	},
	{
		nama : `Feranni L.K.T. Banne`,
		nomor : 13,
	},
	{
		nama : `Gloria Lengkey`,
		nomor : 14,
	},
	{
		nama : `Jihan Novita`,
		nomor : 15,
	},
	{
		nama : `Khumairah A. Ernas`,
		nomor : 16,
	},
	{
		nama : `M. Irwan Umasugi`,
		nomor : 17,
	},
	{
		nama : `Milka G. Sanadi`,
		nomor : 18,
	},
	{
		nama : `Novian I. Pariama`,
		nomor : 19,
	},
	{
		nama : `Raudatul Fajriah`,
		nomor : 20,
	},
	{
		nama : `Revaldi Siahaan`,
		nomor : 21,
	},
	{
		nama : `Rizka Dwi P.`,
		nomor : 22,
	},
	{
		nama : `Rizkia A.S.`,
		nomor : 23,
	},
	{
		nama : `Shintia Wulandari`,
		nomor : 24,
	},
	{
		nama : `Siti Salma Sahertian`,
		nomor : 25,
	},
	{
		nama : `Siti H. Imbir`,
		nomor : 26,
	},
	{
		nama : `Yuliani Fofid`,
		nomor : 27,
	}
]

