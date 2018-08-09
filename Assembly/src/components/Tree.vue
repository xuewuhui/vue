<!--组织结构-->
<template>
  <div class="hello">
    <h1>组织结构</h1>
    <el-tree
      ref="tree"
      :data="data"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      highlight-current
      @node-click="handleNodeClick">
    </el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Date',
  data () {
    return {
      data: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
            }]
          }]
        }],

      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {

    handleNodeClick(data) {
      console.log(data);
    },

    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([{
        id: 7,
        label: '三级 3-2-2'
      }]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
