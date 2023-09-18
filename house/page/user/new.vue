<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="账户名">
				<Input v-model="user.account" placeholder="请输入用户的账户"></Input>
			</FormItem>
			<FormItem class="w-50" label="密码">
				<Input v-model="user.password" placeholder="请输入密码"></Input>
			</FormItem>
			<FormItem class="w-50" label="确认密码">
				<Input v-model="user.confirmPassword" placeholder="请确认密码"></Input>
			</FormItem>
			<FormItem class="w-50" label="手机号">
				<Input v-model="user.tel" placeholder="请输入用户的手机号"></Input>
			</FormItem>
			<FormItem class="w-50" label="身份证号">
				<Input v-model="user.secId" placeholder="请输入用户的身份证号"></Input>
			</FormItem>
			<FormItem class="" label="角色">
				<Radio-group v-model="user.role">
					<Radio v-for="(item,index) in roles" :label="item.roleId">{{item.roleName}}</Radio>
				</Radio-group>
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
				allPermissions: [],
				user: {
					account: "",
					password: "",
					tel: "",
					secId: "",
					confirmPassword: "",
					role: ""
				},
				roles: []
			}
		},
		created: function() {
			this.getAllRole();
		},
		methods: {
			getAllRole: function() {
				this.http.get({
					url: "/role/all",
					param: {}
				}).then(data => {
					this.$data.roles = data;
				});
			},
			submit: function() {
				
				if (this.$data.user.account.length === 0) {
					this.message.error("账户名必须输入");
					return;
				}
				
				if (this.$data.user.password.length === 0) {
					this.message.error("密码必须输入");
					return;
				}
				
				if (this.$data.user.password !== this.$data.user.confirmPassword) {
					this.message.error("确认密码必须一致");
					return;
				}
				
				if (this.$data.user.tel.length === 0) {
					this.message.error("手机号必须输入");
					return;
				}
				
				if (this.$data.user.secId.length === 0) {
					this.message.error("身份证必须输入");
					return;
				}
				
				if (this.$data.user.role.length === 0) {
					this.message.error("角色必须选择");
					return;
				}
				let self = this;
				
				
				let roles = [];
				roles.push(this.$data.user.role+"");
				this.$data.user.roles = JSON.stringify(roles);
				delete this.$data.user.role;
				this.http.post({
					url: "/user/info",
					param: this.$data.user
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
