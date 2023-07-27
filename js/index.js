let elmCarouselInner = document.querySelector(".carousel-inner");

function getBanner() {
  return API_NEWS.get("banner-trang-chus", {
    params: {
      populate: {
        image: {
          fields: ["name", "url"],
        },
      },
    },
  })
    .then((response) => {
      rennderBanner(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function rennderBanner(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    const isActive = i === 1 ? "active" : "";
    str += `<div class="carousel-item ${isActive}">
              <a class="" href="${data[i].attributes.urlTaget}" target="_blank">
                <img src="https://api.vuhuy.xyz${data[i].attributes.image.data.attributes.url}" alt="${data[i].attributes.title}" />
              </a>
              </div>
    `;
  }

  elmCarouselInner.innerHTML = str;
}

new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

const API_URL = "https://api.vuhuy.xyz/api/";
function getAndRenderPosts() {
  const CATE_ID = 1;
  fetch(
    `${API_URL}bai-viets?pagination[page]=1&pagination[pageSize]=6&filters[$and][0][danh_muc][id][$eq]=1&populate[headerImage][fields][]=formats&fields[]=title&fields[]=description&fields[]=slug&fields[]=createdAt&sort[]=createdAt:DESC`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.data) {
        const posts = data.data;
        let html = "";
        for (let i = 0; i < posts.length; i++) {
          const post = posts[i];
          const date = new Date(post.attributes.createdAt).toLocaleDateString(
            "vi",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          html += `
            <div class="col-lg-4">
              <div class="post-box">
                <div class="post-img">
                  <img
                    src="https://api.vuhuy.xyz${post.attributes.headerImage.data.attributes.formats.small.url}"
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

function getGiangVienTieuBieu() {
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
      const elmChuNgiemKhoaContent =
        document.querySelector(".contentgiangvien");
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
          <img src="https://api.vuhuy.xyz${data[i].attributes.avatar.data.attributes.url}" class="img-fluid" alt="${data[i].attributes.avatar.data.attributes.url.hash}" />
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

let swiper = new Swiper(".historySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
});

function onScroll() {
  const elmScholarShip = document.querySelector(".scholarship");
  const rect = elmScholarShip.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Nếu phần tử counter xuất hiện trong viewport (cửa sổ hiển thị)
  if (rect.top < windowHeight) {
    $(".timer").countTo(); // Gọi hàm decimalCounter khi scroll đến phần tử counter
    window.removeEventListener("scroll", onScroll); // Gỡ bỏ sự kiện scroll sau khi gọi hàm
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper("#swiper-2", {
    autoplay: {
      delay: 4000, 
    },
    loop: true,
    navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left",
    },
  });
});


window.addEventListener("scroll", onScroll);

getGiangVienTieuBieu();
getAndRenderPosts();
getBanner();
