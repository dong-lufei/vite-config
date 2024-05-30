<template>
  <el-avatar :size="50"
    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.objwoC2DDhqt-i9ZAFa6FAHaD0?w=319&h=180&c=7&r=0&o=5&pid=1.7" />
  <el-row>
    <el-checkbox name="myCheckbox" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
      全部
    </el-checkbox>
  </el-row>
  <el-row>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox name="myCheckbox" v-for="city in cities" :key="city" :label="city" :value="city">
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </el-row>
</template>

<script setup>
const checkAll = ref(false);
const isIndeterminate = ref(false);
const checkedCities = ref([]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value) => {
  console.log("🚀 ~ handleCheckedCitiesChange ~ value:", value);
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};

// 使用 onMounted 钩子确保在组件挂载后设置选中项
onMounted(() => {
  // // 设置所有城市为选中状态
  // checkedCities.value = cities.slice();
  // // 因为所有项都已选中，所以不应该是不确定状态
  // isIndeterminate.value = false;
  // // 由于所有项都已选中，checkAll 应该为 true
  // checkAll.value = true;

  handleCheckAllChange(true);
  checkAll.value = true;
});
</script>
