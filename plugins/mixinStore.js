import { Cart } from '~/models/Cart'

const mixinStore = {
  computed: {
    cart () {
      return new Cart(this.$store.getters['cart/cart'])
    }
  },
  methods: {
    addToCart (product) {
      this.cart.addItem(product)
      this.$store.commit('cart/updateCart', this.cart)
    },
    showSnackbar (text, type = 'info') {
      this.snackbar.show = true
      this.snackbar.text = text
    }
  },
  data () {
    return {
      snackbar: {
        show: false,
        timeout: 2000000,
        text: '',
        color: '#2bbb28',
        style: {
          borderRight: '5px solid rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
}

export default mixinStore
