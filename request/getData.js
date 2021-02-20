// get 请求
export const getRequest = (app, url) => {
	console.log(555)
  return app.$axios.$get(url)
}

// post 请求
export const postRequest = (app, url, object) => {
  return app.$axios.$post(url, object)
}
