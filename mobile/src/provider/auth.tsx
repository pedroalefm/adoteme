import axios from 'axios';
import {User} from '../interface/User';
import {host} from '../constants/server';

export async function registerUser(user: User): Promise<any> {
  try {
    const newUser = await axios
      .request({
        method: 'POST',
        url: `${host}/register`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: user,
      })
      .then(function (response) {
        return response.data.user;
      })
      .catch(function (error) {
        console.log(error);
      });

    return newUser;
  } catch (e) {
    console.log(e);
  }
}

export async function loginUser(email: String, password: String): Promise<any> {
  try {
    const user = await axios
      .request({
        method: 'POST',
        url: `${host}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: email,
          password: password,
        },
      })
      .then(function (response) {
        return response.data.user;
      })
      .catch(function (error) {
        return error.response.data;
      });

    return user;
  } catch (e) {
    console.log(e);
  }
}
