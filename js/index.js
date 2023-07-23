
new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });



const API_URL = "http://api.vuhuy.xyz/api/";
function getAndRenderPosts() {
  const CATE_ID = 1;
  fetch(`${API_URL}bai-viets?pagination[page]=1&pagination[pageSize]=6&filters[$and][0][danh_muc][id][$eq]=1&populate[headerImage][fields][]=formats&fields[]=title&fields[]=description&fields[]=slug&fields[]=createdAt&sort[]=createdAt:DESC`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.data) {
        const posts = data.data;
        let html = "";
        for (let i = 0; i < posts.length; i++) {
          const post = posts[i];
          const date = new Date(post.attributes.createdAt).toLocaleDateString("vi", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          html += `
            <div class="col-lg-4">
              <div class="post-box">
                <div class="post-img">
                  <img
                    src="http://api.vuhuy.xyz${post.attributes.headerImage.data.attributes.formats.small.url}"
                    class="img-fluid"
                    alt="${post.attributes.headerImage.data.attributes.formats.small.name}"
                  />
                </div>
                <p class="post-date">${date}</p>
                <h3 class="post-title">
                  <a href="new.html?slug=${post.attributes.slug}">${post.attributes.title}</a>
                </h3>
                <p class="description">${post.attributes.description}</p>
              </div>
            </div>
          `;
        }
        const postListElement = document.getElementById("postList");
        postListElement.innerHTML = html;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
getAndRenderPosts();




const API_NEWS = axios.create({
  baseURL: "http://api.vuhuy.xyz/api/",
});

function getChuNghiemKhoa() {
  return API_NEWS.get("giang-viens", {
    params: {
      filters: {
        $and: [
          {
            displayindex: {
              $eq: true,
            },
          },
        ],
      },
      populate: "*",
    },
  })
    .then((response) => {
      const elmChuNgiemKhoaContent = document.querySelector(".contentgiangvien");
      elmChuNgiemKhoaContent.innerHTML = renderCardInfo(response.data.data);
      // return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderCardInfo(data) {
  let strCard = "";
  for (let i = 0; i < data.length; i++) {
    let customDate = dayjs(data[i].attributes.dateofbirth);
    let date = customDate.format("YYYY");
    strCard += `<div class="col-lg-3 col-md-6 col-6 col-md-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div class="teacher">
        <div class="teacher-img">
          <img src="http://api.vuhuy.xyz${data[i].attributes.avatar.data.attributes.url}" class="img-fluid" alt="${data[i].attributes.avatar.data.attributes.url.hash}" />
        </div>
        <div class="teacher-info">
          <h4>${data[i].attributes.name}</h4>
          <span>Chuyên nghành: ${data[i].attributes.major}</span>
        </div>
      </div>
    </div>`;
  }

  return strCard;
}


getChuNghiemKhoa();






