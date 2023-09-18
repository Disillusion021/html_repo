<template>
    <Layout class="p-5 bg-white">
        <Form class="p-5" :model="DepositClientVo" :label-width="80">			
					<FormItem class="w-50" label="用户名" >
						<label>{{current.user.account}}</label>
					</FormItem>	
					<FormItem class="w-50" label="客户名">
						<label>{{DepositClientVo.clientName}}</label>								
					</FormItem>
					<FormItem class="w-50" label="押金金额">
						<label>{{DepositClientVo.deposit}}</label>								
					</FormItem>
					<FormItem class="w-50" label="押金状态">	
						<label>{{DepositClientVo.depositState}}</label>
						<!-- <Select v-model="DepositClientVo.depositState" style="width:200px" @change="aa()">
							<Option v-for="item in depositState" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select> -->
					</FormItem>						
					 <FormItem class="w-50" label="原因" v-if="flag" >						
						<Input v-model="Record.reason" type="textarea" :rows="4" placeholder="扣押/退押原因" />
					 </FormItem>
			<FormItem>
				<Button @click="back(depositId,deposit,depositState)" type="primary" style="margin-left: 8px" v-if="flag">退押</Button>
				<Button @click="leave(depositId,deposit,depositState)" type="primary" style="margin-left: 8px" v-if="flag">扣押</Button>
			    <Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
        </Form>
    </Layout>
</template>
<script>
	import store from "../../common/store.js"
    export default {
        data() {
            return {
                DepositClientVo: {
					depositId:'',
					clientId:'',
					clientName:'',
					deposit:'',
					depositState:'',
				},
				depositState:[
					{
						value: '已充值',
						label: '已充值'
					},
					{
						value: '未充值',
						label: '未充值'
					},
					{
						value: '已扣押',
						label: '已扣押'
					},
				],
				Record:{
					depositId:'',										
					clientId:'',
					userId:'',
					reason:'',
				},
				currentUser: {
				},
				flag:true
            }
        },
        methods: {		
            cancel: function() {
            	this.$router.go(-1);
            	this.$tabs.close();
            },	
			back: function(depositId,deposit,depositState) {
			
				this.$data.DepositClientVo.deposit = 0;
				this.$data.DepositClientVo.depositState = "未充值";				
				this.http.put({
					url: "/deposit/info",
					param: this.DepositClientVo,
				}).then(() => {
					this.message.info("退押成功");		
					this.http.post({
						url: "/record/info",
						param: this.Record,
					}).then(() => {
						this.message.info("记录已生成");																													
					});					
				}).then(() =>{
					this.$router.push({
						name: "deposit"
					});
				});					
			},
			leave: function() {
				this.$data.DepositClientVo.deposit = 0;
				this.$data.DepositClientVo.depositState = "已扣押";
				this.http.put({
					url: "/deposit/info",
					param: this.DepositClientVo,
				}).then(() => {
					this.message.info("扣押成功");	
									
					this.http.post({
						url: "/record/info",
						param: this.Record,
					}).then(() => {
						this.message.info("记录已生成");																													
					});	
				}).then(() =>{
					this.$router.push({
						name: "deposit"
					});
				});					
			},
            init: function () {
                this.search();
            },
            search: function () {
				
                let self = this;
                this.http.get({
                    url: "/deposit-client-vo/info",
                    param: {
                        depositId: this.$data.DepositClientVo.depositId
                    }
                }).then(data => {					
					this.$data.DepositClientVo = data;		
					this.$data.Record.clientId = this.$data.DepositClientVo.clientId					
					console.log("current.user.userId" + current.user.userId)
					if(this.$data.DepositClientVo.depositState == "已扣押" || this.$data.DepositClientVo.depositState == "未充值"){
						this.flag = false;
					}
                });				
            },
        },
        created: function () {
			this.$data.DepositClientVo.depositId = this.$route.params.depositId;
			this.$data.Record.depositId = this.$route.params.depositId;
																				
			// console.log(this.$data.Record.depositId + "depositId")			
			this.init();
			this.search();			
        },
        mounted: function () {		
			
        },
		computed: {
			current: function() {				
				this.$data.Record.userId = store.state.currentUser.user.userId;				
				return store.state.currentUser;
			}
		}
    }
</script>

<style>
</style>
