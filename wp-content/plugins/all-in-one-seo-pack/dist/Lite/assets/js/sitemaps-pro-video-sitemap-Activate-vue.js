(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["sitemaps-pro-video-sitemap-Activate-vue","sitemaps-lite-video-sitemap-Blur-vue"],{"17a7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("core-blur",[i("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),i("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0))}})]),i("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[i("base-toggle",{attrs:{value:!0}})]},proxy:!0}])}),i("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[i("div",{staticClass:"aioseo-sitemap-preview"},[i("base-button",{attrs:{size:"medium",type:"blue"}},[i("svg-external"),t._v(" "+t._s(t.strings.openSitemap)+" ")],1)],1),i("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.noIndexDisplayed)+" "),i("br"),t._v(" "+t._s(t.strings.doYou404)+" "),i("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})])]},proxy:!0}])})],1)},a=[],o=i("92e5"),n={mixins:[o["c"]]},r=n,d=i("2877"),l=Object(d["a"])(r,s,a,!1,null,null,null);e["default"]=l.exports},6782:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("core-card",{attrs:{slug:"videoSitemap","header-text":t.strings.video}},[i("blur"),i("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-video-sitemap"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-video-sitemap","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonTextActivate,"learn-more-link":t.$links.getDocUrl("videoSitemaps"),"feature-list":[t.strings.customFieldSupport,t.strings.exclude]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.videoSitemapHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?i("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)],1)},a=[],o=i("5530"),n=i("17a7"),r=i("2f62"),d=i("92e5"),l={mixins:[d["c"]],components:{Blur:n["default"]},data:function(){return{failed:!1,activationLoading:!1,strings:{videoSitemapHeader:this.$t.__("Enable Video Sitemap on your Site",this.$tdPro),ctaButtonTextActivate:this.$t.__("Activate Video Sitemap",this.$tdPro),learnMoreText:this.$t.__("Learn more about Video Sitemaps",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["b"])(["installPlugins"])),Object(r["d"])(["updateAddon"])),{},{activateAddon:function(){var t=this;this.failed=!1,this.activationLoading=!0;var e=this.$addons.getAddon("aioseo-video-sitemap");this.installPlugins([{plugin:e.basename}]).then((function(i){t.activationLoading=!1,i.body.failed.length?t.failed=!0:(e.isActive=!0,t.updateAddon(e))})).catch((function(){t.activationLoading=!1}))}})},u=l,c=i("2877"),p=Object(c["a"])(u,s,a,!1,null,null,null);e["default"]=p.exports},"92e5":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o}));var s={methods:{validateLinksPerIndex:function(t){1>t.target.value&&(t.target.value=1),5e4<t.target.value&&(t.target.value=5e4)}}},a={data:function(){return{strings:{news:this.$t.__("News Sitemap",this.$td),setPublicationName:this.$t.__("Set Publication Name",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),description:this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open News Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock News Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("News Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}}},o={data:function(){return{strings:{customFieldSupport:this.$t.__("Custom Field Support",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),video:this.$t.__("Video Sitemap",this.$td),description:this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open Video Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Video Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Video Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}}}}}]);