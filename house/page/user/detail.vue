<template>
    <Layout class="p-5 bg-white">
        <Form class="p-5" :model="user" :label-width="80">
			<Row>
				<Col span="8">
					<FormItem class="w-100" label="账号">
						<Input v-model="user.account"/>
					</FormItem>
					<FormItem class="w-100" label="密码">
						<Input v-model="user.password"/>
					</FormItem>
					<FormItem class="w-100" label="电话">
						<Input v-model="user.tel"/>
					</FormItem></Col>
				<Col span="8">
					<FormItem class="w-100" label="身份证">
						<Input v-model="user.secId"/>
					</FormItem>
					<FormItem class="w-100" label="创建时间">
						<label>{{user.ct}}</label>
					</FormItem>
				</Col>
				<Col span="8">
					<FormItem class="w-100" label="角色">
						<div v-for="(item, key) in roles" :key="key">
							<Checkbox @on-change="roleChange(item.roleId)" v-model="item.has">
							{{item.roleName}}</Checkbox>
						</div>
					</FormItem>
				</Col>
			</Row>
            
            
			<FormItem>
			    <Button @click="submit" type="primary">提交</Button>
			    <Button @click="cancel" style="margin-left: 8px">取消</Button>
			</FormItem>
        </Form>
    </Layout>

</template>
<script>
    export default {
        data() {
            return {
                user: {
                    nickName: "",
                    password: "",
                },
				userId: 0,
                roles: [],
                allRoles: [],
                // updateFlg: false,
                // oldUser: {},
                // oldRoles: [],

            }
        },
        methods: {
			roleChange: function(roleId) {
				
			},
            cancel: function () {
                this.$tabs.close();
            },
            submit: function () {
                let self = this;
				let roles = [];
				for (let index in this.$data.roles) {
					let roleItem = this.$data.roles[index];
					if (roleItem.has) {
						roles.push(roleItem.roleId);
					}
				}
				// self.user.openId = 0;
				self.user.roles = JSON.stringify(roles);
				delete self.user.ct;
				delete self.user.ut;
				delete self.user.cu;
				delete self.user.uu;
				delete self.user.openId;
				console.log(self.user);
                this.http.put({
                    url: "/user/info",
                    param: self.user,
                }).then(() => {
                    self.message.info("修改成功");
                });
            },
            init: function () {
                this.search();
            },
            searchUser: function () {
                let self = this;

                this.http.get({
                    url: "/user/info",
                    param: {
                        userId: self.$data.user.userId
                    }
                }).then(data => {
					self.user = data.user;
					for (let jndex in self.allRoles) {
						let role = self.allRoles[jndex];
						role.has = false;
						for (let index in data.roles) {
							let roleItem = data.roles[index];
							if (roleItem.roleId == role.roleId) {
								role.has = true;
								this.roles.push(role);
							}
						}
					}
					
                });
            },

            search: function () {
                let self = this;
				// console.log("hahahahah");
                this.http.get({
                    url: "/role/all",
                }).then(data => {
                    self.$data.allRoles = data;
					console.log(self.allRoles);
                }).then(() => {
                    self.searchUser();
                });
            }

        },

        created: function () {

        },
        mounted: function () {
			this.$data.user.userId = this.$route.params.userId;
            this.init();
        }
    }
</script>

<style>
</style>
