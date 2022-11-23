

let yil = +prompt("Tugilgan Yilingiz")
let oy = +prompt("Tugilgan oyingizni kiriting")
let kun = +prompt("Tugilgan kuningizni kiriting")

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDate()
alert(`Siz ${yil - year} yil ${oy - month} oy ${kun - day} kundan buyon tiriksiz`)
