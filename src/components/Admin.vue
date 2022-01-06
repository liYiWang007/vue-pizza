<template>
  <div class="admin">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <!-- new Pizza -->
        <NewPizza />
      </div>
      <div class="col-sm-12 col-md-4">
        <!-- 品种展示 -->
        <h3 class="text-nuter my-5">菜单</h3>
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
export default {
  name: 'Admin',
  data() {
    return {}
  },
  methods: {},
}
</script>
