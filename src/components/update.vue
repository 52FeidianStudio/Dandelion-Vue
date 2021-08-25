<template>
  <div>
    <div>
      <span id="up_">更新断言</span>
    </div>
    <el-form ref="form" :model="form" label-width="100px" id="up_form">
      <el-form-item label="断言器类型">
        <el-select v-model="form.predicate_name" placeholder="请选择" class="input2">
          <el-option label="Path" value='Path'></el-option>
          <el-option label="Remark" value='Remark'></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="类型描述">
        <el-input
          placeholder="请输入内容"
          v-model="form.des"
          :disabled="true"
          class="input2"
        >
        </el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="form.remark" class="input2"></el-input>
      </el-form-item>

      <el-form-item label="配置信息">
        <el-radio-group v-model="form.config">
          <el-radio label="json"></el-radio>
          <el-radio label="form"></el-radio>
        </el-radio-group>
      </el-form-item>

      <div id="write">
        <el-input type="textarea" :rows="6" placeholder="" v-model="form.config">
        </el-input>
      </div>

      <el-form-item label="配置信息">
        <el-radio-group v-model="form.config[0]">
          <el-radio label="json"></el-radio>
          <el-radio label="form"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-input
        v-model="form.config"
        placeholder=""
        class="input2 config_write"
      ></el-input>
      <br>
      <el-input
        v-model="form.config"
        placeholder=""
        class="input2 config_write"
      ></el-input>
      <el-form-item>
        <el-button @click="change()">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id:'111',
        des: "11",
        remark:'1111',
        config:[],
        predicate_name:''
      },
    };
  },
  methods: {
    change() {
      this.$http.post('/dandelion/predicate/update',this.form).then(res => {
        console.log(res,this.form.predicate_name)
        this.$router.push('/dandelion/predicate/list')
      }).catch(err => {
        console.log(err,this.form.predicate_name)
      })
    },
  },
  created(){
    this.form.remark = this.$route.query.remark
    this.form.config = this.$route.query.config[0]
    this.form.id = this.$route.query.id
    this.$http.get('/dandelion/route/predicate/list').then(res => {
      this.form.des = res.data.remark
    }).catch(err => {
      console.log(err,'cuole')
    })
  }
};
</script>

<style>
.input2 {
  width: 500px;
}
#up_form {
  position: absolute;
  left: 450px;
}
#up_ {
  font-size: 25px;
}
#write {
  border: 0.5px solid;
  width: 500px;
  height: 140px;
  position: relative;
  left: 100px;
  top: -20px;
  background-color: black;
  border-radius: 4px;
}
.config_write {
  position: relative;
  left: 100px;
  top: -20px;
}
</style>