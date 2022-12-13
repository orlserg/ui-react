"use strict";(self.webpackChunk_wb_tech_ui_react=self.webpackChunk_wb_tech_ui_react||[]).push([[753],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Hw:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Source,Lo:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconGallery,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,_R:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconItem,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/components/button-group/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnDesktop:()=>ColumnDesktop,ColumnMobile:()=>ColumnMobile,RowDesktop:()=>RowDesktop,RowMobile:()=>RowMobile,Sandbox:()=>Sandbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),button_group=__webpack_require__("./src/components/button-group/index.tsx");function _createMdxContent(props){var _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"ButtonGroup"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент формирования группы кнопок соответствующей дизайну."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Импорт компонента в код."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { ButtonGroup } from '@wb-tech/ui-react';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Ниже приведены примеры основных состояний описанных в дизайн системе."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button-group--column-desktop"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button-group--row-desktop"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button-group--column-mobile"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-buttons-button-group--row-mobile"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Параметры"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{of:button_group.h})]})}const index_docs=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,esm.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var components_button=__webpack_require__("./src/components/button/index.tsx");const index_stories={title:"Buttons/Button Group",component:button_group.h,args:{children:[(0,jsx_runtime.jsx)(components_button.z,{presetStyle:"primary",children:"Применить"},"1"),(0,jsx_runtime.jsx)(components_button.z,{presetStyle:"default",children:"Отмена"},"2")]},argTypes:{className:{control:"text"},children:{control:"text"}},parameters:{docs:{page:index_docs},design:{type:"figma",url:"https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=3250%3A112858&t=kP2lzF6gosdgFD3W-0"}}};var Sandbox=function Sandbox(props){return(0,jsx_runtime.jsx)(button_group.h,Object.assign({},props))};Sandbox.displayName="Sandbox";var ColumnDesktop=Sandbox.bind({});ColumnDesktop.args={direction:"column",presetStyle:"desktop"};var ColumnMobile=Sandbox.bind({});ColumnMobile.args={direction:"column",presetStyle:"mobile"};var RowDesktop=Sandbox.bind({});RowDesktop.args={direction:"row",presetStyle:"desktop"};var RowMobile=Sandbox.bind({});RowMobile.args={direction:"row",presetStyle:"mobile"},Sandbox.parameters=Object.assign({storySource:{source:"(props) => <ButtonGroup {...props} />"}},Sandbox.parameters),ColumnDesktop.parameters=Object.assign({storySource:{source:"(props) => <ButtonGroup {...props} />"}},ColumnDesktop.parameters),ColumnMobile.parameters=Object.assign({storySource:{source:"(props) => <ButtonGroup {...props} />"}},ColumnMobile.parameters),RowDesktop.parameters=Object.assign({storySource:{source:"(props) => <ButtonGroup {...props} />"}},RowDesktop.parameters),RowMobile.parameters=Object.assign({storySource:{source:"(props) => <ButtonGroup {...props} />"}},RowMobile.parameters);var __namedExportsOrder=["Sandbox","ColumnDesktop","ColumnMobile","RowDesktop","RowMobile"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button-group/stories/index.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/button-group/stories/index.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);