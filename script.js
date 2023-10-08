// STEP //

// 1. Convert semua input huruf menjadi uppercase dan hilangkan semua karakter selain huruf besar
// 2. Karena makna setiap huruf akan bergeser sebanyak 13 huruf, kita perlu mengubah input huruf menjadi angka dahulu dengan memanfaatkan kode ASCII dimana kode ASCII untuk A-Z adalah 65-90 agar bisa melakukan operasi matematika.
// 3. Untuk memperoleh kode yang tepat, berikut langkah yang terpikirkan:

// Misal input adalah "S" dan kita ingin outputnya "F".
// a. Kode ASCII dari "S" adalah 83. Karena range kode ASCII untuk A-Z adalah 65-90, kita perlu mengurangi 83 dengan 65 untuk membawa karakter huruf ke dalam indeks nol berdasarkan alfabet. 83 - 65 = 18
// b. Untuk pergeseran ROT13 kita tambahkan 13 ke 18. 18 + 13 = 31
// c. Alfabet terdiri dari 26 huruf. Jika penjumlahan melebihi 26 dan kita ingin perhitungan kembali lagi ke awal alfabet, kita perlu melakukan operasi modulus. 31 mod 26 menghasilkan sisa 5, bergeser 5 huruf dari awal alfabet.
// d. Supaya masuk ke dalam range kode ASCII yaitu 65-90, kita harus tambahkan 5 dengan 65: 5 + 65 = 70.

// 4. Langkah akhir yaitu mengubah kode ASCII yang di peroleh kembali menjadi huruf yaitu dari 70 --> "F"

function rot13(str) {
	return str.replace(/[A-Z]/g, (letter) => {
		// Mengubah input str menjadi kode ASCII
		const letterCode = letter.charCodeAt(0);

		// Proses ROT13
		const encryptedLetterCode = ((letterCode - 65 + 13) % 26) + 65;

		// Mengubah kode ASCII ke huruf
		return String.fromCharCode(encryptedLetterCode);
	});
}

console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
