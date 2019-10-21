<template>
    <div class="home">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="260px">
                    <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <router-link to="/HellowWord"><el-menu-item index="1-1">欢迎1</el-menu-item></router-link>
                            <router-link to="/study"><el-menu-item index="1-2">欢迎2</el-menu-item></router-link>
                            <router-link to="/manage"><el-menu-item index="1-3">欢迎3</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Home',
  components:{
 
  },
  data () {
    return {
    }
  },
  created(){
   
  },
  methods:{
 
  }
}
</script>

<style lang="scss" scoped>
.home{
    height:100%;
}
</style>