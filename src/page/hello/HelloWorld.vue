<template>
  <div class="home">
    <div class="editFileList">
        <el-button type="primary" size="small"  @click="addFileList" class="addButton">增行</el-button>
        <el-table :data="allList" border  style="width:100%;" class="addTable" max-height="620" empty-text="请添加数据">
            <el-table-column label="序号" type="index" align="center"  width="65">
            </el-table-column>
            <el-table-column prop="name" label="目录名称" header-align="center" align="center" min-width="150">
            <template slot-scope="scope">
                <el-input v-model="scope.row.name" placeholder="请输入目录名称"></el-input>
            </template>
            </el-table-column>
            <el-table-column prop="level" label="目录级别" header-align="center" align="center" min-width="150">
            <template slot-scope="scope">
                <el-input v-model="scope.row.level" placeholder="请输入目录级别" maxlength="2"></el-input>
            </template>
            </el-table-column>
            <el-table-column prop="pageNo" label="页码" header-align="center" align="center" min-width="150">
            <template slot-scope="scope">
                <el-input v-model="scope.row.pageNo" placeholder="请输入页码" maxlength="4"></el-input>
            </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" header-align="center" align="center" min-width="150">
            <template slot-scope="scope">
                <el-upload 
                    class="uploadDocx" 
                    action="https://jsonplaceholder.typicode.com/posts/" 
                    :limit="1"
                    accept=".docx"
                    :file-list="scope.row.files" 
                    :on-change="handleChange"
                    >
                    <el-button size="small" type="primary" @click="add(scope.$index)">点击上传</el-button>
                </el-upload>
            </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="delete_data(scope.row,scope.$index)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
       <el-button  size="small" @click="save">确定</el-button>
    </div>
</template>

<script>

// import { FullCalendar } from 'vue-fullcalendar'
import axios from 'axios';
export default {
  name: 'Hello',
  components:{
  },
  data () {
    return {
      msg: '初始化首页',

      allList:[],
      index:'',
    }
  },
  created(){
   
  },
  methods:{
     addFileList(){
          let obj = {
              name:"",
              level:"",
              pageNo:"",
              files:[],
          }
          this.allList.push(obj)
        },
       handleChange(file, fileList) {
         if(!this.index){
            this.allList[this.index].files = fileList
         }
      },
      delete_data2(row,index){
        this.allList.splice(index,1)
      },
      add(index){
        this.index = index
      },
   save(){
     console.log("this.fileList",this.allList)
   },
    getaxios(){
      this.Http.post("user",{"coCode": "1111"}).then(response=>{
          let data = response.data
           if(data.code == 0){
            //数据的返回接受 
           } else{
             //数据错误提示
           }   
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home{
     height: 100%;
    .red {
      background: red;
    }
    .blue {
      background: blue;
    }
  }
</style>


