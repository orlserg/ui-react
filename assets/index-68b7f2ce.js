import{a}from"./jsx-runtime-68f49b4e.js";import{r}from"./index-f1f749bf.js";import{r as n}from"./index-d0c61868.js";import{u as c}from"./index-464e8f3b.js";import{L as m}from"./index-2f4ca948.js";const _="_button_3amv5_1",E="_button_compact_3amv5_1",b="_button_large_3amv5_1",A="_button_medium_3amv5_1",F="_button_small_3amv5_1",D="_button_default_3amv5_1",B="_button_dashed_3amv5_1",f="_button_ghost_3amv5_1",v="_button_success_3amv5_1",y="_button_negative_3amv5_1",p="_button_deprecated_3amv5_1",g="_button_primary_3amv5_1",h={button:_,button_compact:E,button_large:b,button_medium:A,button_small:F,button_default:D,button_dashed:B,button_ghost:f,button_success:v,button_negative:y,button_deprecated:p,button_primary:g},C={primary:"white",default:"rich-grey",dashed:"rich-grey",ghost:"rich-grey",negative:"red",success:"rich-grey",deprecated:"white"},o=e=>{var t;return n.isElement(e)&&!!(e.type==="svg"||!n.isFragment(e)&&((t=e.type.name)!=null&&t.startsWith("Icon")))},V=e=>Array.isArray(e)?e.every(o):o(e),s=({presetSize:e="medium",presetStyle:t="default",type:l="button",...u})=>{const i=c(h,u.className),d=r.useMemo(()=>u.isLoading?a(m,{presetStyle:C[t],presetSize:"button"}):u.children,[u.children,u.isLoading,t]);return a("button",{id:u.id,type:l,disabled:u.isLoading??u.disabled,tabIndex:u.isLoading||u.disabled?-1:u.tabIndex,onFocus:u.onFocus,onClick:u.onClick,accessKey:u.accessKey,className:i("button",{[`button_${e}`]:e,[`button_${t}`]:t,button_compact:typeof u.isCompact>"u"?V(u.children):u.isCompact}),children:d})};try{s.displayName="Button",s.__docgenInfo={description:"Компонент `Button` представляет собой кнопку, которая может использоваться для выполнения каких-либо действий в приложении.",displayName:"Button",props:{className:{defaultValue:null,description:"CSS класс или классы, которые будут применены к кнопке.",name:"className",required:!1,type:{name:"string | TStyle"}},presetSize:{defaultValue:{value:"medium"},description:"Устанавливает размер кнопки.",name:"presetSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},presetStyle:{defaultValue:{value:"default"},description:"Устанавливает стиль кнопки.",name:"presetStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"dashed"'},{value:'"ghost"'},{value:'"negative"'},{value:'"success"'},{value:'"deprecated"'}]}},isLoading:{defaultValue:null,description:"Если установлен в true, то кнопка будет в состоянии загрузки.",name:"isLoading",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"Если установлен в true, то кнопка будет компактной.",name:"isCompact",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Уникальный идентификатор для кнопки.",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Устанавливает тип кнопки.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},tabIndex:{defaultValue:null,description:"Устанавливает порядок перехода по кнопке с помощью клавиши `Tab`.",name:"tabIndex",required:!1,type:{name:"number"}},onFocus:{defaultValue:null,description:"Определяет функцию обратного вызова, которая будет вызвана при фокусировке на кнопке.",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onClick:{defaultValue:null,description:"Определяет функцию обратного вызова, которая будет выполнена при нажатии на кнопку.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},children:{defaultValue:null,description:"Содержимое кнопки.",name:"children",required:!1,type:{name:"ReactNode"}},accessKey:{defaultValue:null,description:"Устанавливает горячую клавишу для кнопки.",name:"accessKey",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Если установлен в true, то кнопка будет заблокирована.",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{s as B};
//# sourceMappingURL=index-68b7f2ce.js.map
