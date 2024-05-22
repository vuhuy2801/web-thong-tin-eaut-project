// let elmModalSendFeedBack;
// // render feedback box

// function renderFeedbackBox() {
//     var chatbox = document.createElement("div");
//     chatbox.innerHTML = `        <div class="feedback">
//   <div
//       class="icon"
//       data-bs-toggle="modal"
//       data-bs-target="#modalSendFeedBack"
//   >
//       <img src="images/icon/feedback.gif" alt="feedback" />
//   </div>
//   <div class="content"><b>Đóng góp ý kiến</b></div>
//   <div
//       class="modal fade"
//       id="modalSendFeedBack"
//       tabindex="-1"
//       aria-labelledby="modalSendFeedBackLabel"
//       aria-hidden="true"
//   >
//       <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//               <div class="modal-header">
//                   <h1
//                       class="modal-title fs-5"
//                       id="modalSendFeedBackLabel"
//                   >
//                       Đóng góp ý kiến
//                   </h1>
//                   <button
//                       type="button"
//                       class="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                   ></button>
//               </div>
//               <div class="modal-body">
//                   <form
//                       class="form-contact"
//                       data-aos="fade-up"
//                       data-aos-delay="200"
//                   >
//                       <div class="row gy-4">
//                           <span>Bạn thích gì ở trang web này?</span>
//                           <div class="col-6">
//                               <div class="form-check">
//                                   <input
//                                       class="form-check-input"
//                                       type="checkbox"
//                                       value=""
//                                       id="likeEasyToUse"
//                                   />
//                                   <label
//                                       class="form-check-label"
//                                       for="likeEasyToUse"
//                                   >
//                                       Giao diện dễ sử dụng.
//                                   </label>
//                               </div>
//                               <div class="form-check">
//                                   <input
//                                       class="form-check-input"
//                                       type="checkbox"
//                                       value=""
//                                       id="likeUsefulContent"
//                                   />
//                                   <label
//                                       class="form-check-label"
//                                       for="likeUsefulContent"
//                                   >
//                                       Nội dung thông tin hữu ích.
//                                   </label>
//                               </div>
//                           </div>
//                           <div class="col-6">
//                               <div class="form-check">
//                                   <input
//                                       class="form-check-input"
//                                       type="checkbox"
//                                       value=""
//                                       id="likeFastPageLoading"
//                                   />
//                                   <label
//                                       class="form-check-label"
//                                       for="likeFastPageLoading"
//                                   >
//                                       Tốc độ tải trang nhanh.
//                                   </label>
//                               </div>
//                               <div class="form-check">
//                                   <input
//                                       class="form-check-input"
//                                       type="checkbox"
//                                       value=""
//                                       id="likeInteractivity"
//                                   />
//                                   <label
//                                       class="form-check-label"
//                                       for="likeInteractivity"
//                                   >
//                                       Khả năng tương tác.
//                                   </label>
//                               </div>
//                           </div>
//                           <div class="col-md-12">
//                               <span
//                                   >Nếu chấm điểm cho website này bạn chấm
//                                   mấy điểm?</span
//                               >
//                               <select
//                                   class="form-select"
//                                   id="ratingInput"
//                               >
//                                   <option value="1" selected>
//                                       1 điểm
//                                   </option>
//                                   <option value="2">2 điểm</option>
//                                   <option value="3">3 điểm</option>
//                                   <option value="4">4 điểm</option>
//                                   <option value="5">5 điểm</option>
//                               </select>
//                           </div>
//                           <div class="col-md-12">
//                               <span
//                                   >Theo bạn website này có hữu ích cho
//                                   việc cập nhật thông tin của khoa
//                                   không?</span
//                               >
//                               <select
//                                   class="form-select"
//                                   id="usefulForUpdatesInput"
//                               >
//                                   <option value="có" selected>có</option>
//                                   <option value="không">không</option>
//                               </select>
//                           </div>
//                           <div class="col-md-12">
//                               <textarea
//                                   class="form-control"
//                                   name="message"
//                                   rows="6"
//                                   placeholder="Nhập ý kiến đóng góp tại đây ..."
//                                   required
//                                   id="feedbackInput"
//                               ></textarea>
//                               <div
//                                   class="invalid-feedback"
//                                   id="feedbackError"
//                               >
//                                   Vui lòng nhập nội dung câu hỏi.
//                               </div>
//                           </div>
//                       </div>
//                   </form>
//               </div>
//               <div class="modal-footer">
//                   <button
//                       type="button"
//                       class="btn btn-secondary"
//                       data-bs-dismiss="modal"
//                   >
//                       Hủy
//                   </button>
//                   <button
//                       type="button"
//                       class="btn btn-primary"
//                       onclick="handleSendFeedback()"
//                   >
//                       <span class="button-text">Gửi</span>
//                       <span class="loading-spinner"></span>
//                   </button>
//               </div>
//           </div>
//       </div>
//   </div>
// </div>
// <div
// class="modal fade"
// id="modalResultFeedback"
// tabindex="-1"
// aria-labelledby="modalResultFeedbackLabel"
// aria-hidden="true"
// >
// <div class="modal-dialog modal-dialog-centered">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h1 class="modal-title fs-5" id="modalResultFeedbackLabel">Thành công</h1>
//       <button
//         type="button"
//         class="btn-close"
//         data-bs-dismiss="modal"
//         aria-label="Close"
//       ></button>
//     </div>
//     <div class="modal-body" id="modalResultFeedbackBody" style="font-size:16px"></div>
//     <div class="modal-footer">
//       <button
//         type="button"
//         class="btn btn-primary"
//         data-bs-dismiss="modal"
//       >
//         Đóng
//       </button>
//     </div>
//   </div>
// </div>
// </div>


