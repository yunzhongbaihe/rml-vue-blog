<template>
	<div>
		<template v-for="item in menuData">
			<el-menu-item v-if="(!item.children || !item.children.length)" :index="item.path">{{item.name}}</el-menu-item>
			<el-submenu v-else :index="item.path">
				<template slot="title">{{item.name}}</template>
				<MenuRender :menu-data="item.children"></MenuRender>
			</el-submenu>
		</template>
	</div>
</template>

<script>
	export default {
		props: ['menuData'],
		name: 'MenuRender'
	}
</script>

<style scoped>
</style>