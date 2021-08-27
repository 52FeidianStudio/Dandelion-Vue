// 组件功能：配置列表
// 码农：李沛璋
// 应用组件库：
<template>
  <div>
    <div class="word" id="con">
      <span class="word">配置列表</span>
    </div>
    <div id="name">
      <span>服务名称</span>
    </div>
    <div id="select">
      <el-row>
        <el-col class="search-row">
          <el-input
            placeholder="请输入服务名称"
            class="input-select"
            v-model="routeId"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search()"
            ></el-button>
          </el-input>
        </el-col>
        <el-button type="primary" id="button" @click="newconfig()"
          >新增配置</el-button
        >
      </el-row>
    </div>
    <el-table :data="route_id" style="width: 100%" border id="table1">
      <el-table-column prop="id" label="服务名"> </el-table-column>
      <el-table-column prop="url" label="URL"> </el-table-column>
      <el-table-column prop="order" label="排序"> </el-table-column>
      <el-table-column prop="client" label="是否进行心跳检测" >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="220">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">
            配置
          </el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">
            限流
          </el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      this.$http
        .get("/route/findById", { params: { routeId: this.routeId } })
        .then((res) => {
          // console.log(res, typeof this.routeId);
          this.route_id[0] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove(row) {
      this.$http
        .get("/route/delete", { params: { routeId: row.id } })
        .then((res) => {
          console.log(res);
          this.$http.get("/route/list").then((res) => {
            this.route_id = res.data;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit(row) {
      this.$router.push({
        path: "details",
        query: {
          id: row.id,
        },
      });
    },
    newconfig() {
      this.$router.push({
        path: "create",
      });
    },
  },
  created() {
    this.$http.get("/route/list").then((res) => {
      this.route_id = res.data;
      this.Path = this.route_id[0].predicates.Path;
    });
  },
  data() {
    return {
      routeId: "",
      route_id: [
        {
          id: "xx",
          url: "localhost:9001/xxx/xxx",
          order: "1",
          client: "true",
          predicates: {
            Path: {
              des: "路径匹配断言器",
              note: "这是用来处理产品服务的路径断言器",
              args: ["/product/list", "/product/insert"],
            },
          },
          // filters:{

          // }
        },
      ],
      Path: {
          name: "Path",
          des: "路径匹配断言器",
          remark: "这是用来处理产品服务的路径断言器",
          args: ["/product/list", "/product/insert"],
        },
    };
  },
};
</script>

<style>
.input-select {
  padding-left: 15px;
  width: 400px;
  background-color: #fff;
}
.word {
  font-size: 30px;
  width: 50%;
  height: 50px;
}
#con {
  border-bottom-style: solid;
  border-bottom-width: 3px;
}
#button {
  position: absolute;
  right: 100px;
  top: 14px;
}
#name {
  position: absolute;
  top: 153px;
  left: 240px;
  font-size: 15px;
  width: 70px;
  margin: 0%;
  padding: 0%;
}
#table {
  position: relative;
  top: 70px;
}
</style>
