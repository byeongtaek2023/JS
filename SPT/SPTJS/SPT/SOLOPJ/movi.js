const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDRlODIzZDI1NWI3MGEzZmYyYmQ1YTY4OTM0ODAxNSIsInN1YiI6IjY1MmVhNjJlYTgwMjM2MDBlMGFjNWM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLDzypYiWDVmVxaWuZsOWHjypvnuR6Jrm-rZdI07sLw'
  }
};

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//페치 받아와서 json을  js 배열로 바꿔줌
function sendFetchRequest(url) {
  return fetch(url, options).then((response) => {
    return response.json();
  });
}
//해당 url의 내용을 js 배열로 바꾼 뒤 for반복문 돌려서 카드 생성
async function fetchPost() {
  const datas = await sendFetchRequest(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  );
// console.log(datas.results)
  const lists = datas.results;
  let a = '';
  for (const list of lists) {
    // console.log(`https://image.tmdb.org/t/p/w300_and_h450_bestv2${list.poster_path}`)
 a += `      
 <ul id ="${list.id}">
 <h2>${ list.original_title.toUpperCase()}</h2>
 <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${list.poster_path}'/> 
 <p>${list.overview}</p>
 <p>${list.vote_average}</p>
</ul>
 `;
document.querySelector('.card-list').innerHTML = a
  }
}
fetchPost();


// 검색 영역