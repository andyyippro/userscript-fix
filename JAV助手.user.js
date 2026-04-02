// ==UserScript==
// @name         JAV助手
// @namespace    https://github.com/andyyippro/userscript-fix
// @version      1.6.3
// @author       andyyippro
// @description  为 JavDB、JavBus、JavLibrary、JAV321 这四个站点添加跳转在线观看的链接
// @license      MIT
// @icon         https://javdb.com/favicon-32x32.png
// @include      /^https?:\/\/(\w*\.)?javdb(\d)*\.com\/.*$/
// @include      /^https?:\/\/(\w*\.)?(javbus|seejav|javsee)*\.(com|cc|me|life|bid).*$/
// @include      /^https?:\/\/(\w*\.)?javlibrary\.com.*$/
// @include      /^http.*\/cn\/\?v=jav.*$/
// @include      /^https?:\/\/(\w*\.)?jav321\.com\/video\/.*$/
// @include      /^https?:\/\/(\w*\.)?avmoo\.website\/.*$/
// @include      /^https?:\/\/(\w*\.)?avsox\.click\/.*$/
// @match        *://115.com/*
// @match        *://*.115.com/*
// @match        *://*.app.javdb457.com/*
// @match        *://*.javdb457.com/*
// @match        *://*.javdb.com/*
// @match        *://*.javlibrary.com/*
// @match        *://javlibrary.com/*
// @match        *://*.v90f.com/*
// @match        *://*.avmoo.website/*
// @match        *://avmoo.website/*
// @match        *://*.avsox.click/*
// @match        *://avsox.click/*
// @match        *://*.sehuatang.net/*
// @match        *://*.sehuatang.org/*
// @require      https://update.greasyfork.org/scripts/522123/1511104/tampermonkey%20parallel.js
// @require      https://cdn.jsdelivr.net/npm/preact@10.25.4/dist/preact.min.js
// @connect      dmm.co.jp
// @connect      jable.tv
// @connect      missav.ws
// @connect      123av.com
// @connect      supjav.com
// @connect      netflav5.com
// @connect      javhhh.com
// @connect      bestjavporn.com
// @connect      javmenu.com
// @connect      jav.guru
// @connect      javmost.cx
// @connect      hayav.com
// @connect      avjoy.me
// @connect      javfc2.net
// @connect      paipancon.com
// @connect      ggjav.com
// @connect      www.av01.tv
// @connect      highporn.net
// @connect      evojav.pro
// @connect      18av.mm-cg.com
// @connect      javgo.to
// @connect      javhub.net
// @connect      mgstage.com
// @connect      heyzo.com
// @connect      javbus.com
// @connect      avmoo.website
// @connect      avsox.click
// @connect      javdb.com
// @connect      javlibrary.com
// @connect      www.jav321.com
// @connect      115.com
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @downloadURL https://raw.githubusercontent.com/andyyippro/userscript-fix/main/JAV%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://raw.githubusercontent.com/andyyippro/userscript-fix/main/JAV%E5%8A%A9%E6%89%8B.user.js
// ==/UserScript==

(o=>{if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const e=document.createElement("style");e.textContent=o,document.head.append(e)})(' .jop-list{box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:flex-start;gap:10px;width:100%;height:100%;z-index:1;transition:right .2s ease-in-out;color:#000}.jop-button,.jop-button_def{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:3px 10px;border-radius:4px;font-weight:500;font-size:14px;border:1px solid #dcdfe6;color:#606266;cursor:pointer}.jop-button_def{margin:10px 0;width:100px}.jop-button:visited{color:#606266}.jop-button:hover{text-decoration:none;color:#409eff;border:1px solid #c6e2ff;background-color:#ecf5ff}.jop-button_label{position:absolute;font-size:10px;padding:4px;border-radius:4px;top:-13px;right:-10px;line-height:.75;color:#67c23a;border:1px solid #e1f3d8;background:#fff}.jop-button_green{color:#fff!important;background-color:#67c23a}.jop-button_green:hover{color:#fff!important;background-color:#95d475}.jop-button_red{color:#fff!important;background-color:#f56c6c}.jop-button_red:hover{color:#fff!important;background-color:#f89898}.jop-button_blue{color:#fff!important;background-color:#409eff}.jop-button_blue:hover{color:#fff!important;background-color:#66b1ff}.jop-button_orange{color:#fff!important;background-color:#e6a23c}.jop-button_orange:hover{color:#fff!important;background-color:#ebb563}.jop-loading{display:inline-block;width:14px;height:14px;margin-right:10px;border:2px dashed #dcdfe6;border-top-color:transparent;border-radius:100%;animation:btnLoading infinite 1s linear}@keyframes btnLoading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.jop-tag{padding:3px 6px;color:#409eff!important;background:#ecf5ff;border:1px solid #d9ecff;border-radius:4px}.jop-setting{margin-top:20px}.jop-setting-list{display:flex;flex-wrap:wrap}.jop-setting-title{margin:10px 0 5px;font-weight:700}.jop-setting-item{display:flex;height:20px;align-items:center;margin-right:15px;-webkit-user-select:none;user-select:none;cursor:pointer}.db-panel .movie-panel-info div.panel-block{padding:5.5px 12px}.db-panel .jop-app{padding:15px 12px}.lib-panel .jop-app{padding:20px 30px;margin-top:10px}.jav321-panel .jop-app{margin-top:15px;padding-top:15px;border-top:1px solid #eee}input[type=checkbox],input[type=radio]{margin:0 0 0 5px;cursor:pointer}.jop-tooltip-container{position:relative;display:inline-block}.jop-tooltip{position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:5px 10px;border-radius:4px;font-size:12px;white-space:nowrap;z-index:1000}.jop-setting-label{cursor:pointer}.jop-checkbox{display:inline-flex;align-items:center;cursor:pointer;margin-right:15px;-webkit-user-select:none;user-select:none}.jop-checkbox-input{position:absolute;opacity:0;cursor:pointer}.jop-checkbox-custom{position:relative;display:inline-block;width:16px;height:16px;background-color:#fff;border:1px solid #dcdfe6;border-radius:2px;transition:all .3s}.jop-checkbox-input:checked+.jop-checkbox-custom{background-color:#409eff;border-color:#409eff}.jop-checkbox-input:checked+.jop-checkbox-custom:after{content:"";position:absolute;top:1px;left:4px;width:5px;height:10px;border:solid white;border-width:0 2px 2px 0;transform:rotate(45deg)}.jop-checkbox-label{margin-left:3px;font-size:14px;color:#606266}.jop-checkbox:hover .jop-checkbox-custom{border-color:#409eff}.jop-waterfall-end{text-align:center;padding:20px;color:#888;font-size:1.2em;letter-spacing:2px}.jop-waterfall-btn{color:blue;font:bold 12px monospace;margin-right:8px;cursor:pointer;text-decoration:none}#waterfall_h{height:initial!important;width:initial!important;flex-direction:row;flex-wrap:wrap;margin:5px 15px!important}#waterfall_h .item{position:relative!important;top:initial!important;left:initial!important;float:left}#waterfall_h .movie-box img{position:absolute;top:-200px;bottom:-200px;left:-200px;right:-200px;margin:auto}#waterfall_h .movie-box .photo-frame{position:relative}#waterfall_h .avatar-box .photo-info p{margin:0 0 2px}#waterfall_h .avatar-box .photo-info{line-height:15px;padding:6px;height:220px}#waterfall_h .avatar-box .photo-frame{margin:10px;text-align:center}#waterfall_h .avatar-box.text-center{height:195px}.info p{line-height:18px!important}.screencap img{width:100%;max-width:1000px}.jop-preview-container{display:flex!important;flex-direction:row!important;gap:10px;margin-top:4px} ');

