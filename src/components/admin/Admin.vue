<template>
  <div class="admin">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <!-- new Pizza -->
        <NewPizza />
      </div>
      <div class="col-sm-12 col-md-4">
        <!-- 品种展示 -->
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
          <thead class="table table-default">
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getMenuItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td>
                <button @click.prevent="deleteData(item)" class="btn btn-outline-danger btn-sm">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  name: 'Admin',
  components: { NewPizza },
  data() {
    return {}
  },
  created() {
    this.fetchData()
  },
  computed: {
    getMenuItems: {
      get() {
        // 从 getters 获取
        return this.$store.getters.getMenuItems
      }
    }
  },
  methods: {
    fetchData() {
      this.$axios
        .get('menu.json')
        .then((res) => this.$store.commit('setMenuItems', res.data))
        .then((data) => {
          let menuArr = []
          for (let key in data) {
            // 把key值赋予data.id
            data[key].id = key
            menuArr.push(data[key])
          }

          //为什么要赋值两次，而不是直接赋值呢？
          //   this.getMenuItems = menuArr
        })
    },
    deleteData(item) {
      fetch('https://vue-pizza-cdef2-default-rtdb.firebaseio.com/menu/' + item.id + '/.json', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((data) => this.$router.push({ name: 'menu' }))
        .catch((err) => console.log(err))
    }
  }
}
</script>
