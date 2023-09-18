<template>
	<Layout class="p-5 bg-white">
		<Form class="p-5" :model="vip" :label-width="150">
			<Row>
				<Col span="8">
					<FormItem class="w-100" label="会员编号">
						<span class="ml-1">{{vip.vipId}}</span>
					</FormItem>
					<FormItem class="w-100" label="会员名">
						<span class="ml-1">{{vip.clientName}}</span>
					</FormItem>
					<FormItem class="w-100" label="性别">
						<span class="ml-1">{{vip.sex}}</span>
					</FormItem>
					<FormItem class="w-100" label="年龄">
						<span class="ml-1">{{vip.age}}</span>
					</FormItem>
					<FormItem class="w-100" label="联系电话">
						<span class="ml-1">{{vip.phone}}</span>
					</FormItem>
					<FormItem class="w-100" label="押金">
						<span class="ml-1">{{vip.deposit}}</span>
					</FormItem>
				</Col>
				<Col span="8">
					<FormItem class="w-100" label="押金状态">
						<span class="ml-1">{{vip.depositState}}</span>
					</FormItem>
					<FormItem class="w-100" label="VIP类别">
						<span class="ml-1">{{vip.cardName}}</span>
					</FormItem>
					<FormItem class="w-100" label="注册时间">
						<span class="ml-1">{{vip.regDate}}</span>
					</FormItem>
					<FormItem class="w-100" label="VIP到期时间">
						<Input v-model="vip.vipDeadline" />
					</FormItem>	
					<FormItem class="w-100" label="VIP剩余时间/分">
						<span class="ml-1">{{vip.timeLeft}}</span>
					</FormItem>
				</Col>
			</Row>
			<FormItem class="text-left">
				<Button  type="primary" @click="submit">提交</Button>
				<Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
		</Form>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				vip: {
					vipId: 0,
					clientName: "",
					sex: "",
					age: "",
					phone: "",
					deposit: "",
					depositState: "",
					cardName: "",
					regDate: "",
					vipDeadline: "",
					timeLeft: "",
				},
			}
		},
		methods: {
			cancel: function() {
				this.$router.go(-1);
				this.$tabs.close();
			},
			submit: function() {
				this.http.put({
					url: "/vip/info",
					param: this.vip,
				}).then(() => {
					this.message.info("修改成功");
					this.$router.go(-1);
					this.$tabs.close();
				});
			},
			init: function() {
				this.search();
			},
			search: function() {
				this.http.get({
					url: "/vip-client-deposit-card-vo/info",
					param: {
						vipId: this.$data.vip.vipId
					}
				}).then(data => {
					if (data.sex == 1) {
						data.sex = '男';
					}
					this.vip = data;
				});
			},
		},
		created: function() {},
		mounted: function() {
			this.$data.vip.vipId = this.$route.params.vipId;
			this.init();
		}
	}
</script>
<style>
</style>
