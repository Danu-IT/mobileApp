let currentDate = new Date();
let minutes = currentDate.getMinutes();

if(minutes <= 9){
  minutes = '0'.toString() + minutes
}

let dateNow = currentDate.getHours() + ":" + minutes;


export default users = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/67/dc/3c/67dc3cf8d5f3460154840232005dd132.jpg",
    name: "Алексей",
    messages: ["Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"],
    time: dateNow,
  },
  {
    id: 2,
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/921428922390604703/4D3DC0A93767599FDA3B0E215593E829FD16BBB0/",
    name: "Олег",
    messages: ["Lorem Lorem Lorem"],
    time: dateNow,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwQLbPlux3FuvVXVKY4iZPePYMVWQPOlYqQ&usqp=CAU",
    name: "Таня",
    messages: ["Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"],
    time: dateNow,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/ae/8e/fc/ae8efc9438c5538c95c655fc45085be0.jpg",
    name: "Валерий",
    messages: ["Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"],
    time: dateNow,
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCwClY82fg1NinObp7sH_nlRT4Xl9a-lfWA&usqp=CAU",
    name: "Сергей",
    messages: ["Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"],
    time: dateNow,
  },
]