(function (preact) {
  'use strict';

  var f$1 = 0;
  function u$1(e2, t2, n, o2, i2, u2) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return preact.options.vnode && preact.options.vnode(l2), l2;
  }
  const libSites = [
    {
      name: "javdb",
      enable: true,
      identifier: "a[href*='javdb']",
      querys: {
        panelQueryStr: ".video-meta-panel>.columns.is-desktop .panel.movie-panel-info",
        codeQueryStr: `[data-clipboard-text]`
      },
      method() {
        const columnVideoCover = document.querySelector(".column-video-cover");
        if (columnVideoCover) {
          columnVideoCover.style.width = "60%";
        }
        const panel = document.querySelector(
          ".video-meta-panel>.columns.is-desktop>.column:not(.column-video-cover)"
        );
        panel == null ? void 0 : panel.classList.add("db-panel");
      }
    },
    {
      name: "javbus",
      enable: true,
      identifier: "a[href*='javbus']",
      querys: {
        panelQueryStr: ".movie>div.info",
        codeQueryStr: `span[style="color:#CC0000;"]`
      },
      method() {
      }
    },
    {
      name: "avmoo",
      enable: true,
      identifier: ".row.movie .col-md-3.info",
      querys: {
        panelQueryStr: ".col-md-3.info",
        codeQueryStr: `span[style="color:#CC0000;"]`
      },
      method() {
      }
    },
    {
      name: "javlib",
      enable: true,
      identifier: "#video_jacket_info #video_info, #video_id td.text, #video_title h3 a[href$='.html'], img[src*='logo-top']",
      querys: {
        panelQueryStr: "#video_jacket_info #video_info, #video_info",
        codeQueryStr: `#video_id td.text, #video_id .text`
      },
      method() {
        const panel = document.querySelector("#video_jacket_info #video_info, #video_info");
        panel == null ? void 0 : panel.classList.add("lib-panel");
      }
    },
    {
      name: "jav321",
      enable: true,
      identifier: "form[action='/search'] input[name='sn']",
      querys: {
        panelQueryStr: ".col-md-7.col-md-offset-1.col-xs-12 > .panel.panel-info > .panel-body",
        codeQueryStr: ".col-md-7.col-md-offset-1.col-xs-12 > .panel.panel-info > .panel-heading h3 small"
      },
      codeRegex: /[a-zA-Z]{3,5}-\d{3,5}/,
      method() {
        const panel = document.querySelector(".col-md-7.col-md-offset-1.col-xs-12 > .panel.panel-info");
        panel == null ? void 0 : panel.classList.add("jav321-panel");
      }
    }
  ];
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();

  // ===== 瀑布流/无限滚动 =====
  const JAVDB_ITEM_SEL = '.movie-list.v.cols-4.vcols-8 .item, .movie-list.v.cols-4.vcols-5 .item, .movie-list.h.cols-4.vcols-8 .item, .movie-list.h.cols-4.vcols-5 .item';

  class Waterfall {
    constructor({ next, item, cont, pagi }) {
      this.selector = { next, item, cont, pagi };
      this.loading = false;
      this.ended = false;
      this.count = 0;
      this._onScroll = this._checkScroll.bind(this);
      if (document.querySelector(this.selector.item)) {
        document.addEventListener('scroll', this._onScroll);
        document.addEventListener('wheel', this._onScroll);
      }
    }
    _checkScroll() {
      if (this.loading || this.ended) return;
      const anchor = document.querySelector(this.selector.pagi);
      if (!anchor) { this._end(); return; }
      if (anchor.getBoundingClientRect().top - window.innerHeight < 1200) {
        this._loadNext();
      }
    }
    async _loadNext() {
      this.loading = true;
      const nextLink = document.querySelector(this.selector.next);
      if (!nextLink || !nextLink.href) { this._end(); return; }
      const nextUrl = nextLink.href;
      try {
        const res = await fetch(nextUrl, { credentials: 'same-origin' });
        if (!res.ok) { this._end(); return; }
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const items = Array.from(doc.querySelectorAll(this.selector.item));
        const newNextEl = doc.querySelector(this.selector.next);
        const newNextUrl = newNextEl ? newNextEl.href : null;
        // JavDB 最后一页死循环修复
        if (this.count > 0 && newNextUrl === nextUrl) {
          this._end(); return;
        }
        const curNext = document.querySelector(this.selector.next);
        if (curNext) {
          if (newNextUrl) curNext.href = newNextUrl;
          else curNext.removeAttribute('href');
        }
        const cont = document.querySelector(this.selector.cont);
        if (cont && items.length) {
          items.forEach(item => {
            // 跳过重复的女优信息卡（AVMOO/AVSOX 女优页面）
            if (item.querySelector('.avatar-box')) return;
            item.querySelectorAll('a').forEach(a => { a.target = '_blank'; });
            cont.appendChild(item);
          });
        }
        this.count++;
        if (!newNextUrl) this._end();
      } catch (e) {
        console.error('||jop 瀑布流加载失败', e);
      }
      this.loading = false;
    }
    _end() {
      this.ended = true;
      document.removeEventListener('scroll', this._onScroll);
      document.removeEventListener('wheel', this._onScroll);
      const anchor = document.querySelector(this.selector.pagi);
      if (anchor) {
        const end = document.createElement('p');
        end.className = 'jop-waterfall-end';
        end.textContent = '— The End —';
        anchor.replaceWith(end);
      }
    }
  }

  function initWaterfall() {
    if (_GM_getValue('scroll_status', 1) <= 0) return;
    // JavBus
    const javbusItems = document.querySelectorAll('div#waterfall div.item');
    if (javbusItems.length) {
      const isJavBus = document.querySelector("footer") && document.querySelector("footer").textContent.includes('JavBus');
      if (isJavBus) {
        javbusItems[0].parentElement.parentElement.id = "waterfall_h";
        new Waterfall({ next: 'a#next', item: 'div#waterfall div.item', cont: '.masonry', pagi: '.pagination-lg' });
      }
    }
    // AVMOO/AVSOX
    const isAVMOO = /(avmoo|avsox)/i.test(location.hostname);
    if (isAVMOO && document.querySelectorAll('div#waterfall div.item').length) {
      document.querySelector('div#waterfall').parentElement.id = "waterfall_h";
      new Waterfall({ next: '.pagination li:last-child a', item: 'div#waterfall div.item', cont: '#waterfall', pagi: 'ul.pagination' });
    }
    // JavLibrary
    const javlibItems = document.querySelectorAll('div.videos div.video');
    if (javlibItems.length) {
      javlibItems[0].parentElement.id = "waterfall";
      new Waterfall({ next: 'a.page.next', item: 'div.videos div.video', cont: '#waterfall', pagi: '.page_selector' });
    }
    // JavDB
    const javdbItems = document.querySelectorAll(JAVDB_ITEM_SEL);
    if (javdbItems.length) {
      javdbItems[0].parentElement.id = "waterfall";
      new Waterfall({ next: '.pagination .pagination-next', item: JAVDB_ITEM_SEL, cont: '#waterfall', pagi: '.pagination' });
    }
  }

  function createWaterfallToggleBtn() {
    const enabled = _GM_getValue('scroll_status', 1) > 0;
    const btn = document.createElement('a');
    btn.className = 'jop-waterfall-btn';
    btn.href = '#';
    btn.textContent = enabled ? '关闭瀑布流' : '开启瀑布流';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      _GM_setValue('scroll_status', enabled ? 0 : 1);
      location.reload();
    });
    return btn;
  }

  function insertWaterfallButton() {
    const btn = createWaterfallToggleBtn();
    // JavBus
    const javbusNav = document.querySelector('.visible-md-block');
    if (javbusNav) {
      const dropdown = javbusNav.closest('.dropdown');
      if (dropdown) { const li = document.createElement('li'); li.append(btn); dropdown.after(li); return; }
    }
    // AVMOO/AVSOX: 插入左侧导航栏
    const avmooNav = document.querySelector('nav.navbar .nav.navbar-nav:not(.navbar-right)');
    if (avmooNav && /(avmoo|avsox)/i.test(location.hostname)) {
      const li = document.createElement('li');
      li.append(btn);
      avmooNav.append(li);
      return;
    }
    // JavLibrary
    const javlibRight = document.querySelector('.displaymode .right');
    if (javlibRight) { javlibRight.prepend(btn); return; }
    // JavDB: 放到顶部导航栏 navbar-start 末尾（ThePornDude 后面，登录后该链接消失也不影响）
    if (/javdb/i.test(location.hostname)) {
      const navbarStart = document.querySelector('.navbar-start');
      if (navbarStart) {
        btn.classList.add('navbar-item');
        btn.style.cssText = 'color:blue;font:bold 12px monospace;cursor:pointer;text-decoration:none;';
        navbarStart.append(btn);
        return;
      }
    }
  }

  function applyLayoutOptimizations() {
    // JavDB: 移除18+弹窗和广告
    if (/javdb/i.test(location.hostname)) {
      const banner = document.querySelector('.app-desktop-banner');
      if (banner) banner.remove();
      const modal = document.querySelector('.modal.is-active.over18-modal');
      if (modal) modal.remove();
    }
    // JavBus 无码页面宽度调整
    if (document.querySelector("footer") && document.querySelector("footer").textContent.includes('JavBus')) {
      const isUncensored = location.pathname.includes('/uncensored') || location.hostname.includes('javbus.org');
      if (isUncensored) {
        const style = document.createElement('style');
        style.textContent = '#waterfall_h .movie-box{width:354px}#waterfall_h .movie-box .photo-info{height:105px}';
        document.head.append(style);
      } else if (document.querySelectorAll('div#waterfall div.item').length) {
        const style = document.createElement('style');
        style.textContent = '#waterfall_h .movie-box{width:164px}#waterfall_h .movie-box .photo-info{height:145px}';
        document.head.append(style);
      }
    }
    // AVMOO/AVSOX 布局优化：固定 photo-info 高度，保持原始宽度
    if (/(avmoo|avsox)/i.test(location.hostname) && document.querySelectorAll('div#waterfall div.item').length) {
      const style = document.createElement('style');
      style.textContent = '#waterfall_h .movie-box .photo-info{height:145px;overflow:hidden}';
      document.head.append(style);
    }
    // JavDB 列表页: container 宽度和标签优化
    if (/javdb/i.test(location.hostname) && document.querySelectorAll(JAVDB_ITEM_SEL).length) {
      const style = document.createElement('style');
      style.textContent = '.container{max-width:inherit!important}.tags{display:block!important}';
      document.head.append(style);
    }
  }
  // ===== 瀑布流/无限滚动 END =====

  // ===== sehuatang 图片预览 =====
  async function initSehuatangPreview() {
    if (!/sehuatang/i.test(location.hostname)) return;

    const postLinks = document.querySelectorAll('.s.xst');
    if (!postLinks.length) return;

    for (let link of postLinks) {
      const tbody = link.closest('tbody');
      if (!tbody || (tbody.nextElementSibling && tbody.nextElementSibling.classList.contains('jop-imagePreview'))) continue;

      try {
        const res = await fetch(link.href, { credentials: 'same-origin' });
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');

        let imgs = Array.from(doc.querySelectorAll('img.zoom'))
          .filter(img => {
            const file = img.getAttribute('file');
            return file && !file.includes('static') && !file.includes('hrline');
          })
          .slice(0, 4);

        if (!imgs.length) continue;

        const newTbody = document.createElement('tbody');
        newTbody.className = 'jop-imagePreview';
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 5;
        const container = document.createElement('div');
        container.style.display = 'flex';

        imgs.forEach(imgEl => {
          const img = document.createElement('img');
          img.src = imgEl.getAttribute('file');
          img.loading = 'lazy';
          img.style.cssText = 'width:300px;height:auto;margin-right:10px';
          container.appendChild(img);
        });

        td.appendChild(container);
        tr.appendChild(td);
        newTbody.appendChild(tr);
        tbody.after(newTbody);
      } catch (e) {
        console.error('||jop sehuatang preview error', e);
      }
    }
  }
  // ===== sehuatang 图片预览 END =====

  // ===== sehuatang 强制宽版 + 样式优化（仅列表/帖子页） =====
  if (/sehuatang/i.test(location.hostname) && /mod=(forumdisplay|viewthread)/.test(location.href)) {
    GM_addStyle(`
      .wp { width: 98% !important; }
      #ct { margin: 0 !important; width: 100% !important; }
      .s.xst { font-size: 20px; font-weight: 700; font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei New', 'STHeiti Light', sans-serif; }
      a { font-size: 14px; }
      a:hover { text-decoration: underline; }
      td.by, td.by *, td.num, td.num * { font-size: 14px !important; }
    `);
  }
  // ===== sehuatang 强制宽版 + 样式优化 END =====

  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _GM_notification = /* @__PURE__ */ (() => typeof GM_notification != "undefined" ? GM_notification : void 0)();
  // ===== 115离线下载 =====
  function init115UserID() {
    if (location.host.indexOf('115.com') < 0) return;
    const savedID = _GM_getValue('jav_user_id', 0);
    if (savedID !== 0) {
      console.log('||jop 115 user ID already saved:', savedID);
      return;
    }
    const match = document.cookie.match(/(?:^|;\s*)OOFL=(\d+)/);
    if (match) {
      _GM_setValue('jav_user_id', match[1]);
      console.log('||jop 115 user ID captured:', match[1]);
      alert('115登录初始化成功！');
    } else {
      console.log('||jop 115 未检测到登录状态');
    }
  }
  function handle115OfflineDownload(magnetUrl) {
    const truncatedUrl = magnetUrl.substr(0, 60);
    _GM_xmlhttpRequest({
      method: 'GET',
      url: 'https://115.com/?ct=offline&ac=space&_=' + Date.now(),
      anonymous: false,
      responseType: 'text',
      onload: (resp) => {
        const text = resp.responseText || resp.response || '';
        if (!text || text.indexOf('html') >= 0) {
          _GM_notification({
            text: '请先登录115账户后,再离线下载！',
            title: '115还没有登录',
            timeout: 3000,
            onclick: () => { window.open('https://115.com/?mode=login'); }
          });
          return;
        }
        const tokenData = JSON.parse(text);
        const userID = _GM_getValue('jav_user_id', 0);
        _GM_xmlhttpRequest({
          method: 'POST',
          url: 'https://115.com/web/lixian/?ct=lixian&ac=add_task_url',
          anonymous: false,
          responseType: 'text',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: "url=" + encodeURIComponent(truncatedUrl) + "&uid=" + userID + "&sign=" + tokenData.sign + "&time=" + tokenData.time,
          onload: (resp2) => {
            const result = JSON.parse(resp2.responseText || resp2.response || '{}');
            if (result.state) {
              _GM_notification({
                text: '离线任务添加成功, 3秒后刷新本页面',
                title: '115离线下载',
                timeout: 3000,
                onclick: () => { window.open('https://115.com/?tab=offline&mode=wangpan'); }
              });
              setTimeout(() => { location.reload(); }, 3000);
            } else {
              let errMsg = result.error_msg;
              if (result.errcode == '911') {
                errMsg = '你的帐号使用异常，需要在线手工重新验证即可正常使用。';
              }
              _GM_notification({
                text: '请重新打开115, ' + errMsg,
                title: '115离线失败',
                timeout: 3000,
                onclick: () => { window.open('https://115.com/?tab=offline&mode=wangpan'); }
              });
            }
          },
          onerror: () => { _GM_notification({ text: '网络请求失败', title: '115离线失败', timeout: 3000 }); }
        });
      },
      onerror: () => { _GM_notification({ text: '网络请求失败', title: '115离线失败', timeout: 3000 }); }
    });
  }
  function inject115Buttons() {
    const magnetItems = document.querySelectorAll('div.magnet-links .item');
    magnetItems.forEach((item) => {
      const linkEl = item.querySelector('a');
      if (!linkEl) return;
      const magnetUrl = linkEl.href;
      const buttonsContainer = item.querySelector('.buttons.column');
      if (!buttonsContainer) return;
      const btn = document.createElement('button');
      btn.className = 'button is-info is-small';
      btn.type = 'button';
      btn.style.cssText = 'align-self:center;margin-bottom:0;';
      btn.innerHTML = '&nbsp;115离线&nbsp;';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        handle115OfflineDownload(magnetUrl);
      });
      buttonsContainer.appendChild(btn);
    });
  }
  // ===== 115离线下载 END =====
  const FANZA_NO_PREFIX_CODES = /* @__PURE__ */ new Set([
    // 在这里填写不需要加 1 的 FANZA 完整番号，使用小写 + 5 位数字格式，例如 "abc00001"
  ]);
  const FANZA_NO_PREFIX_PREFIXES = /* @__PURE__ */ new Set([
    // 在这里填写整组都不需要加 1 的 FANZA 前缀，使用小写格式，例如 "ebod"
    "ebod",
    "voss",
    "dvmm",
    "midv",
    "mdvr",
    "ngod",
    "huntc",
    "madv",
    "ebwh",
    "juq",
    "jur",
    "crpd",
    "nade",
    "flav",
    "blk",
    "kws",
    "avop",
    "snos",
    "pred",
    "ndra",
    "cawd",
    "sone",
    "ssni",
    "ure",
    "kcda",
    "mkmp",
    "urvrsp"
  ]);
  const FANZA_SPECIAL_PREFIXES = /* @__PURE__ */ new Map([
    // 在这里填写需要改写前缀的 FANZA 番号，格式为 [原前缀, 目标前缀]，例如 ["sspo", "h_261"]
    ["sspo", "h_261"],
    ["gvg", "13"],
    ["renod", "24"],
    ["tbtb", "h_840"],
    ["suke", "h_1711"],
    ["saba", "h_244"],
    ["gl", "h_113"],
    ["hodv", "5642"]
  ]);
  const formatFanzaCode = (preCode) => {
    const [pre, num] = preCode.split("-");
    if (!pre || !num) return preCode.toLowerCase();
    const lowerPre = pre.toLowerCase();
    const baseCode = `${lowerPre}${num.padStart(5, "0")}`;
    const specialPrefix = FANZA_SPECIAL_PREFIXES.get(lowerPre);
    if (specialPrefix) return `${specialPrefix}${baseCode}`;
    if (lowerPre === "digi") return parseInt(num, 10) <= 183 ? `434${baseCode}` : baseCode;
    if (lowerPre === "fcdc") return parseInt(num, 10) <= 68 ? `h_114${baseCode}` : baseCode;
    return FANZA_NO_PREFIX_CODES.has(baseCode) || FANZA_NO_PREFIX_PREFIXES.has(lowerPre) ? baseCode : `1${baseCode}`;
  };
  const PRESTIGE_PREFIXES = new Set(["abp", "abw", "abf", "abs", "ezd", "thu", "pasn"]);
  const MGS_CID_PREFIXES = ["348ntr"];
  const isPrestigeCode = (code) => {
    const pre = code.split("-")[0];
    return pre ? PRESTIGE_PREFIXES.has(pre.toLowerCase()) : false;
  };
  const checkMgsCidPrefix = (cid) => {
    if (!cid) return null;
    const lower = cid.toLowerCase();
    const matched = MGS_CID_PREFIXES.find((p) => lower.startsWith(p));
    if (!matched) return null;
    const numPrefix = matched.match(/^(\d+)/);
    return numPrefix ? numPrefix[1] : null;
  };
  const isHeyzoCode = (code) => /^HEYZO-\d+$/i.test(code);
  const formatHeyzoCode = (preCode) => {
    const match = preCode.match(/^HEYZO-(\d+)$/i);
    return match ? match[1].padStart(4, "0") : preCode;
  };
  const siteList = [
    {
      name: "DMM",
      hostname: "dmm.co.jp",
      url: "https://www.dmm.co.jp/digital/videoa/-/detail/=/cid={{code}}/",
      fetchType: "false",
      codeFormater: formatFanzaCode,
      codeMatcher: (code) => !isHeyzoCode(code) && !isPrestigeCode(code)
    },
    {
      name: "HEYZO",
      hostname: "heyzo.com",
      url: "https://www.heyzo.com/moviepages/{{code}}/index.html",
      fetchType: "get",
      codeFormater: formatHeyzoCode,
      codeMatcher: isHeyzoCode,
      domQuery: {}
    },
    {
      name: "MGS",
      hostname: "mgstage.com",
      url: "https://www.mgstage.com/product/product_detail/{{code}}/",
      fetchType: "false",
      codeMatcher: isPrestigeCode
    },
    {
      name: "Jable",
      hostname: "jable.tv",
      url: "https://jable.tv/videos/{{code}}/",
      fetchType: "get",
      domQuery: {
        subQuery: ".info-header",
        leakQuery: ".info-header"
      }
    },
    {
      name: "MISSAV",
      hostname: "missav.ws",
      url: "https://missav.ws/{{code}}/",
      fetchType: "get",
      domQuery: {
        // 标签区的第一个一般是字幕标签
        subQuery: '.space-y-2 a.text-nord13[href="https://missav.ws/chinese-subtitle"]',
        // 有个「切換無碼」按钮，藏在分享按钮旁边……
        leakQuery: ".order-first div.rounded-md a[href]:last-child"
      }
    },
    {
      name: "123av",
      hostname: "123av.com",
      url: "https://123av.com/zh/search?keyword={{code}}",
      fetchType: "parser",
      strictParser: true,
      domQuery: {
        linkQuery: `.detail>a[href*='v/']`,
        titleQuery: `.detail>a[href*='v/']`
      }
    },
    {
      // 有可能搜出仨：leakage subtitle 4k
      name: "Supjav",
      hostname: "supjav.com",
      url: "https://supjav.com/zh/?s={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: `.posts.clearfix>.post>a.img[title]`,
        titleQuery: `h3>a[rel="bookmark"][itemprop="url"]`
      }
    },
    {
      name: "NETFLAV",
      hostname: "netflav5.com",
      url: "https://netflav5.com/search?type=title&keyword={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: ".grid_0_cell>a[href^='/video?']",
        titleQuery: ".grid_0_cell>a[href^='/video?'] .grid_0_title"
      }
    },
    {
      name: "JAVHHH",
      hostname: "javhhh.com",
      url: "https://javhhh.com/v/?wd={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: ".typelist>.i-container>a[href]",
        titleQuery: ".typelist>.i-container>a[href]"
      }
    },
    {
      name: "BestJP",
      hostname: "bestjavporn.com",
      url: "https://www3.bestjavporn.com/search/{{code}}",
      fetchType: "parser",
      domQuery: { linkQuery: "article.thumb-block>a", titleQuery: "article.thumb-block>a" }
    },
    {
      name: "JAVMENU",
      hostname: "javmenu.com",
      url: "https://javmenu.com/{{code}}",
      fetchType: "get",
      domQuery: {
        videoQuery: "a.nav-link[aria-controls='pills-0']"
      }
      // codeFormater: (preCode) => preCode.replace("-", ""),
    },
    {
      name: "Jav.Guru",
      hostname: "jav.guru",
      url: "https://jav.guru/?s={{code}}",
      fetchType: "parser",
      domQuery: { linkQuery: ".imgg>a[href]", titleQuery: ".inside-article>.grid1 a[title]" }
    },
    {
      name: "JAVMOST",
      hostname: "javmost.cx",
      url: "https://javmost.cx/search/{{code}}/",
      fetchType: "parser",
      domQuery: {
        linkQuery: ".card #myButton",
        titleQuery: ".card-block h4.card-title"
      }
    },
    {
      name: "HAYAV",
      hostname: "hayav.com",
      url: "https://hayav.com/video/{{code}}/",
      fetchType: "get",
      domQuery: {
        // subQuery: `.site__col>.entry-header>h1.entry-title`,
      }
    },
    {
      name: "AvJoy",
      hostname: "avjoy.me",
      url: "https://avjoy.me/search/videos/{{code}}",
      fetchType: "parser",
      domQuery: {
        titleQuery: `#wrapper .row .content-info span.content-title`,
        linkQuery: `#wrapper .row a[href^="/video/"]`
      }
    },
    {
      name: "JAVFC2",
      hostname: "javfc2.net",
      url: "https://javfc2.net/?s={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: "article.loop-video>a[href]",
        titleQuery: "article.loop-video .entry-header"
      }
    },
    {
      name: "baihuse",
      hostname: "paipancon.com",
      url: "https://paipancon.com/search/{{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: "div.col>div.card>a[href]",
        // 然而这个不是 title，是图片，这个站居然 title 里不包含 code，反而图片包含
        titleQuery: "div.card img.card-img-top"
      }
    },
    {
      name: "GGJAV",
      hostname: "ggjav.com",
      url: "https://ggjav.com/main/search?string={{code}}",
      fetchType: "parser",
      domQuery: {
        listIndex: 1,
        // spaceCode: true,
        titleQuery: "div.columns.large-3.medium-6.small-12.item.float-left>div.item_title>a.gray_a",
        linkQuery: "div.columns.large-3.medium-6.small-12.item.float-left>div.item_title>a.gray_a"
      }
    },
    {
      name: "AV01",
      hostname: "www.av01.tv",
      url: "https://www.av01.tv/search/videos?search_query={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: "div.well>a[href^='/video/']",
        titleQuery: "div.well>a[href^='/video/']"
      }
    },
    {
      name: "highporn",
      hostname: "highporn.net",
      url: "https://highporn.net/search/videos?search_query={{code}}",
      fetchType: "parser",
      domQuery: { linkQuery: ".well>a[href]", titleQuery: ".well>a[href]>span.video-title" }
    },
    {
      // 套了个 cf_clearance 的 cookie，不好搞
      name: "evojav",
      hostname: "evojav.pro",
      url: "https://evojav.pro/video/{{code}}/",
      fetchType: "get",
      domQuery: {}
    },
    {
      name: "18av",
      hostname: "18av.mm-cg.com",
      url: "https://18av.mm-cg.com/zh/fc_search/all/{{code}}/1.html",
      fetchType: "parser",
      domQuery: { linkQuery: ".posts h3>a[href]", titleQuery: ".posts h3>a[href]" }
    },
    {
      name: "javgo",
      hostname: "javgo.to",
      url: "https://javgo.to/zh/v/{{code}}",
      fetchType: "get",
      domQuery: {}
    },
    {
      name: "javhub",
      hostname: "javhub.net",
      url: "https://javhub.net/search/{{code}}",
      fetchType: "parser",
      domQuery: { linkQuery: "a.card-text[href*='play']", titleQuery: "a.card-text[href*='play']" }
    },
    {
      name: "JavBus",
      hostname: "javbus.com",
      url: "https://javbus.com/{{code}}",
      fetchType: "get",
      domQuery: {},
      codeFormater: (preCode) => preCode.startsWith("MIUM") ? `${SP_PREFIX}${preCode}` : preCode
    },
    {
      name: "JavDB",
      hostname: "javdb.com",
      url: "https://javdb.com/search?q={{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: ".movie-list>.item:first-child>a",
        titleQuery: ".video-title"
      }
    },
    {
      name: "JAV321",
      hostname: "www.jav321.com",
      url: "https://www.jav321.com/search",
      fetchType: "post",
      domQuery: {
        linkQuery: ".navbar-right .dropdown-menu a[href*='/video/']",
        titleQuery: ".col-md-7.col-md-offset-1.col-xs-12 > .panel.panel-info > .panel-heading h3"
      }
    },
    {
      name: "JAVLib",
      hostname: "javlibrary.com",
      url: "https://www.javlibrary.com/cn/vl_searchbyid.php?keyword={{code}}",
      fetchType: "false"
    },
    {
      name: "AVMOO",
      hostname: "avmoo.website",
      url: "https://avmoo.website/cn/search/{{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: "#waterfall .item:first-child a.movie-box",
        titleQuery: "#waterfall .item:first-child a.movie-box .photo-info span"
      }
    },
    {
      name: "AVSOX",
      hostname: "avsox.click",
      url: "https://avsox.click/cn/search/{{code}}",
      fetchType: "parser",
      domQuery: {
        linkQuery: "#waterfall .item a.movie-box",
        titleQuery: "#waterfall .item a.movie-box .photo-info span"
      }
    },
    {
      name: "Nyaa",
      hostname: "sukebei.nyaa.si",
      url: "https://sukebei.nyaa.si/?f=0&c=0_0&q={{code}}",
      fetchType: "false"
    },
    {
      name: "Kitty",
      hostname: "torrentkitty.one",
      url: "https://www.torrentkitty.one/search/{{code}}",
      fetchType: "false"
    },
    {
      name: "BTSOW",
      hostname: "btsow.top",
      url: "https://so2.btsow.top/search?key={{code}}&ap=1",
      fetchType: "false"
    },
    {
      name: "BTDigg",
      hostname: "btdig.com",
      url: "https://www.btdig.com/search?q={{code}}",
      fetchType: "false"
    }
  ];
  const SP_PREFIX = "300";
  const gmGet = ({ url, method = "GET", data, headers }) => {
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        method,
        url,
        data,
        headers,
        anonymous: false,
        onload: (response) => resolve(response),
        onerror: (error) => reject(error)
      });
    });
  };
  const buildFormBody = (data) => {
    return Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
  };
  const isCaseInsensitiveEqual = (str1, str2) => {
    if (!str1 || !str2) return false;
    return str1.toLowerCase() === str2.toLowerCase();
  };
  const isErrorCode = (resCode) => {
    return [404, 403].includes(resCode);
  };
  const getCode = (libItem) => {
    const { codeQueryStr } = libItem.querys;
    const codeNode = document.querySelector(codeQueryStr);
    if (!codeNode) return "";
    const rawCodeText = libItem.name === "javdb" ? codeNode.dataset.clipboardText : codeNode.innerText.replace("复制", "");
    const codeText = libItem.codeRegex ? (rawCodeText.match(libItem.codeRegex) || [rawCodeText])[0] : rawCodeText;
    if (codeText.includes("FC2")) return codeText.split("-")[1];
    if (codeText.startsWith(SP_PREFIX)) return codeText.substring(3);
    return codeText;
  };
  const regEnum = {
    subtitle: /(中文|字幕|subtitle)/,
    leakage: /(无码|無碼|泄漏|泄露|Uncensored)/
  };
  const tagsQuery = ({
    leakageText,
    subtitleText
  }) => {
    const hasLeakage = regEnum.leakage.test(leakageText);
    const hasSubtitle = regEnum.subtitle.test(subtitleText);
    const tags = [];
    if (hasLeakage) tags.push("无码");
    if (hasSubtitle) tags.push("字幕");
    return tags.join(" ");
  };
  var t, r, u, i, o = 0, f = [], c = preact.options, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
  function d(n, t2) {
    c.__h && c.__h(r, n, o || t2), o = 0;
    var u2 = r.__H || (r.__H = { __: [], __h: [] });
    return n >= u2.__.length && u2.__.push({}), u2.__[n];
  }
  function h(n) {
    return o = 1, p(D, n);
  }
  function p(n, u2, i2) {
    var o2 = d(t++, 2);
    if (o2.t = n, !o2.__c && (o2.__ = [D(void 0, u2), function(n2) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r, !r.u)) {
      var f2 = function(n2, t2, r2) {
        if (!o2.__c.__H) return true;
        var u3 = o2.__c.__H.__.filter(function(n3) {
          return !!n3.__c;
        });
        if (u3.every(function(n3) {
          return !n3.__N;
        })) return !c2 || c2.call(this, n2, t2, r2);
        var i3 = o2.__c.props !== n2;
        return u3.forEach(function(n3) {
          if (n3.__N) {
            var t3 = n3.__[0];
            n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
          }
        }), c2 && c2.call(this, n2, t2, r2) || i3;
      };
      r.u = true;
      var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
      r.componentWillUpdate = function(n2, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n2, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n2, t2, r2);
      }, r.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function y(n, u2) {
    var i2 = d(t++, 3);
    !c.__s && C(i2.__H, u2) && (i2.__ = n, i2.i = u2, r.__H.__h.push(i2));
  }
  function j$1() {
    for (var n; n = f.shift(); ) if (n.__P && n.__H) try {
      n.__H.__h.forEach(z), n.__H.__h.forEach(B$1), n.__H.__h = [];
    } catch (t2) {
      n.__H.__h = [], c.__e(t2, n.__v);
    }
  }
  c.__b = function(n) {
    r = null, e && e(n);
  }, c.__ = function(n, t2) {
    n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s && s(n, t2);
  }, c.__r = function(n) {
    a && a(n), t = 0;
    var i2 = (r = n.__c).__H;
    i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
      n2.__N && (n2.__ = n2.__N), n2.i = n2.__N = void 0;
    })) : (i2.__h.forEach(z), i2.__h.forEach(B$1), i2.__h = [], t = 0)), u = r;
  }, c.diffed = function(n) {
    v && v(n);
    var t2 = n.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j$1)), t2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.i = void 0;
    })), u = r = null;
  }, c.__c = function(n, t2) {
    t2.some(function(n2) {
      try {
        n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
          return !n3.__ || B$1(n3);
        });
      } catch (r2) {
        t2.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), t2 = [], c.__e(r2, n2.__v);
      }
    }), l && l(n, t2);
  }, c.unmount = function(n) {
    m && m(n);
    var t2, r2 = n.__c;
    r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
      try {
        z(n2);
      } catch (n3) {
        t2 = n3;
      }
    }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
  };
  var k = "function" == typeof requestAnimationFrame;
  function w(n) {
    var t2, r2 = function() {
      clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n);
    }, u2 = setTimeout(r2, 100);
    k && (t2 = requestAnimationFrame(r2));
  }
  function z(n) {
    var t2 = r, u2 = n.__c;
    "function" == typeof u2 && (n.__c = void 0, u2()), r = t2;
  }
  function B$1(n) {
    var t2 = r;
    n.__c = n.__(), r = t2;
  }
  function C(n, t2) {
    return !n || n.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n[r2];
    });
  }
  function D(n, t2) {
    return "function" == typeof t2 ? t2(n) : t2;
  }
  function g(n, t2) {
    for (var e2 in t2) n[e2] = t2[e2];
    return n;
  }
  function E(n, t2) {
    for (var e2 in n) if ("__source" !== e2 && !(e2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && n[r2] !== t2[r2]) return true;
    return false;
  }
  function N(n, t2) {
    this.props = n, this.context = t2;
  }
  function M(n, e2) {
    function r2(n2) {
      var t2 = this.props.ref, r3 = t2 == n2.ref;
      return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), E(this.props, n2);
    }
    function u2(e3) {
      return this.shouldComponentUpdate = r2, preact.createElement(n, e3);
    }
    return u2.displayName = "Memo(" + (n.displayName || n.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
  }
  (N.prototype = new preact.Component()).isPureReactComponent = true, N.prototype.shouldComponentUpdate = function(n, t2) {
    return E(this.props, n) || E(this.state, t2);
  };
  var T = preact.options.__b;
  preact.options.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
  };
  var F = preact.options.__e;
  preact.options.__e = function(n, t2, e2, r2) {
    if (n.then) {
      for (var u2, o2 = t2; o2 = o2.__; ) if ((u2 = o2.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n, t2);
    }
    F(n, t2, e2, r2);
  };
  var U = preact.options.unmount;
  function V(n, t2, e2) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n2) {
      "function" == typeof n2.__c && n2.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e2 && (n.__c.__P = t2), n.__c = null), n.__k = n.__k && n.__k.map(function(n2) {
      return V(n2, t2, e2);
    })), n;
  }
  function W(n, t2, e2) {
    return n && e2 && (n.__v = null, n.__k = n.__k && n.__k.map(function(n2) {
      return W(n2, t2, e2);
    }), n.__c && n.__c.__P === t2 && (n.__e && e2.appendChild(n.__e), n.__c.__e = true, n.__c.__P = e2)), n;
  }
  function P() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j(n) {
    var t2 = n.__.__c;
    return t2 && t2.__a && t2.__a(n);
  }
  function B() {
    this.i = null, this.l = null;
  }
  preact.options.unmount = function(n) {
    var t2 = n.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & n.__u && (n.type = null), U && U(n);
  }, (P.prototype = new preact.Component()).__c = function(n, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(e2);
    var u2 = j(r2.__v), o2 = false, i2 = function() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(c2) : c2());
    };
    e2.__R = i2;
    var c2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n2 = r2.state.__a;
          r2.__v.__k[0] = W(n2, n2.__c.__P, n2.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n.then(i2, i2);
  }, P.prototype.componentWillUnmount = function() {
    this.o = [];
  }, P.prototype.render = function(n, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = V(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && preact.createElement(preact.Fragment, null, n.fallback);
    return i2 && (i2.__u &= -33), [preact.createElement(preact.Fragment, null, e2.__a ? null : n.children), i2];
  };
  var H = function(n, t2, e2) {
    if (++e2[1] === e2[0] && n.l.delete(t2), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e2 = n.i; e2; ) {
      for (; e2.length > 3; ) e2.pop()();
      if (e2[1] < e2[0]) break;
      n.i = e2 = e2[2];
    }
  };
  (B.prototype = new preact.Component()).__a = function(n) {
    var t2 = this, e2 = j(t2.__v), r2 = t2.l.get(n);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), H(t2, n, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, B.prototype.render = function(n) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = preact.toChildArray(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
    return n.children;
  }, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
    var n = this;
    this.l.forEach(function(t2, e2) {
      H(n, e2, t2);
    });
  };
  var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
  preact.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(preact.Component.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n });
    } });
  });
  var en = preact.options.event;
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  preact.options.event = function(n) {
    return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
  };
  var ln = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } }, fn = preact.options.vnode;
  preact.options.vnode = function(n) {
    "string" == typeof n.type && function(n2) {
      var t2 = n2.props, e2 = n2.type, u2 = {}, o2 = -1 === e2.indexOf("-");
      for (var i2 in t2) {
        var c2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == c2 || Q && "children" === i2 && "noscript" === e2 || "class" === i2 || "className" === i2)) {
          var l2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === c2 ? c2 = "" : "translate" === l2 && "no" === c2 ? c2 = false : "o" === l2[0] && "n" === l2[1] ? "ondoubleclick" === l2 ? i2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || X(t2.type) ? "onfocus" === l2 ? i2 = "onfocusin" : "onblur" === l2 ? i2 = "onfocusout" : J.test(i2) && (i2 = l2) : l2 = i2 = "oninput" : o2 && G.test(i2) ? i2 = i2.replace(K, "-$&").toLowerCase() : null === c2 && (c2 = void 0), "oninput" === l2 && u2[i2 = l2] && (i2 = "oninputCapture"), u2[i2] = c2;
        }
      }
      "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = preact.toChildArray(t2.children).forEach(function(n3) {
        n3.props.selected = -1 != u2.value.indexOf(n3.props.value);
      })), "select" == e2 && null != u2.defaultValue && (u2.value = preact.toChildArray(t2.children).forEach(function(n3) {
        n3.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n3.props.value) : u2.defaultValue == n3.props.value;
      })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", ln)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n2.props = u2;
    }(n), n.$$typeof = q, fn && fn(n);
  };
  var an = preact.options.__r;
  preact.options.__r = function(n) {
    an && an(n), n.__c;
  };
  var sn = preact.options.diffed;
  preact.options.diffed = function(n) {
    sn && sn(n);
    var t2 = n.props, e2 = n.__e;
    null != e2 && "textarea" === n.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value);
  };
  const Tooltip = ({ content, children }) => {
    const [isVisible, setIsVisible] = h(false);
    return /* @__PURE__ */ u$1(
      "div",
      {
        className: "jop-tooltip-container",
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        children: [
          children,
          isVisible && content && /* @__PURE__ */ u$1("div", { className: "jop-tooltip", children: content })
        ]
      }
    );
  };
  const Checkbox = ({ label, value, tip, onChange }) => {
    const handleChange = (event) => {
      onChange(event.currentTarget.checked);
    };
    return /* @__PURE__ */ u$1("label", { className: "jop-checkbox", children: [
      /* @__PURE__ */ u$1(
        "input",
        {
          type: "checkbox",
          className: "jop-checkbox-input",
          checked: value,
          onChange: handleChange
        }
      ),
      /* @__PURE__ */ u$1("span", { className: "jop-checkbox-custom" }),
      /* @__PURE__ */ u$1(Tooltip, { content: tip || "", children: /* @__PURE__ */ u$1("span", { className: "jop-checkbox-label", children: label }) })
    ] });
  };
  const Setting = ({
    siteList: siteList2,
    setDisables,
    disables,
    multipleNavi,
    setMultipleNavi,
    hiddenError,
    setHiddenError
  }) => {
    const [showSetting, setShowSetting] = h(false);
    const hanleListChange = (item, isHidden) => {
      if (isHidden) {
        setDisables(disables.filter((disItem) => disItem !== item.name));
      } else {
        setDisables([...disables, item.name]);
      }
    };
    const handleNaviChange = (checked) => {
      setMultipleNavi(checked);
      _GM_setValue("multipleNavi", checked);
    };
    const handlehiddenErrorChange = (checked) => {
      setHiddenError(checked);
      _GM_setValue("hiddenError", checked);
    };
    return /* @__PURE__ */ u$1(preact.Fragment, { children: [
      !showSetting && /* @__PURE__ */ u$1("div", { className: "jop-button_def", onClick: () => setShowSetting(!showSetting), children: "设置" }),
      showSetting && /* @__PURE__ */ u$1(preact.Fragment, { children: [
        /* @__PURE__ */ u$1("div", { className: "jop-setting", children: [
          /* @__PURE__ */ u$1(Group, { title: "勾选默认启动", children: siteList2.map((item) => {
            const isHidden = disables.includes(item.name);
            return /* @__PURE__ */ u$1(
              Checkbox,
              {
                label: item.name,
                value: !isHidden,
                onChange: (checked) => hanleListChange(item, checked)
              }
            );
          }) }),
          /* @__PURE__ */ u$1(Group, { title: "其他设置", children: [
            /* @__PURE__ */ u$1(
              Checkbox,
              {
                label: "展示多个搜索结果",
                value: multipleNavi,
                tip: "一个站点内出现多条匹配结果时，打开后跳转搜索结果页",
                onChange: handleNaviChange
              }
            ),
            /* @__PURE__ */ u$1(
              Checkbox,
              {
                label: "隐藏失败结果",
                value: hiddenError,
                onChange: handlehiddenErrorChange
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u$1(
          "div",
          {
            className: "jop-button_def",
            onClick: () => {
              setShowSetting(!showSetting);
            },
            children: "收起设置"
          }
        )
      ] })
    ] });
  };
  const Group = ({ title, children }) => {
    return /* @__PURE__ */ u$1(preact.Fragment, { children: [
      /* @__PURE__ */ u$1("h4", { className: "jop-setting-title", children: title }),
      /* @__PURE__ */ u$1("div", { className: "jop-setting-list", children })
    ] });
  };
  function videoPageParser(responseText, { subQuery, leakQuery, videoQuery }) {
    const doc = new DOMParser().parseFromString(responseText, "text/html");
    const subNode = subQuery ? doc.querySelector(subQuery) : "";
    const subNodeText = subNode ? subNode.innerHTML : "";
    const leakNode = leakQuery ? doc.querySelector(leakQuery) : null;
    const leakNodeText = leakNode ? leakNode.innerHTML : "";
    const videoNode = videoQuery ? doc.querySelector(videoQuery) : true;
    return {
      isSuccess: !!videoNode,
      tag: tagsQuery({ leakageText: leakNodeText, subtitleText: subNodeText })
    };
  }
  function searchPageCodeCheck(titleNodes, siteItem, CODE) {
    if (!titleNodes || titleNodes.length === 0) return { isSuccess: false, titleNodeText: "" };
    const codeRegex = /[a-zA-Z]{3,5}-\d{3,5}/;
    if (siteItem.strictParser) {
      const nodes = Array.from(titleNodes);
      const passNodes = nodes.filter((node) => {
        const nodeCode = node.outerHTML.match(codeRegex);
        return isCaseInsensitiveEqual(nodeCode == null ? void 0 : nodeCode[0], CODE);
      });
      const titleNodeText = passNodes.map((node) => node.outerHTML).join(" ");
      return {
        titleNodeText,
        isSuccess: passNodes.length > 0,
        multipleRes: passNodes.length > 1
      };
    } else {
      const titleNode = titleNodes[siteItem.domQuery.listIndex ?? 0];
      const titleNodeText = titleNode ? titleNode == null ? void 0 : titleNode.outerHTML : "";
      const matchCode = titleNodeText.match(codeRegex);
      const isSuccess = isCaseInsensitiveEqual(matchCode == null ? void 0 : matchCode[0], CODE);
      return { titleNodeText, isSuccess, multipleRes: titleNodes.length > 1 };
    }
  }
  function serachPageParser(responseText, siteItem, CODE) {
    const { linkQuery, titleQuery } = siteItem.domQuery;
    const doc = new DOMParser().parseFromString(responseText, "text/html");
    const titleNodes = titleQuery ? doc.querySelectorAll(titleQuery) : [];
    const { isSuccess, titleNodeText, multipleRes } = searchPageCodeCheck(titleNodes, siteItem, CODE);
    const linkNodes = linkQuery ? doc.querySelectorAll(linkQuery) : [];
    const linkNode = linkNodes[siteItem.domQuery.listIndex ?? 0];
    if (!isSuccess) {
      return { isSuccess: false };
    }
    const resultLinkText = linkNode.href.replace(linkNode.hostname, siteItem.hostname);
    return {
      isSuccess: true,
      resultLink: resultLinkText,
      multipleRes,
      tag: tagsQuery({ leakageText: titleNodeText, subtitleText: titleNodeText })
    };
  }
  function jav321Parser(responseText, siteItem, CODE) {
    const res = serachPageParser(responseText, siteItem, CODE);
    if (!res.isSuccess) {
      return res;
    }
    const doc = new DOMParser().parseFromString(responseText, "text/html");
    const detailLinkNode = doc.querySelector(siteItem.domQuery.linkQuery);
    if (!detailLinkNode) {
      return { isSuccess: false };
    }
    const resultLink = detailLinkNode.href.replace(detailLinkNode.hostname, siteItem.hostname);
    return {
      ...res,
      resultLink
    };
  }
  const baseFetcher = async ({ siteItem, targetLink, CODE }) => {
    if (siteItem.fetchType === "false") {
      return Promise.resolve({
        isSuccess: true,
        resultLink: targetLink
      });
    }
    try {
      const requestConfig = siteItem.fetchType === "post" ? {
        method: "POST",
        data: buildFormBody({ sn: CODE }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      } : {};
      const response = await gmGet({ url: targetLink, ...requestConfig });
      // Cloudflare 验证检测（必须在 isErrorCode 之前，因为 CF 也返回 403）
      if (/cf[-_]chl|cf-browser-verification|<title>Just a moment/.test(response.responseText)) {
        return { isSuccess: false, isCloudflare: true, resultLink: targetLink };
      }
      if (isErrorCode(response.status)) {
        throw Error(String(response.status));
      }
      if (siteItem.fetchType === "get") {
        return {
          resultLink: targetLink,
          ...videoPageParser(response.responseText, siteItem.domQuery)
        };
      } else if (siteItem.fetchType === "post") {
        return jav321Parser(response.responseText, siteItem, CODE);
      } else {
        const searchRes = serachPageParser(response.responseText, siteItem, CODE);
        // 搜索精确匹配时可能被重定向到详情页，parser 找不到搜索列表
        if (!searchRes.isSuccess && siteItem.detailCheck) {
          const doc = new DOMParser().parseFromString(response.responseText, "text/html");
          if (doc.querySelector(siteItem.detailCheck)) {
            const finalUrl = response.finalUrl || response.responseURL || targetLink;
            return { isSuccess: true, resultLink: finalUrl };
          }
        }
        return { ...searchRes };
      }
    } catch (error) {
      return {
        isSuccess: false
      };
    }
  };
  const javbleFetcher = async (args) => {
    const res = await baseFetcher(args);
    if (res.isSuccess) return res;
    const newLink = args.targetLink.slice(0, -1) + "-c/";
    return await baseFetcher({ ...args, targetLink: newLink });
  };
  const fetcher = (args) => {
    if (args.siteItem.name === "Jable") {
      return javbleFetcher(args);
    }
    return baseFetcher(args);
  };
  const buildSiteRequest = (siteItem, CODE) => {
    const requestCode = siteItem.codeFormater ? siteItem.codeFormater(CODE) : CODE;
    return {
      requestCode,
      originLink: siteItem.url.replace("{{code}}", requestCode)
    };
  };
  const extractCidFromJav321Link = (link) => {
    if (!link) return "";
    try {
      const url = new URL(link, location.href);
      if (!/jav321\.com$/i.test(url.hostname)) return "";
      const match = url.pathname.match(/\/video\/([^/?#]+)/i);
      return match ? decodeURIComponent(match[1]) : "";
    } catch (error) {
      return "";
    }
  };
  const extractCidFromCurrentJav321Page = (libItem) => {
    return libItem.name === "jav321" ? extractCidFromJav321Link(location.href) : "";
  };
  const resolveFanzaTargetLink = ({ siteItem, CODE, libItem, siteResults }) => {
    const fallbackCode = formatFanzaCode(CODE);
    const currentCid = extractCidFromCurrentJav321Page(libItem);
    if (currentCid) {
      return {
        status: "ready",
        requestCode: currentCid,
        targetLink: siteItem.url.replace("{{code}}", currentCid),
        cidSource: "currentJav321"
      };
    }
    const jav321Result = siteResults["JAV321"];
    if (!jav321Result || jav321Result.loading) {
      return {
        status: "waiting",
        requestCode: fallbackCode,
        targetLink: "",
        cidSource: "waitingJav321"
      };
    }
    const jav321Cid = jav321Result.isSuccess && !jav321Result.multipleRes ? extractCidFromJav321Link(jav321Result.resultLink) : "";
    const requestCode = jav321Cid || fallbackCode;
    return {
      status: "ready",
      requestCode,
      targetLink: siteItem.url.replace("{{code}}", requestCode),
      cidSource: jav321Cid ? "jav321Button" : "fallback"
    };
  };
  const HiddenJav321Resolver = ({ CODE, setSiteResults }) => {
    const siteItem = siteList.find((item) => item.name === "JAV321");
    y(() => {
      if (!siteItem) return;
      let active = true;
      const { requestCode, originLink } = buildSiteRequest(siteItem, CODE);
      setSiteResults((prev) => ({
        ...prev,
        JAV321: {
          ...(prev.JAV321 || {}),
          loading: true,
          requestCode,
          originLink
        }
      }));
      fetcher({
        siteItem,
        targetLink: originLink,
        CODE: requestCode
      }).then((res) => {
        if (!active) return;
        setSiteResults((prev) => ({
          ...prev,
          JAV321: {
            ...res,
            loading: false,
            requestCode,
            originLink
          }
        }));
      });
      return () => {
        active = false;
      };
    }, [CODE]);
    return /* @__PURE__ */ u$1(preact.Fragment, {});
  };
  const SiteBtn = ({ siteItem, CODE, multipleNavi, hiddenError, siteResults, libItem, setSiteResults }) => {
    const { name } = siteItem;
    const [loading, setLoading] = h(false);
    const [fetchRes, setFetchRes] = h();
    const jav321Result = siteResults["JAV321"];
    const { originLink: defaultOriginLink, requestCode: defaultRequestCode } = buildSiteRequest(siteItem, CODE);
    y(() => {
      let active = true;
      const updateShared = (patch) => {
        if (siteItem.name !== "JAV321") return;
        setSiteResults((prev) => ({
          ...prev,
          JAV321: {
            ...(prev.JAV321 || {}),
            ...patch
          }
        }));
      };
      const run = async () => {
        if (siteItem.name === "DMM") {
          const target = resolveFanzaTargetLink({ siteItem, CODE, libItem, siteResults });
          if (target.status === "waiting") {
            setLoading(true);
            setFetchRes(void 0);
            return;
          }
          const mgsNumPrefix = checkMgsCidPrefix(target.requestCode);
          if (mgsNumPrefix) {
            const mgsCode = mgsNumPrefix + CODE;
            const mgsLink = `https://www.mgstage.com/product/product_detail/${mgsCode}/`;
            setFetchRes({
              isSuccess: true,
              resultLink: mgsLink,
              originLink: mgsLink,
              mgsOverride: true
            });
            setLoading(false);
            return;
          }
          setLoading(true);
          const res = await fetcher({
            siteItem,
            targetLink: target.targetLink,
            CODE: target.requestCode
          });
          if (!active) return;
          setFetchRes({
            ...res,
            cidSource: target.cidSource,
            requestCode: target.requestCode,
            originLink: target.targetLink
          });
          setLoading(false);
          return;
        }
        setLoading(true);
        updateShared({
          loading: true,
          requestCode: defaultRequestCode,
          originLink: defaultOriginLink
        });
        const res = await fetcher({
          siteItem,
          targetLink: defaultOriginLink,
          CODE: defaultRequestCode
        });
        if (!active) return;
        setFetchRes({
          ...res,
          requestCode: defaultRequestCode,
          originLink: defaultOriginLink
        });
        setLoading(false);
        updateShared({
          ...res,
          loading: false,
          requestCode: defaultRequestCode,
          originLink: defaultOriginLink
        });
      };
      run();
      return () => {
        active = false;
      };
    }, siteItem.name === "DMM" ? [
      CODE,
      libItem.name,
      jav321Result == null ? void 0 : jav321Result.loading,
      jav321Result == null ? void 0 : jav321Result.isSuccess,
      jav321Result == null ? void 0 : jav321Result.multipleRes,
      jav321Result == null ? void 0 : jav321Result.resultLink
    ] : [CODE]);
    const multipleFlag = multipleNavi && (fetchRes == null ? void 0 : fetchRes.multipleRes);
    const tag = multipleFlag ? "多结果" : fetchRes == null ? void 0 : fetchRes.tag;
    const originLink = (fetchRes == null ? void 0 : fetchRes.originLink) || defaultOriginLink;
    const resultLink = multipleFlag ? originLink : fetchRes == null ? void 0 : fetchRes.resultLink;
    const colorClass = siteItem.fetchType === "false" || (fetchRes == null ? void 0 : fetchRes.mgsOverride) ? "jop-button_blue " : (fetchRes == null ? void 0 : fetchRes.isCloudflare) ? "jop-button_orange " : (fetchRes == null ? void 0 : fetchRes.isSuccess) ? "jop-button_green " : "jop-button_red ";
    if (hiddenError && fetchRes && !loading && !(fetchRes == null ? void 0 : fetchRes.isSuccess)) {
      return /* @__PURE__ */ u$1(preact.Fragment, {});
    }
    return /* @__PURE__ */ u$1(
      "a",
      {
        className: "jop-button " + (loading ? " " : colorClass),
        target: "_blank",
        href: !resultLink ? originLink : resultLink,
        onClick: (event) => {
          if (loading && siteItem.name === "DMM") {
            event.preventDefault();
          }
        },
        children: [
          tag && /* @__PURE__ */ u$1("div", { className: "jop-button_label", children: tag }),
          /* @__PURE__ */ u$1("span", { children: (fetchRes == null ? void 0 : fetchRes.mgsOverride) ? "MGS" : name })
        ]
      }
    );
  };
  const App = M(function({ libItem, CODE }) {
    const DEF_DIS = [
      ...["AvJoy", "baihuse", "GGJAV", "AV01", "highporn", "evojav", "HAYAV"],
      ...["JavBus", "JavDB", "JAVLib", "MISSAV_", "123av", "javhub", "javgo", "JAVMENU"]
    ];
    const [disables, setDisables] = h(_GM_getValue("disable", DEF_DIS));
    const [multipleNavi, setMultipleNavi] = h(_GM_getValue("multipleNavi", true));
    const [hiddenError, setHiddenError] = h(_GM_getValue("hiddenError", false));
    const [siteResults, setSiteResults] = h({});
    const list = siteList.filter(
      (siteItem) => !disables.includes(siteItem.name) && !siteItem.hostname.includes(libItem.name) && (!(siteItem.codeMatcher) || siteItem.codeMatcher(CODE))
    );
    const shouldResolveHiddenJav321 = disables.includes("JAV321") && libItem.name !== "jav321";
    return /* @__PURE__ */ u$1(preact.Fragment, { children: [
      shouldResolveHiddenJav321 && /* @__PURE__ */ u$1("div", { style: "display:none", children: /* @__PURE__ */ u$1(HiddenJav321Resolver, { CODE, setSiteResults }) }),
      /* @__PURE__ */ u$1("div", { class: "jop-list", children: list.map((siteItem) => /* @__PURE__ */ u$1(
        SiteBtn,
        {
          siteItem,
          CODE,
          multipleNavi,
          hiddenError,
          siteResults,
          libItem,
          setSiteResults
        },
        siteItem.name
      )) }),
      /* @__PURE__ */ u$1(
        Setting,
        {
          siteList,
          setDisables: (disable) => {
            setDisables(disable);
            _GM_setValue("disable", disable);
          },
          multipleNavi,
          setMultipleNavi: (multipleNavi2) => {
            setMultipleNavi(multipleNavi2);
            _GM_setValue("multipleNavi", multipleNavi2);
          },
          disables,
          hiddenError,
          setHiddenError: (v2) => {
            setHiddenError(v2);
            _GM_setValue("hiddenError", v2);
          }
        }
      )
    ] });
  });
  function main() {
    // 0. 115 用户 ID 捕获（在 115.com 页面运行）
    init115UserID();

    // 1. 先执行布局优化和瀑布流（列表页+详情页都可用）
    applyLayoutOptimizations();
    insertWaterfallButton();
    initWaterfall();
    initSehuatangPreview();

    // 2. 尝试匹配详情页（原有搜索链接逻辑）
    const libItem = libSites.find((item) => document.querySelector(item.identifier));
    if (!libItem) {
      console.log("||jop 非详情页或匹配失败，仅启用瀑布流/布局优化");
      return;
    }
    const CODE = getCode(libItem);
    libItem.method();
    const panel = document.querySelector(libItem.querys.panelQueryStr);
    if (!panel) {
      console.error("||jop 插入界面失败");
      return;
    }
    const app = document.createElement("div");
    app.classList.add("jop-app");
    panel.append(app);
    preact.render(/* @__PURE__ */ u$1(App, { libItem, CODE }), app);
    console.log("||脚本挂载成功", CODE);

    // 3. 115离线下载按钮（仅 JavDB 详情页）
    if (libItem.name === 'javdb') {
      inject115Buttons();
    }
  }
  main();

})(preact);
