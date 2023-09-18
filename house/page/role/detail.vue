<template>
	<Layout class="p-5 bg-white">
		<Form :label-width="80">
			<FormItem class="w-50" label="角色ID">
				<label>{{role.roleId}}</label>
			</FormItem>
			<FormItem class="w-50" label="角色名">
				<Input v-model="role.roleName" placeholder="请输入角色的名称"></Input>
			</FormItem>
			<FormItem class="w-50" label="状态">
				<i-switch v-model="role.statu"></i-switch>
			</FormItem>
			<FormItem class="w-50" label="权限">
				<Tree 
					:data="allPermissions" show-checkbox multiple></Tree>
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
		data: function() {
			return {
				role: {
					roleId: 0,
					roleName: "",
					permissions: [],
				},
				permissions: [],
				allPermissions: []
			};
		},
		methods: {
			submit: function() {
				let self = this;
				
				this.$data.permissions = [];
				for (let index in this.$data.allPermissions) {
					let permission = this.$data.allPermissions[index];
					if (permission.indeterminate || permission.checked) {
						this.$data.permissions.push(permission.permissionId);
						
						for (let jndex in permission.children) {
							let subPermission = permission.children[jndex];
							if (subPermission.checked) {
								this.$data.permissions.push(subPermission.permissionId);
							}
						}
					}
				}
							
				if (this.$data.permissions.length === 0) {
					this.message.error("请选择权限");
					return;
				}
				
				if (this.$data.role.roleName.length === 0) {
					this.message.error("请输入角色名");
					return;
				}
				delete self.$data.role.ct;
				delete self.$data.role.ut;
				delete self.$data.role.cu;
				delete self.$data.role.uu;
				self.$data.role.permissions = JSON.stringify(self.$data.permissions);
				this.http.put({
					url: "/role/info",
					param: self.$data.role,
				}).then(data => {
					self.message.info("修改成功");
					self.$tabs.close();
				});
			},
			cancel: function() {
				this.$tabs.close();
			},
			init: function() {
				this.searchPermission();
			},
			searchPermission: function() {
				let self = this;
				this.http.get({
					url: "/role/info",
					param: {
						roleId : self.$data.role.roleId
					}
				}).then(data => {
					console.log(data);
					self.$data.role = data.role;
					this.$data.permissions = data.permissions ? data.permissions : [];
					
				}).then(() => {
					self.http.get({
						url: "/permission/all",
					}).then(data => {
						console.log(data);
						self.$data.allPermissions = [];
						for (let index in data) {
							let permission = {};
							permission.title = data[index].name;
							permission.expand = true;
							permission.children = [];
							permission.permissionId = data[index].permissionId;
							
							for (let jndex in data[index].permissions) {
								let subPermission = {};
								subPermission.title = data[index].permissions[jndex].name;
								subPermission.permissionId = data[index].permissions[jndex].permissionId;
								
								if (self.$data.permissions.includes(data[index].permissions[jndex].permissionId)) {
									subPermission.checked = true;
								}
								
								permission.children.push(subPermission);
							}
							
							self.$data.allPermissions.push(permission);
						}
					});
					
					
					
				});
			}
		},
		created: function () {
			this.$data.role.roleId = this.$route.params.roleId;
			console.log(this.$data.role.roleId);
			this.init();
		},
	}
</script>

<style>
</style>
