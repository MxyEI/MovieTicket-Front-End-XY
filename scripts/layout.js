$(document).ready(function() {
	const global_api = {
		// 检查是否登录
		checkLogin: `${global_url}/resource/session/check`,
	}

  /*点击LOGO回到主页开始*/
  let head_bar_img = document.getElementById('head_bar_img');
  if (head_bar_img !== null) {
    head_bar_img.onclick = function() {
      window.location = '../index.html';
    }
  }
  /*点击LOGO回到主页结束*/

  // checkLogin
  function checkLogin() {
    $.ajax({
      url: global_api.checkLogin,
      type: "GET",
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        if (data.phoneNum === '') {
          window.location = '/layouts/register_login.html';
        } else {
					window.location = `/layouts/account.html?phone=${data.phoneNum}`
				}
      },
    });
  }

  /*点击首页账户按钮跳转到帐号页面*/
  let head_user = document.getElementById('head_user');
  if (head_user !== null) {
    head_user.onclick = function() {
      checkLogin();
    }
  }
  /*点击首页账户按钮跳转到帐号页面*/

	/*点击其他页面的账户按钮跳转到帐号页面*/
	let head_bar_count = document.getElementById('head_bar_count');
	if (head_bar_count !== null) {
		head_bar_count.onclick = function() {
			checkLogin();
		}
	}
	/*点击其他页面的账户按钮跳转到帐号页面*/

	/*点击首页取票按钮进入取票页面*/
	let head_get_ticket = document.getElementById('head_get_ticket');
	if (head_get_ticket !== null) {
		head_get_ticket.onclick = function() {
			window.location = '/layouts/get_ticket.html';
		}
	}

    /*点击首页搜索按钮进入搜索页面*/
    let head_get_search = document.getElementById('head_get_search');
    if (head_get_search !== null) {
        head_get_search.onclick = function() {
            window.location = '/layouts/get_search.html';
        }
    }
});
