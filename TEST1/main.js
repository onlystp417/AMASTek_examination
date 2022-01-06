const requestUrl =
  'https://run.mocky.io/v3/9d5f33ec-0d2f-4743-aac9-5aef32f7badf';
var userList = [];
var filterKeys = {
  name: '',
  login_at: '',
}

window.onload = function () {
  initListFetch()
  initSearch();
  backToTop();
};

const initListFetch = () => {
  $.ajax({
    type: 'GET',
    url: requestUrl,
    dataType: 'json',
    success: function (res) {
      userList = res.map(user => {
        return {
          ...user,
          name: `${user.first_name} ${user.last_name}`,
          // 時間格式轉換 List: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all
          login_at: new Date(user.login_at).toLocaleString('sv-SE', {timeZone: 'Asia/Taipei'})
        }
      });
      insertHTML(listDOMGenerater(userList));
    },
    error: function (thrownError) {
      alert(thrownError);
    },
  });
}

const initSearch = () => {
  textSearch();
  dateSearch();
}

const textSearch = () => {
  $('#textSearch').on('input', e => {
    filterKeys.name = e.target.value.trim();
    search();
  });
}

const dateSearch = () => {
  const dateInput = $('#dateSearch');
  $('#dateClear').click(e => {
    e.preventDefault();
    dateInput.val('');
    filterKeys.login_at = '';
    search();
  })
  dateInput.change(e => {
    filterKeys.login_at = e.target.value;
    search();
  });
}

const search = () => {
  const resultList = userList.filter(user => {
    return user.name.includes(filterKeys.name) && user.login_at.includes(filterKeys.login_at); 
  })
  // const resultList = userList.reduce((accu, curr) => {
    // for (let key in filterKeys) {
    //   if (!(curr[key].includes(filterKeys[key]))) {
    //     break;
    //   }
    //   accu.push(curr);
    // }
    // return accu;
  // }, []);
  insertHTML(listDOMGenerater(resultList));
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
          <h3>姓名: ${user.name}</h3>
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

