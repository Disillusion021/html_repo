<template>
	<!-- <Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="订单单号">
				<Input v-model="buyOrder.buyOrderNumber" placeholder="请输入订单单号"></Input>
			</FormItem>
			<FormItem class="w-50" label="客户名">
				<Input v-model="buyOrder.clientName" placeholder="请输入客户名"></Input>
			</FormItem>
			<FormItem class="w-50" label="金额">
				<Input v-model="buyOrder.orderMoney" placeholder="请金额"></Input>
			</FormItem>
			<FormItem class="w-50" label="锻炼开始时间">
				<Input v-model="buyOrder.exerciseStart" placeholder="请输入锻炼开始时间"></Input>
			</FormItem>
			<FormItem class="w-50" label="订单状态">
				<Input v-model="buyOrder.orderStatus" placeholder="请输入订单状态"></Input>
			</FormItem>
			<FormItem class="w-50" label="锻炼结束时间">
				<Input v-model="buyOrder.exerciseEnd" placeholder="请输入锻炼结束时间"></Input>
			</FormItem>
			<FormItem class="w-50" label="锻炼时长">
				<Input v-model="buyOrder.exerciseTime" placeholder="请输入锻炼时长"></Input>
			</FormItem>
			<FormItem class="w-50" label="订单收款时间">
				<Input v-model="buyOrder.orderEnd" placeholder="请输入订单收款时间"></Input>
			</FormItem>
			<FormItem class="w-50" label="门店名">
				<Input v-model="buyOrder.shopName" placeholder="请输入门店名"></Input>
			</FormItem>
			
			<FormItem class="text-right"> 
				<Button @click="submit" type="primary">提交</Button>
				<Button @click="cancel" class="ml-2">取消</Button>
			</FormItem>
		</Form>
	</Layout> -->
</template>

<script>
	// export default {
	// 	data() {
	// 		return {
	// 			//allPermissions: [],
	// 			buyOrder: {
	// 				buyOrderNumber: "",
	// 				clientName: "",
	// 				orderMoney: "",
	// 				exerciseStart: "",
	// 				orderStatus: "",
	// 				exerciseEnd:"",
	// 				exerciseTime:"",
	// 				orderEnd:"",
	// 				shopName:"",
	// 			},
	// 			// roles: []
	// 		}
	// 	},
	// 	// created: function() {
	// 	// 	this.getAllRole();
	// 	// },
	// 	methods: {
	// 		// getAllRole: function() {
	// 		// 	this.http.get({
	// 		// 		url: "/role/all",
	// 		// 		param: {}
	// 		// 	}).then(data => {
	// 		// 		this.$data.roles = data;
	// 		// 	});
	// 		// },
	// 		submit: function() {
				
	// 			if (this.$data.buyOrder.buyOrderNumber.length === 0) {
	// 				this.message.error("订单单号");
	// 				return;
	// 			}
				
	// 			if (this.$data.buyOrder.clientName.length === 0) {
	// 				this.message.error("客户姓名");
	// 				return;
	// 			}
				
	// 			if (this.$data.buyOrder.orderMoney.length === 0) {
	// 				this.message.error("订单金额");
	// 				return;
	// 			}
				
	// 			if (this.$data.buyOrder.exerciseStart.length === 0) {
	// 				this.message.error("订单开始时间");
	// 				return;
	// 			}
				
	// 			if (this.$data.buyOrder.orderStatus.length === 0) {
	// 				this.message.error("订单状态");
	// 				return;
	// 			}
				
	// 			if (this.$data.buyOrder.exerciseEnd.length === 0) {
	// 				this.message.error("订单结束时间");
	// 				return;
	// 			}
	// 			if (this.$data.buyOrder.exerciseTime.length === 0) {
	// 				this.message.error("锻炼时长");
	// 				return;
	// 			}
	// 			if (this.$data.buyOrder.orderEnd.length === 0) {
	// 				this.message.error("订单收款时间");
	// 				return;
	// 			}
	// 			if (this.$data.buyOrder.shopName.length === 0) {
	// 				this.message.error("门店名");
	// 				return;
	// 			}
				
				
	// 			 //let self = this;
				
				
	// 			// let roles = [];
	// 			// roles.push(this.$data.user.role+"");
	// 			// this.$data.user.roles = JSON.stringify(roles);
	// 			// delete this.$data.user.role;
	// 			this.http.post({
	// 				url: "/buy-order-client-shop-vo/info",
	// 				param: this.$data.buyOrder
	// 			}).then(data => {
	// 				self.message.info("新增成功");
	// 				this.$tabs.close();
	// 			});
	// 		},
	// 		cancel: function() {
	// 			this.$tabs.close();
	// 		}
	// 	}
	// }
</script>
<style>
</style>