import moment from 'moment'

export default async ({ app, Vue }) => {
  Vue.prototype.$moment = moment
}
