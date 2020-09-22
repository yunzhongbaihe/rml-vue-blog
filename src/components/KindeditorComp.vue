<!--
 富文本编辑器
 API: http://kindeditor.net/doc.php
 -->
<template>
	<div class="kindeditor">
		<textarea :id="id" name="content" v-model="outContent"></textarea>
	</div>
</template>

<script>
	import 'kindeditor/kindeditor-all.js';
	import 'kindeditor/lang/zh-CN.js';
	import 'kindeditor/themes/default/default.css';

	export default {
		name: 'KindeditorComp',
		data(){
			return {
				editor: null,
				outContent: this.content,
			}
		},
		props: {
			content: {
				type: String,
				default: ''
			},
			id: {
				type: String,
				required: true
			},
			width: {
				type: String
			},
			height: {
				type: String
			},
			minWidth: {
				type: Number,
				default: 650
			},
			minHeight: {
				type: Number,
				default: 100
			},
			items: {
				type: Array,
				default: function(){
					return [
						'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
						'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
						'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
						'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
						'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
						'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image',
						// 'multiimage',
						// 'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
						// 'anchor', 'link', 'unlink', '|', 'about',
					]
				}
			},
			noDisableItems: {
				type: Array,
				default: function(){
					return ['source', 'fullscreen']
				}
			},
			filterMode: {
				type: Boolean,
				default: true
			},
			htmlTags: {
				type: Object,
				default: function(){
					return {
						font: ['color', 'size', 'face', '.background-color'],
						span: ['style'],
						div: ['class', 'align', 'style'],
						table: ['class', 'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'style'],
						'td,th': ['class', 'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor', 'style'],
						a: ['class', 'href', 'target', 'name', 'style'],
						embed: ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality',
							'style', 'align', 'allowscriptaccess', '/'],
						img: ['src', 'width', 'height', 'border', 'alt', 'title', 'align', 'style', '/'],
						hr: ['class', '/'],
						br: ['/'],
						'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6': ['align', 'style'],
						'tbody,tr,strong,b,sub,sup,em,i,u,strike': []
					}
				}
			},
			wellFormatMode: {
				type: Boolean,
				default: true
			},
			resizeType: {
				type: Number,
				default: 0
			},
			themeType: {
				type: String,
				default: 'default'
			},
			langType: {
				type: String,
				default: 'zh-CN'
			},
			designMode: {
				type: Boolean,
				default: true
			},
			fullscreenMode: {
				type: Boolean,
				default: false
			},
			basePath: {
				type: String
			},
			themesPath: {
				type: String
			},
			pluginsPath: {
				type: String,
				default: ''
			},
			langPath: {
				type: String
			},
			minChangeSize: {
				type: Number,
				default: 5
			},
			loadStyleMode: {
				type: Boolean,
				default: true
			},
			urlType: {
				type: String,
				default: ''
			},
			newlineTag: {
				type: String,
				default: 'p'
			},
			pasteType: {
				type: Number,
				default: 2
			},
			dialogAlignType: {
				type: String,
				default: 'page'
			},
			shadowMode: {
				type: Boolean,
				default: true
			},
			zIndex: {
				type: Number,
				default: 811213
			},
			useContextmenu: {
				type: Boolean,
				default: true
			},
			syncType: {
				type: String,
				default: 'form'
			},
			indentChar: {
				type: String,
				default: '\t'
			},
			cssPath: {
				type: [String, Array]
			},
			cssData: {
				type: String
			},
			bodyClass: {
				type: String,
				default: 'ke-content'
			},
			colorTable: {
				type: Array
			},
			afterCreate: {
				type: Function
			},
			afterChange: {
				type: Function,
				default: () => {
				},
			},
			afterTab: {
				type: Function
			},
			afterFocus: {
				type: Function
			},
			afterBlur: {
				type: Function
			},
			afterUpload: {
				type: Function
			},
			uploadJson: {
				type: String
			},
			fileManagerJson: {
				type: Function
			},
			allowPreviewEmoticons: {
				type: Boolean,
				default: true
			},
			allowImageUpload: {
				type: Boolean,
				default: true
			},
			allowFlashUpload: {
				type: Boolean,
				default: true
			},
			allowMediaUpload: {
				type: Boolean,
				default: true
			},
			allowFileUpload: {
				type: Boolean,
				default: true
			},
			allowFileManager: {
				type: Boolean,
				default: false
			},
			fontSizeTable: {
				type: Array,
				default: function(){
					return ['9px', '10px', '12px', '14px', '16px', '18px', '24px', '32px']
				}
			},
			imageTabIndex: {
				type: Number,
				default: 0
			},
			formatUploadUrl: {
				type: Boolean,
				default: true
			},
			fullscreenShortcut: {
				type: Boolean,
				default: false
			},
			extraFileUploadParams: {
				type: Array,
				default: function(){
					return []
				}
			},
			filePostName: {
				type: String,
				default: 'imgFile'
			},
			fillDescAfterUploadImage: {
				type: Boolean,
				default: false
			},
			afterSelectFile: {
				type: Function
			},
			pagebreakHtml: {
				type: String,
				default: '<hr style=”page-break-after: always;” class=”ke-pagebreak” />'
			},
			allowImageRemote: {
				type: Boolean,
				default: true
			},
			autoHeightMode: {
				type: Boolean,
				default: false
			},
			fixToolBar: {
				type: Boolean,
				default: false
			},
			tabIndex: {
				type: Number
			},
		},
		watch: {
			content(val){
				this.editor && val !== this.outContent && this.editor.html(val);
			},
			outContent(val){
				this.$emit('update:content', val);
				this.$emit('on-content-change', val);
			}
		},
		mounted(){
			const vm = this;
			vm.editor = window.KindEditor.create('#' + this.id, {
				width: vm.width,
				height: vm.height,
				minWidth: vm.minWidth,
				minHeight: vm.minHeight,
				items: vm.items,
				noDisableItems: vm.noDisableItems,
				filterMode: vm.filterMode,
				htmlTags: vm.htmlTags,
				wellFormatMode: vm.wellFormatMode,
				resizeType: vm.resizeType,
				themeType: vm.themeType,
				langType: vm.langType,
				designMode: vm.designMode,
				fullscreenMode: vm.fullscreenMode,
				basePath: vm.basePath,
				themesPath: vm.cssPath,
				pluginsPath: vm.pluginsPath,
				langPath: vm.langPath,
				minChangeSize: vm.minChangeSize,
				loadStyleMode: vm.loadStyleMode,
				urlType: vm.urlType,
				newlineTag: vm.newlineTag,
				pasteType: vm.pasteType,
				dialogAlignType: vm.dialogAlignType,
				shadowMode: vm.shadowMode,
				zIndex: vm.zIndex,
				useContextmenu: vm.useContextmenu,
				syncType: vm.syncType,
				indentChar: vm.indentChar,
				cssPath: vm.cssPath,
				cssData: vm.cssData,
				bodyClass: vm.bodyClass,
				colorTable: vm.colorTable,
				afterCreate: vm.afterCreate,
				afterChange: function(){
					vm.afterChange();
					vm.outContent = this.html();
				},
				afterTab: vm.afterTab,
				afterFocus: vm.afterFocus,
				afterBlur: vm.afterBlur,
				afterUpload: vm.afterUpload,
				uploadJson: vm.uploadJson,
				fileManagerJson: vm.fileManagerJson,
				allowPreviewEmoticons: vm.allowPreviewEmoticons,
				allowImageUpload: vm.allowImageUpload,
				allowFlashUpload: vm.allowFlashUpload,
				allowMediaUpload: vm.allowMediaUpload,
				allowFileUpload: vm.allowFileUpload,
				allowFileManager: vm.allowFileManager,
				fontSizeTable: vm.fontSizeTable,
				imageTabIndex: vm.imageTabIndex,
				formatUploadUrl: vm.formatUploadUrl,
				fullscreenShortcut: vm.fullscreenShortcut,
				extraFileUploadParams: vm.extraFileUploadParams,
				filePostName: vm.filePostName,
				fillDescAfterUploadImage: vm.fillDescAfterUploadImage,
				afterSelectFile: vm.afterSelectFile,
				pagebreakHtml: vm.pagebreakHtml,
				allowImageRemote: vm.allowImageRemote,
				autoHeightMode: vm.autoHeightMode,
				fixToolBar: vm.fixToolBar,
				tabIndex: vm.tabIndex,
			});
		},
		created(){
			KindEditor.plugin('image', function(K){
				const editor = this, name = 'image';
				// 点击图标时执行
				editor.clickToolbar(name, function(){
					editor.insertHtml('你好');
				});
			});
		},
	}
</script>

<style scoped>
	>>> .ke-toolbar {
		display: flex !important;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

	>>> .ke-toolbar .ke-outline {
		float: none;
	}
</style>