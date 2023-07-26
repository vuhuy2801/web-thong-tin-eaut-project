let elmAccordionFaq = document.querySelector("#accordionFaq");
let elmToppicId = document.querySelector("#toppicId");
let elmTtnQuestionSubmit = document.querySelector("#btnQuestionSubmit");
let elmModalSendQuetions = new bootstrap.Modal('#modalSendQuetions', {
  keyboard: false
})

elmToppicId.addEventListener("change", () => {
  getDataFaq(elmToppicId.value);
});


function sendSuccess(){
  $("#nameInput").val('');
  $("#emailInput").val('');
  $("#contentInput").val('');
  elmModalSendQuetions.hide();
}

elmTtnQuestionSubmit.addEventListener("click", () => {
  const name = $("#nameInput").val();
  const email = $("#emailInput").val();
  const toppicId = $("#topicIdInput").val();
  const content = $("#contentInput").val();

  const dataSend = 
    {
        "data": {
          "nameQuestion": name,
          "question": content,
          "email": email,
          "topic": toppicId
        }
    }
  ;

  sendQuestion(toppicId, dataSend);
});

function sendQuestion(id, dataSend) {
  API_NEWS
    .post('hoi-daps',dataSend)
    .then(function (response) {
      console.log(response);
      sendSuccess();
     
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getDataFaq(topic) {
  return API_NEWS.get(`hoi-daps`,{
    params: {
      filters: {
        active: {
          $eq: true
        },
        topic: {
          $eq: topic
        }
      },
      populate: "*",
    }   
  })
    .then((response) => {
      console.log(response.data.data);
      renderFaqData(response.data.data);
      // renderPostNews(response.data.data);
      // lastPage = response.data.meta.pagination.pageCount;
      // renderPaginationButton(page);
      // statusButton();
      // return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderFaqData(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {     
    str += `
      <div class="accordion-item">
      <h2 class="accordion-header" id="flush-heading${data[i].attributes.id}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${
          data[i].attributes.id
        }" aria-expanded="false" aria-controls="flush-collapse${data[i].attributes.id}">
        ${data[i].attributes.nameQuestion}: <br>
        ${data[i].attributes.question}
        </button>
      </h2>
      <div id="flush-collapse${
        data[i].attributes.id
      }" class="accordion-collapse collapse" aria-labelledby="flush-heading${
      data[i].attributes.id
    }" data-bs-parent="#accordionFaq">
      <div class="accordion-body">
      Trả lời bởi: ${data[i].attributes.author.data.attributes.name} (admin) <br>
      ${data[i].attributes.answer}
      </div>
      </div>
    </div>
          `;
  }
  elmAccordionFaq.innerHTML = str;
}

// nhận dạng text không dấu
function removeDiacritics(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// tìm kiếm câu hỏi trong accordion-button
$(document).ready(function () {
  $("#searchInput").on("input", function () {
    let searchValue = removeDiacritics($(this).val().toLowerCase());
    $(".accordion-item").each(function () {
      let questionText = removeDiacritics(
        $(this).find(".accordion-button").text().toLowerCase()
      );
      if (questionText.includes(searchValue)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

getDataFaq(elmToppicId.value);
