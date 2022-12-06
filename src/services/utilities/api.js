import axios from 'axios';
const baseURL = 'http://alsyedmmtravel.com/api';

export async function signIn(email, password) {
  return await axios.post(`${baseURL}/signin`, {
    email,
    password,
  });
}

export async function signUp(
  first_name,
  middle_name,
  last_name,
  email,
  password,
  gender,
  prefix,
  suffix,
  phone,
  phone_type,
  dob,
  fingerprint,
) {
  console.log();
  return await axios.post(`${baseURL}/signup`, {
    first_name,
    middle_name,
    last_name,
    email,
    password,
    gender,
    prefix,
    suffix,
    phone,
    phone_type,
    dob,
    fingerprint:1,
  });
  // console.log(
  //     first_name,
  //   middle_name,
  //   last_name,
  //   email,
  //   password,
  //   gender,
  //   prefix,
  //   suffix,
  //   phone,
  //   phone_type,
  //   dob,
  //   fingerprint
  // );
}

export async function getUser(token) {
  return await axios.get(`${baseURL}/user_details`, {
    headers: {
      Authorization: token,
    },
  });
}

export async function updateUserName(token, lname, fname) {
  return await axios.post(
    `${baseURL}/update_username`,
    {
      lname,
      fname,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserAddress(
  token,
  address,
  address2,
  city,
  state,
  zipCode,
) {
  return await axios.post(
    `${baseURL}/update_address`,
    {
      address,
      address2,
      city,
      state,
      zipCode,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserPhone(token, phone) {
  return await axios.post(
    `${baseURL}/update_phone`,
    {
      phone,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserEmail(token, email) {
  return await axios.post(
    `${baseURL}/update_email`,
    {
      email,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateFingerprint(token, fingerprint) {
  return await axios.post(
    `${baseURL}/update_fingrprnt`,
    {
      fingerprint,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function updateUserPassword(token, password) {
  return await axios.post(
    `${baseURL}/update_password`,
    {
      password,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function getTrainerType() {
  return await axios.get(`${baseURL}/trainertype`);
}

export async function getTrainerList(type) {
  return await axios.get(`${baseURL}/trainersList/${type}`);
}

export async function selectedTrainer(id) {
  return await axios.get(`${baseURL}/trainerDesc/${id}`);
}

export async function visitReason() {
  return await axios.get(`${baseURL}/visit_reason`);
}
export async function searchReason(param) {
  return await axios.post(`${baseURL}/search_reason`, {
    param,
  });
}
export async function appRating(rate) {
  return await axios.post(`${baseURL}/app_rating`, {
    rate,
  });
}
export async function getAllTrainers() {
  return await axios.get(`${baseURL}/trainers`);
}

export async function verifyCoupon(token, coupon) {
  console.log(token, coupon);
  return await axios.post(
    `${baseURL}/coupon_check`,
    {
      coupon,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function recentVisit(token) {
  return await axios.get(`${baseURL}/past_visit`, {
    headers: {
      Authorization: token,
    },
  });
}
export async function getSlotDate(id, date) {
  return await axios.post(`${baseURL}/trCalenderSlots`, {
    id,
    date,
  });
}
//
export async function getSlotTime(id) {
  return await axios.post(`${baseURL}/trTimeSlots/${id}`);
}
// getAllSlotDate
export async function getAllSlotDate(date) {
  console.log(date);
  return await axios.get(`${baseURL}/all_trCalenderSlots`, {
    date: date,
  });
}
export async function getQuestion(id) {
  return await axios.post(`${baseURL}/question`, {
    id,
  });
}
export async function getAppointment(token) {
  return await axios.post(`${baseURL}/appointment`, {
    headers: {
      Authorization: token,
    },
  });
}

// export async function getMessages(token) {
//   return await axios.get(`${baseURL}/chat_display`, {
//     headers: {
//       Authorization: token,
//     },
//   });
// }

// export async function sendMessage(token, msg, sender) {
//   return await axios.post(
//     `${baseURL}/msg_sent`,
//     {
//       msg,
//       sender,
//     },
//     {
//       headers: {
//         Authorization: token,
//       },
//     },
//   );
// }

export async function getAllList() {
  return await axios.get(`${baseURL}/all_trCalenderSlots`);
}
export async function getallQuestion() {
  return await axios.get(`${baseURL}/questionary`);
}

export async function filterTrainer(availability, gender, language, type) {
  return await axios.post(`${baseURL}/filter_tr`, {
    availability,
    gender,
    language,
    type,
  });
}

export async function trainerAppointment(
  user_token,
  response_1,
  response_2,
  response_3,
  response_4,
  response_5,
  trainer_id,
  tr_name,
  reason,
  apt_date,
  apt_day,
  apt_time,
  amount,
) {
  return await axios.post(
    `${baseURL}/appointmentByProvider`,
    {
      user_token,
      response_1,
      response_2,
      response_3,
      response_4,
      response_5,
      trainer_id,
      tr_name,
      reason,
      apt_date,
      apt_day,
      apt_time,
      amount,
    },
    {
      headers: {
        Authorization: user_token,
      },
    },
  );
}

export async function timeAppointment(
  user_token,
  response_1,
  response_2,
  response_3,
  response_4,
  response_5,
  reason,
  apt_date,
  apt_day,
  apt_time,
  amount,
) {
  return await axios.post(
    `${baseURL}/appointmentBytime`,
    {
      user_token,
      response_1,
      response_2,
      response_3,
      response_4,
      response_5,
      reason,
      apt_date,
      apt_day,
      apt_time,
      amount,
    },
    {
      headers: {
        Authorization: user_token,
      },
    },
  );
}

export async function findingProvider() {
  return await axios.get(`${baseURL}/finding_Tr`);
}

export async function startSession(
  user_token,
  response_1,
  response_2,
  response_3,
  response_4,
  response_5,
  trainer_id,
  tr_name,
  reason,
  amount,
) {
  return await axios.post(
    `${baseURL}/create_visit`,
    {
      user_token,
      response_1,
      response_2,
      response_3,
      response_4,
      response_5,
      trainer_id,
      tr_name,
      reason,
      amount,
    },
    {
      headers: {
        Authorization: user_token,
      },
    },
  );
}

export async function trainerRating(rate, id) {
  return await axios.post(`${baseURL}/tr_rating`, {
    rate,
    id,
  });
}
export async function getTrainer(token) {
  return await axios.get(`${baseURL}/tr_details`, {
    headers: {
      Authorization: token,
    },
  });
}
export async function getAppointmentTrainer(token) {
  return await axios.get(`${baseURL}/tr_appt`, {
    headers: {
      Authorization: token,
    },
  });
}
export async function trainerVist(token) {
  return await axios.get(`${baseURL}/tr_visit`, {
    headers: {
      Authorization: token,
    },
  });
}

export async function createChannel(tr_id, user_id) {
  return await axios.post(`${baseURL}/setChannel`, {
    tr_id,
    user_id,
  });
}

//
export async function userAppointment(token) {
  return await axios.get(`${baseURL}/recent_users_apt`, {
    headers: {
      Authorization: token,
    },
  });
}

export async function trainerRecentAppointment(token) {
  return await axios.get(`${baseURL}/recent_apt`, {
    headers: {
      Authorization:
        '$2y$10$kl2gP4WxK7V/IFAyBblRSOorRI3.VpxYsol6fjnJcebb0WwbtwjUi',
    },
  });
}

export async function appointmentStatus(apt_id) {
  return await axios.post(`${baseURL}/apt_status`, {
    apt_id,
  });
}

export async function trainerAppointmentTime(token) {
  return await axios.get(`${baseURL}/recent_apt`, {
    headers: {
      Authorization: token,
    },
  });
}

export async function updateAppointmentTrainer(ap_id, tr_id, tr_name) {
  return await axios.post(`${baseURL}/update_tr`, {
    ap_id,
    tr_id,
    tr_name,
  });
}


export async function getAmount() {
  return await axios.get(`${baseURL}/amount`);
}

export async function getAgoraToken() {
  return await axios.get(`${baseURL}/agoraToken`);
}