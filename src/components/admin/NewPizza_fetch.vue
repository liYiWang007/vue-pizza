<template>
<!-- fetch方法 -->
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.name" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" v-model="newPizza.description" class="form-control"></textarea>
      </div>
    </div>
    <p>
      <strong>选项1：</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.size1" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.price1" class="form-control" />
      </div>
    </div>
    <p>
      <strong>选项2：</strong>
    </p>
    <div class="form-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.size2" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.price2" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <!-- @click.prevent 必须加.prevent,否则会有默认操作,数据清空浏览器原地刷新 -->
      <button @click.prevent="addMenuItem" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewPizza_fetch',
  data() {
    return {
      newPizza: {}
    }
  },
  methods: {
    addMenuItem() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      }

      //   axios vue-resource es6 fecth
      fetch('https://vue-pizza-cdef2-default-rtdb.firebaseio.com/menu.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        //   JSON.stringify()转化为json字符串
        body: JSON.stringify(data)
      })

        // console.log(res) //检验数据
        .then((res) => res.json())
        .then((data) => this.$router.push({name:'menu'})) //检验数据 console.log(data)
        .catch(err=>console.log(err))
    }
  }
}
</script>

<style scoped></style>
