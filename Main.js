var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    selectedVariant: 0,
    brand: 'Vue',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: '/assets/vmSocks-green.jpg',
        variantQuantity: 0
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: '/assets/vmSocks-blue-onWhite.jpg',
        variantQuantity: 10
      }
    ],
    cart: 0},
    methods: {
      addToCart: function () {
        this.cart += 1
      },
      emptyCart: function () {
        this.cart = 0
      },
      updateProduct (index) {
        this.selectedVariant = index
      }
    }, 
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image(){
        return this.variants[this.selectedVariant].variantImage
      },
      inStock () {
        return this.variants[this.selectedVariant].variantQuantity
      }
    }
})
