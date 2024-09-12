// how to distructured the object

const list = {
    name: "Ali",
    rollno: "8",
    semester: "7th",
    disc: "bscs",
    gpa: 3.5,
    inpass: true,
    Address: {
        city: "landikotal",
        district: "khyber",
    }
}
const {name , Address} = list;
console.log(Address);