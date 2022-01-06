<template>
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
export default {
  name: 'Menu',
  data() {
    return {
      emptyBasket: '购物车还没添加商品噢',
      baskets: [],
      getMenuItems: {
        1: {
          name: '榴莲pizza',
          description: '这是喜欢吃榴莲朋友的最佳选择',
          options: [
            {
              size: 9,
              price: 38,
            },
            {
              size: 12,
              price: 48,
            },
          ],
        },
        2: {
          name: '芝士pizza',
          description: '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
          options: [
            {
              size: 9,
              price: 38,
            },
            {
              size: 12,
              price: 48,
            },
          ],
        },
        3: {
          name: '夏威夷pizza',
          description: '众多人的默认选择',
          options: [
            {
              size: 9,
              price: 36,
            },
            {
              size: 12,
              price: 46,
            },
          ],
        },
      },
    }
  },
  computed: {
    total: function() {},
  },
  methods: {
    addToBasket(item, option) {
      this.baskets.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      })
      console.log(this.baskets)
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
    },
  },
}
</script>

<style scoped></style>
