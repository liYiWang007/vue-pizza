<template>
  <!-- 单页面引入axios时 -->
  <div class="menu">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th>尺寸</th>
              <th>价格</th>
              <th>加入</th>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.name">
            <tr>
              <td colspan="3">
                <strong>{{ item.name }}</strong>
              </td>
            </tr>
            <tr v-for="option in item.options" :key="option.size">
              <td>{{ option.size }}寸</td>
              <td>{{ option.price }}rmb</td>
              <td>
                <button class="btn btn-sm btn-outline-success" @click="addToBasket(item, option)">
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 测试addToBasket()打印出来的数据 -->
        <!-- {{baskets}} -->
      </div>
      <!-- 购物车 -->
      <div class="col-sm-12 col-md-4">
        <div v-if="baskets.length > 0">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>数量</th>
                <th>品种</th>
                <th>价格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in baskets" :key="index">
                <td>
                  <button @click="decreaseQuantity(item)" class="btn btn-sm">
                    -
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item)" class="btn btn-sm">
                    +
                  </button>
                </td>
                <td>{{ item.name }}{{ item.size }}</td>
                <td>{{ item.price * item.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <p>总价：{{ total }}RMB</p>
          <button class="btn btn-success btn-block">提交</button>
        </div>
        <div v-else>
          {{ emptyBasket }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Menu_axios_base',
  data() {
    return {
      emptyBasket: '购物车还没添加商品噢',
      baskets: [],
      getMenuItems: {}
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    total() {
      let totalCost = 0
      for (let index in this.baskets) {
        let individualItem = this.baskets[index]
        totalCost += individualItem.price * individualItem.quantity
      }
      return totalCost
    }
  },
  methods: {
    fetchData() {
      //直接获取firebase中的数据
      axios.get('menu.json').then((res) => (this.getMenuItems = res.data))
    },
    addToBasket(item, option) {
      // 去重
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }
      if (this.baskets.length > 0) {
        //过滤
        let result = this.baskets.filter((item) => {
          return basket.name === item.name && basket.price === item.price
        })
        if (result !== null && result.length > 0) {
          //在原有数据上累加
          result[0].quantity++
        } else {
          this.baskets.push(basket)
        }
      } else {
        this.baskets.push(basket)
      }

      // 基础写法
      //   this.baskets.push({
      //     name: item.name,
      //     size: option.size,
      //     price: option.price,
      //     quantity: 1,
      //   })
      //   console.log(this.baskets)
    },
    increaseQuantity(item) {
      item.quantity++
    },
    decreaseQuantity(item) {
      item.quantity--

      if (item.quantity <= 0) {
        this.removeFormBaskets(item)
      }
    },
    removeFormBaskets(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1)
    }
  }
}
</script>

<style scoped></style>
