
<template>
  <div>
    <div class="word" id="con">
      <span class="word">断言列表</span>
    </div>
    <div id="name">
      <span>服务名称</span>
    </div>
    <div id="select2">
      <el-row>
        <el-col class="search-row">
          <el-input placeholder="请输入服务名称" class="input-select">
          </el-input>
          <span id="name2">断言器类型</span>
          <el-select v-model="values" placeholder="请选择" class="select2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              class="select2"
            >
            </el-option>
          </el-select>
          <el-button type="primary" id="search">查询</el-button>
        </el-col>
      </el-row>
      <el-button type="primary" id="button2" >新增断言</el-button>
    </div>
    <el-table
      :data="Path"
      style="width: 100%"
      border
      id="table"
      >
      <el-table-column
        prop="id"
        label="服务名"
        >
      </el-table-column>
      <el-table-column
        prop="predicate_name"
        label='断言器类型'>
      </el-table-column>
      <el-table-column
        prop="des"
        label='描述'>
      </el-table-column>
       <el-table-column
        prop="remark"
        label='备注'>
      </el-table-column>
      <el-table-column
        prop="config"
        label='配置信息'>
      </el-table-column>
       <el-table-column
      fixed="right"
      label="操作"
      width="220">
      <template slot-scope="scope">
        <el-button
          @click="edit(scope.row)"
          type="text"
          size="small">
          修改
        </el-button>
         <el-button
          type="text"
          size="small"
          @click="remove(scope.row)">
          删除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods:{
    remove(row){
      this.$http.post('/predicate/delete',{id:row.id,predicate_name:row.predicate_name}).then(res => {
        console.log(res.data)
        this.$http.get('/predicate/list').then(res => {
          this.Path = res.data
        })
      })
    },
    edit(row){
      this.$router.push({
        path:'/predicate/update',
        query:{
          remark:row.remark,
          config:row.config,
          id:row.id,
          des:row.des,
          name:row.predicate_name
        }
      })
    }
  },
  data(){
    return{
      Path:[{
        id:'111',
        predicate_name:'11',
        des:'11',
        remark:'111',
        config:[]
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      values: ''
    }
  },
  created(){
    this.$http.get('/predicate/list').then(res => {
      this.Path = res.data
      // console.log(res.data,'请求成功')
    })
  }
};
</script>

<style>
.word {
  font-size: 30px;
  width: 100%;
  height: 50px;
}
#con {
  border-bottom-style: solid;
  border-bottom-width: 3px;
}
#select2 {
  position: absolute;
  left: 300px;
}
#name {
  position: absolute;
  top: 153px;
  left: 240px;
  font-size: 15px;
}
.input-select {
  padding: 15px;
  width: 240px;
  background-color: #fff;
}
.select2{
  position: relative;
  left: 15px;
}
#name2{
  font-size: 15px;
}
#search{
  margin-left: 40px;
}
#button2 {
  position: relative;
  top: -56px;
  left: 980px;
}
</style>
