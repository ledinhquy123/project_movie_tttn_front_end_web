import axios from "axios";

function getUser() {
  const userString = localStorage.getItem('user');

  // Chuyển đổi chuỗi JSON thành đối tượng
  if (userString) {
    const user = JSON.parse(userString);

    return user;
  }
  return null;
}

async function registerUser(fullName, email, password) {
  try {
    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const body = {
      name: fullName,
      email: email,
      password: password
    };
    const response = await axios.post(
      'http://127.0.0.1:8000/api/users/create',
      body,
      { header }
    )
    console.log(response.data);
    console.log(response.status);
    if(response.status == 200) {
      const data = response.data;
      alert(data['message']);
    }
  } catch (err) {
    alert(err);
  }
}

async function loginUser(email, password) {
  try {
    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const body = {
      email: email,
      password: password
    };
    const response = await axios.post(
      'http://127.0.0.1:8000/api/users/login',
      body,
      { header }
    )
    console.log(response.data);
    if(response.status == 200) {
      const data = response.data;
      if(data['message'] == '') {
        if(data['status'] == 1) {
          localStorage.setItem('user', JSON.stringify(data['user']))
          return true;
        }else {
          alert('Mật khẩu không chính xác.')
          return false;
        }
      } else {
        alert(data['message']);
      }
    }else {
      alert("Đăng nhập không thành công");
      return false;
    }
  } catch (err) {
    alert(err);
  }
  return false;
}

async function changPass(email, password) {
  const data = {
    'email': email,
    'password': password
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await axios.put(
    'http://127.0.0.1:8000/api/users/change-pass',
    data,
    { headers: header }
  );

  console.log(response.status);
  console.log(response.data);
  if(response.status == 200) {
    return response.data.status == 'success';
  }
  return false;
}

async function getCommentByMovie(idMovie) {
  const response = await axios.get(`http://127.0.0.1:8000/api/movies/get-movie-comments/${idMovie}`);
  if(response.status == 200) {
    return response.data.comments;
  }
  return null;
}

async function checkComment(userId, movieId) {
  const data = {
    'userId': userId,
    'movieId': movieId
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await axios.post(
    'http://127.0.0.1:8000/api/movies/check-user-comment',
    data,
    { headers: header}
  );

  if(response.status == 200) {
    return response.data.check == '1';
  }
  return false;
}

async function createComment(userId, movieId, content) {
  const data = {
    'idMovie': movieId,
    'idUser': userId,
    'content': content
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  await axios.post(
    'http://127.0.0.1:8000/api/movies/create-movie-comment',
    data,
    { headers: header}
  );
}

async function updateUser(idUser, name, email) {
  const data = {
    'id': idUser,
    'name': name,
    'email': email
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await axios.post(
    'http://127.0.0.1:8000/api/users/update',
    data,
    { headers: header}
  );
  if(response.status == 200) {
    if(response.data.user) alert('Cập nhật thành công')
  }
}

export function useUser() {
  return { getUser, registerUser, loginUser, changPass, getCommentByMovie, checkComment, createComment, updateUser }
}