<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="120">
			<FormItem class="w-50" label="客户编号">
				<Input v-model="deposit.clientId" placeholder="请输入密码"></Input>
			</FormItem>
			<FormItem class="w-50" label="押金金额">
				<Input v-model="deposit.deposit" placeholder="请输入押金金额"></Input>
			</FormItem>
			<FormItem class="w-50" label="押金状态">
				<Input v-model="deposit.depositState" placeholder="请确认押金状态"></Input>
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
				deposit: {
					clientId: "",
					deposit: "",
					depositState: ""
				},
			}
		},
		methods: {
			submit: function() {
				
				if (this.$data.deposit.clientId.length === 0) {
					this.message.error("客户编号必须输入");
					return;
				}
				
				if (this.$data.deposit.deposit.length === 0) {
					this.message.error("押金金额必须输入");
					return;
				}
				
				if (this.$data.deposit.depositState === 0) {
					this.message.error("押金状态必须确认");
					return;
				}
				
				this.http.post({
					url: "/deposit/info",
					param: this.$data.deposit
				}).then(data => {
					this.message.info("新增成功");
					this.$router.go(-1);
				});
			},
			cancel: function() {
				this.$tabs.close();
			}
		},
		created: function() {
			},
	}
</script>

<style>
	
</style>