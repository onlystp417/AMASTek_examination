const requestUrl =
  'https://run.mocky.io/v3/9d5f33ec-0d2f-4743-aac9-5aef32f7badf';
var userList = [];
var resultList = [];

window.onload = function () {
  initListFetch()
  backToTop();
};

const initListFetch = () => {
  $.ajax({
    type: 'GET',
    url: requestUrl,
    dataType: 'json',
    success: function (response) {
      userList = response;
      insertHTML(listDOMGenerater(userList));
    },
    error: function (thrownError) {
      alert(thrownError);
    },
  });
}

const textSearch = () => {
  $('#textSearch').on('input', e => {
    const { value } = e.target;
    resultList = userList.filter(user => (
      `${user.first_name} ${user.last_name}`.toLowerCase()
        .includes(value.toLowerCase().trim())
    ));
    insertHTML(listDOMGenerater(resultList));
  });
}

const genderSearch = () => {
  $('.search__field__genfer input').on('change', e => {
    const { value } = e.target;
    console.log(value);
    // const resultList = userList.filter(user => (
    //   user.login_at.toLowerCase()
    //     .includes(value.toLowerCase().trim())
    // ));
    // console.log(resultList);
    // insertHTML(listDOMGenerater(resultList));
  });
}

const dateSearch = () => {
  $('#dateSearch').change(e => {
    const { value } = e.target;
    resultList = userList.filter(user => (
      user.login_at.includes(value)
    ));
    insertHTML(listDOMGenerater(resultList));
  });
}

const insertHTML = (DOM) => {
  $('.list').html(DOM);
}

const listDOMGenerater = (list) => {
  if (!list.length) {
    return '<div class="empty-result">無符合的結果</div>';
  }
  return list.map((user) => {
    return `
      <div class="user__wrapper">
        <div id="${user.id}" class="user">
          <h3>姓名: ${user.first_name} ${user.last_name}</h3>
          <p>電子信箱: ${user.email}</p>
          <p>性別: ${user.gender}</p>
          <p>登入時間: ${user.login_at}</p>
          <p>介紹: ${user.description}</p>
        </div>
      </div>
    `;
  }).join('');
};

const backToTop = () => {
  var btn = $('.back-to-top');

  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', e => {
    $('html, body').animate({scrollTop:0}, '300');
  });
}

