<template>
  <div>
    <div class="word" id="con">
      <span class="word">配置详情</span>
      <el-button type="primary" id="button1" @click="update()">新增配置</el-button>
    </div>
    <el-col class="search-row" id="col1">
      <div class="name1">
        <span>服务名称</span>
      </div>
      <el-input placeholder="" class="input-select1" v-model="content.id">
      </el-input>
    </el-col>
    <el-col class="search-row" id="col2">
      <div class="name1">
        <span> URL</span>
      </div>
      <el-input placeholder="" class="input-select1" v-model="content.url">
      </el-input>
    </el-col>
    <el-col class="search-row" id="col3">
      <div class="name1">
        <span> 排序</span>
      </div>
      <el-input placeholder="" class="input-select1" v-model="content.order">
      </el-input>
    </el-col>
    <el-col id="col4">
      <div class="name1">
        <span>心跳检查</span>
      </div>
      <el-input
        placeholder=""
        :disabled="true"
        class="input-select1"
        v-model="content.client"
      >
      </el-input>
    </el-col>
    <div id="table_place">
      <div id="tit">
        <el-button-group id="group">
          <el-button type="primary" plain size="small">断言列表</el-button>
          <el-button type="primary" plain size="small">过滤列表</el-button>
        </el-button-group>
        <el-button type="primary" id="onebut"
          >添加断言</el-button
        >
      </div>
      <el-table
        :data="router_id"
        style="width: 94%"
        border
        id="table2"
        v-if="choose"
      >
        <el-table-column prop="id" label="服务名"> </el-table-column>
        <el-table-column prop="url" label="URL"> </el-table-column>
        <el-table-column prop="order" label="排序"> </el-table-column>
        <el-table-column prop="client" label="是否进行心跳检测">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template>
            <el-button type="text" size="small"> 编辑 </el-button>
            <el-button type="text" size="small"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        :data="router_id"
        style="width: 94%"
        border
        id="table2"
        v-else
      >
        <el-table-column prop="id" label="服务名"> </el-table-column>
        <el-table-column prop="url" label="URL"> </el-table-column>
        <el-table-column prop="order" label="排序"> </el-table-column>
        <el-table-column prop="client" label="是否进行心跳检测">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template>
            <el-button type="text" size="small"> 编辑 </el-button>
            <el-button type="text" size="small"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router_id: [
        {
          id: "11",
          url: "1",
          order: "1",
          client: "true",
          predicates: {
            PathRoutePredicateFactory: {
              des: "路径匹配断言器",
              note: "这是用来处理产品服务的路径断言器",
              config: ["/product/list", "/product/insert"],
            },
          },
        },
      ],
      content: {
        id: "",
        url: "",
        order: "",
        client: "",
      },
      choose:true,
    };
  },
  methods: {
    update() {
      console.log(this.router_id)
      this.$http.post("/route/insert", this.content).then((res) => {
        console.log(res);
        console.log('成功发射')
        this.$router.push('/predicate/list')
      });
    },
  },
};
</script>

<style>
.name1 {
  position: absolute;
  left: 330px;
  top: 10px;
  font-size: 15px;
}
.input-select1 {
  position: absolute;
  left: 400px;
  width: 450px;
  margin: 0%;
  padding: 0%;
}
#button1 {
  position: relative;
  top: -6px;
  left: 950px;
}
#col1 {
  position: relative;
  top: 20px;
}
#col2 {
  position: relative;
  top: 80px;
}
#col3 {
  position: relative;
  top: 140px;
}
#col4 {
  position: relative;
  top: 200px;
}
#table_place {
  border: 0.5px solid;
  height: 340px;
  position: relative;
  top: 280px;
  border-radius: 4px;
}
#table2 {
  margin: 0 auto;
  position: relative;
  top: 20px;
}
#group {
  position: relative;
  top: 5px;
}
#tit {
  height: 50px;
  width: 96%;
  border-bottom: 0.5px solid;
  margin: 0 auto;
}
#onebut {
  position: relative;
  top: 5px;
  left: 840px;
}
</style>
