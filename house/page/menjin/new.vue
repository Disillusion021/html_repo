<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="门禁型号">
				<Input v-model="menjin.menjinxinghao" placeholder="请输入门禁型号"></Input>
			</FormItem>
			<FormItem class="w-50" label="门禁设备编号">
				<Input v-model="menjin.menjinshebeibianhao" placeholder="请输入门禁设备编号"></Input>
			</FormItem>
			<FormItem class="w-50" label="维修电话">
				<Input v-model="menjin.tel" placeholder="请输入维修电话"></Input>
			</FormItem>
			<FormItem class="text-right"> 
				<Button @click="submit" type="primary">提交</Button>
				<Button @click="cancel" class="ml-2">取消</Button>
			</FormItem>
		</Form>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				menjin: {
					menjinxinghao: "",
					menjinshebeibianhao: "",
					tel: ""
				}
			}
		},
		methods: {
			submit: function() {
				
				if (this.$data.menjin.menjinxinghao.length === 0) {
					this.message.error("门禁型号必须输入");
					return;
				}
				
				if (this.$data.menjin.menjinshebeibianhao.length === 0) {
					this.message.error("密码必须输入");
					return;
				}
				
				if (this.$data.menjin.tel.length === 0) {
					this.message.error("维修电话必须输入");
					return;
				}
				let self = this;
				this.http.post({
					url: "/shop-menjin-vo/info",
					param: this.$data.menjin
				}).then(data => {
					self.message.info("新增成功");
					this.$tabs.close();
				});
			},
			cancel: function() {
				this.$tabs.close();
			}
		}
	}
</script>

<style>
</style>
