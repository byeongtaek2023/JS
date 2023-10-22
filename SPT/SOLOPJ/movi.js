const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDRlODIzZDI1NWI3MGEzZmYyYmQ1YTY4OTM0ODAxNSIsInN1YiI6IjY1MmVhNjJlYTgwMjM2MDBlMGFjNWM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLDzypYiWDVmVxaWuZsOWHjypvnuR6Jrm-rZdI07sLw",
  },
};

//페치 받아와서 json을  js 배열로 바꿔줌
function sendFetchRequest(url) {
  return fetch(url, options).then((response) => {
    return response.json();
  });
}
// //해당 url의 내용을 js 배열로 바꾼 뒤 for반복문 돌려서 카드 생성
async function fetchPost(keyword = "") {
  const datas = await sendFetchRequest(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  const lists = datas.results;

  /*;*/

  let a = "";
  // console.log(lists)
  lists
    .filter((obj) => {
      const title = obj.title.toUpperCase();
      const key = keyword.toUpperCase();
      return title.includes(key);
    })
    .forEach((list) => {
      a += `
  <ul id ="${list.id}">
  <h2>${list.original_title.toUpperCase()}</h2>
  <img class='imgclick' data-id="${
    list.id
  }" src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${list.poster_path}'/>
  <p>${list.overview}</p>
  <p>${list.vote_average}</p>
  </ul>
  `;
    });

  document.querySelector(".card-list").innerHTML = a;
  //이미지 클릭시 팝업창 오픈

  imgCl();
}
function imgCl() {
  const imgClick = document.querySelectorAll(".imgclick");
  imgClick.forEach(btn => {
    btn.addEventListener("click", (event) => alert(event.target.dataset.id));
  })
}
const $searForm = document.querySelector("#search_form");

$searForm.addEventListener("submit", (event) => {
  event.preventDefault(); //   ㄴ클릭이나 엔터라는 submit = 이벤트가 발생하면 처리하겠다.
  const $searInput = document.querySelector("#search-input");
  fetchPost($searInput.value);
});

fetchPost();