// `;

//     // Đặt chatbox vào body
//     document.body.appendChild(chatbox);
//     elmModalSendFeedBack = new bootstrap.Modal(
//         document.getElementById("modalSendFeedBack")
//     );
// }

// renderFeedbackBox();

// async function handleSendFeedback() {
//     let elmInputLikeEasyToUse = document.querySelector("#likeEasyToUse");
//     let elmInputLikeFastPageLoading = document.querySelector(
//         "#likeFastPageLoading"
//     );
//     let elmInputLikeInteractivity =
//         document.querySelector("#likeInteractivity");
//     let elmInputLikeUsefulContent =
//         document.querySelector("#likeUsefulContent");
//     const IPCLIENT = await getIpClient();
//     let elmRatingInput = document.querySelector("#ratingInput");
//     let elmUsefulForUpdatesInput = document.querySelector(
//         "#usefulForUpdatesInput"
//     );
//     let elmFeedbackInput = document.querySelector("#feedbackInput");
//     const strWhatLike =
//         (elmInputLikeEasyToUse.checked ? "Giao diện dễ sử dụng. " : "") +
//         (elmInputLikeFastPageLoading.checked
//             ? "Tốc độ tải trang nhanh. "
//             : "") +
//         (elmInputLikeInteractivity.checked ? "Khả năng tương tác. " : "") +
//         (elmInputLikeUsefulContent.checked
//             ? "Nội dung thông tin hữu ích. "
//             : "");

//     const payload = {
//         data: {
//             IP: IPCLIENT,
//             thichodiemnao: strWhatLike,
//             diem: elmRatingInput.value,
//             huuIch: elmUsefulForUpdatesInput.value,
//             gopy: elmFeedbackInput.value,
//         },
//     };
//     sendFeedback(payload);
// }

// function sendFeedback(dataSend) {
//     API_NEWS.post("gop-ys", dataSend)
//         .then(function (response) {
//             elmModalSendFeedBack.hide();
//             showSuccessFeedbackModal();
//         })
//         .catch(function (error) {
//             console.log(error);
//             // alert("Có lỗi xảy ra khi gửi câu hỏi. Vui lòng thử lại sau.");
//         });
// }

// function showSuccessFeedbackModal() {
//     const modalResultBody = document.getElementById("modalResultFeedbackBody");
//     const successMessage = `Cảm ơn bạn đã gửi góp ý cho chúng tôi.`;
//     modalResultBody.innerHTML = successMessage;
//     const modal = new bootstrap.Modal(
//         document.getElementById("modalResultFeedback")
//     );
//     modal.show();
// }

// async function getIpClient() {
//     try {
//         const response = await axios.get("https://ipv4-a.jsonip.com/"); // Gửi yêu cầu Axios
//         return response.data.ip; // Trả về địa chỉ IP từ dữ liệu phản hồi
//     } catch (error) {
//         throw error; // Nếu có lỗi, ném lỗi ra ngoài để xử lý ở nơi gọi hàm này
//     }
// }
