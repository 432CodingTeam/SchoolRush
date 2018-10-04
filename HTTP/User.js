import HTTP from "./main"

/**
 * 获取用户信息
 * @param {*} uid 用户id
 */
function getUserInfo (uid) {
  let url = HTTP.getService("User", "getById")
  let data = { uid: uid }

  return HTTP.post(url, data)
}


