<template>
	<Layout class="p-5 bg-white">
	    <Form class="p-5" :model="buyOrder" :label-width="80">
			<Row>
				<Col span="8">
					<FormItem class="w-100" label="订单编号">
						<label>{{buyOrder.buyOrderId}}</label>
					</FormItem>
					<FormItem class="w-100" label="订单单号">
						<label>{{buyOrder.buyOrderNumber}}</label>
					</FormItem>
					<FormItem class="w-100" label="客户名称">
						<label>{{buyOrder.clientName}}</label>
					</FormItem>
					<FormItem class="w-100" label="金额">
						<label>{{buyOrder.orderMoney}}</label>
					</FormItem>
					<FormItem class="w-100" label="订单状态">
						<label>{{buyOrder.orderStatus}}</label>
					</FormItem>
					<FormItem class="w-100" label="VIP">
						<label>{{buyOrder.vipDeleteFlag}}</label>
					</FormItem>
					<FormItem class="w-100" label="锻炼开始时间">
						<label>{{buyOrder.exerciseStart}}</label>
					</FormItem>
					<FormItem class="w-100" label="锻炼结束时间">
						<label>{{buyOrder.exerciseEnd}}</label>
					</FormItem>
					<FormItem class="w-100" label="锻炼时长">
						<label>{{buyOrder.exerciseTime}}</label>
					</FormItem>
					<FormItem class="w-100" label="订单收款时间">
						<label>{{buyOrder.orderEnd}}</label>
					</FormItem>
					<FormItem class="w-100" label="门店名称">
						<label>{{buyOrder.shopName}}</label>
					</FormItem>
					
				</Col>
			</Row>
			<FormItem>
			    <Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
	    </Form>
	</Layout>
	
</template>

<script>
	export default {
	    data() {
	        return {
	            buyOrder: {
					buyOrderId:"",
					buyOrderNumber:"",
					clientName:"",
					orderMoney:"",
					orderStatus:"",
					exerciseStart:"",
					exerciseEnd:"",
					exerciseTime:"",
					orderEnd:"",
					shopName:"",
					vipDeleteFlag:""
	            }
	        }
	    },
		beforeRouteLeave(to,from,next) {
			this.cancel();
		},
	    methods: {
	        cancel: function () {
	            this.$tabs.close();
	        },
	        init: function () {
	            this.search();
	        },
	        search: function () {
	            let self = this;
	            this.http.get({
	                url: "/buy-order-client-shop-vo/info",
	                param: {
	                    buyOrderId: this.$data.buyOrder.buyOrderId
	                }
	            }).then(data => {
					this.$data.buyOrder = data; 
					 	if(this.$data.buyOrder.orderStatus){
					 		this.$data.buyOrder.orderStatus = "已支付";
							
					 	}else{
					 		this.$data.buyOrder.orderStatus = "待支付";
							this.$data.buyOrder.orderEnd = null
					 	}
						if(this.$data.buyOrder.vipDeleteFlag){
							this.$data.buyOrder.vipDeleteFlag = "是";
							//this.$data.buyOrder.orderEnd = null
							this.$data.buyOrder.orderStatus="已支付";
						}else{
							this.$data.buyOrder.vipDeleteFlag = "否";
						}
						
				});	
	        },
			
		},
	    created: function () {
			this.$data.buyOrder.buyOrderId = this.$route.params.buyOrderId;
			this.init();
			this.search();
	    }
	    
	}
</script>
<style>
</style>