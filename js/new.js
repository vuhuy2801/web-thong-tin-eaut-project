let elmSinglePost = document.querySelector(".single-post");

const VALUE_SEARCH_PARAMS = new URLSearchParams(window.location.search);
const ARTICLES_ID = VALUE_SEARCH_PARAMS.get("slug");
const URL_DETAILS = `bai-viets?populate=*&filters[$and][0][slug][$eq]=${ARTICLES_ID}`;



const API_NEWS = axios.create({
  baseURL: "http://api.vuhuy.xyz/api/"
 
});



function getPostContent() {
  API_NEWS.get(URL_DETAILS)
    .then((response) => {
      if(response.data.data == ""){
       return;
      }
      renderPostContent(response.data.data[0].attributes);
      // elmHeadTitle.innerHTML = response.data.data.title;
      // renderPostContent(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    
    });
}


function renderPostContent(data) {

  let str = `
  <div class="post-meta">
  <span class="date">EAUT-CNTT</span>
  <span class="mx-1">&bullet;</span>
  <span>Thứ Sáu, 21/10/2022</span>
</div>
 <h1 class="mb-5">${data.title}
 </h1>
 ${data.content}
  `
  
  elmSinglePost.innerHTML = str;
}

getPostContent();

var navContainer = document.getElementById('pills-tab');
navContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('nav-link')) {
    var navLinks = navContainer.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active', 'underline');
    });
    event.target.classList.add('active', 'underline');
    var targetId = event.target.getAttribute('data-bs-target');
    var targetContent = document.querySelector(targetId);
    document.querySelectorAll('.tab-pane').forEach(function(content) {
      content.classList.remove('show', 'active');
    });
    targetContent.classList.add('show', 'active');
  }
});
