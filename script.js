// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище браузера
// localStorage. При удалении пользователь должен удаляться не только со страницы,
// но и из локального хранилища localStorage

// const url = "https://jsonplaceholder.typicode.com/users";

// const div = document.querySelector(".wrapper");

// localStorage.clear();

// const getdata = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

// try {

//   const data = await getdata(url);
//   console.log(data);

//   for (let index = 0; index < data.length; index++) {
//     localStorage.setItem(`${index}`, JSON.stringify(data[index]));
//   }

//   data.forEach((element, index) => {
//     div.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card">
//         <p>${index}  Name: ${element.name}</p>
//         <p>  Username: ${element.username}</p>
//         <button>Delete</button>
//       </div>`
//     );
//   });

//   const btns = document.querySelectorAll("button");
//   btns.forEach((btn, ind) => {
//     btn.addEventListener("click", () => {
        
//         const element = document.querySelector(`.wrapper div:nth-child(${(ind+1)})`);
     
//         element.style.display = 'none';
//         console.log(JSON.parse(localStorage.getItem(`${ind}`)));
//         localStorage.removeItem(`${ind}`)

//     });
//   });
// } catch (error) {
//   console.error(`Что то пошло не так`);
// }


// Необязательная задача

// Необходимо реализовать отрисовку
// 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.



const dogURL = "https://dog.ceo/api/breeds/image/random";

const divNew = document.querySelector('.wrapper');

let dogArray = [];

const getdataDog = async (url) => {
  for (let index = 0; index < 10; index++) {
    const res = await fetch(url);
    dogArray.push(await res.json());
  }
  return dogArray;
};

try {
  const data = await getdataDog(dogURL);
  console.log(data);

  // for (let index = 0; index < data.length; index++) {
    data.forEach((element, index) => {
    setTimeout(function() {
      divNew.insertAdjacentHTML(
        "beforeend",
        `<div>
          <img class = "dogPic"src="${element.message}" alt="best dog in the world" />
        </div>`
      );
      
      }, 3000*index)
      
    });
    
  } catch (error) {
    console.error(`Что то пошло не так`);
  }





