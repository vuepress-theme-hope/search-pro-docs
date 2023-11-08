import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as u,b as s,d as n,a,w as p,e as o}from"./app-f7f1fe73.js";const r={},d=o('<p><code>vuepress-plugin-search-pro</code> 是一个强大的客户端搜索插件，可以为你的站点添加自定义索引与全文搜索功能。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><h3 id="索引范围" tabindex="-1"><a class="header-anchor" href="#索引范围" aria-hidden="true">#</a> 索引范围</h3><p>默认情况下，插件仅索引标题，文章摘要和你添加的自定义字段。如果你想要索引文章的全部内容，你可以通过设置 <code>indexContent: true</code> 来开启。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当索引不基于单词的语言时，例如中文、日语或韩语，你需要设置 <code>indexOptions</code> 和 <code>indexLocaleOptions</code> 以执行正确的分词，详见<a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B4%A2%E5%BC%95%E7%94%9F%E6%88%90">自定义索引生成</a>。</p></div><h3 id="极致速度" tabindex="-1"><a class="header-anchor" href="#极致速度" aria-hidden="true">#</a> 极致速度</h3>',6),k={href:"https://mister-hope.github.io/slimsearch/",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"slimsearch",-1),m=s("code",null,"vuepress-plugin-search-pro",-1),h=o('<h3 id="高亮与上下文" tabindex="-1"><a class="header-anchor" href="#高亮与上下文" aria-hidden="true">#</a> 高亮与上下文</h3><p>插件会高亮搜索结果中的关键词，并显示关键词周围的上下文。</p><h3 id="自动搜索建议" tabindex="-1"><a class="header-anchor" href="#自动搜索建议" aria-hidden="true">#</a> 自动搜索建议</h3><p>插件会默认在搜索框输入时自动提示相关词作为搜索建议，如果你不需要这一行为，请设置 <code>autoSuggestions: false</code>。</p><h3 id="查询和搜索的历史记录" tabindex="-1"><a class="header-anchor" href="#查询和搜索的历史记录" aria-hidden="true">#</a> 查询和搜索的历史记录</h3><p>插件将显示您最后输入的 5 个查询和您选择的最后 5 个搜索结果。此行为可以通过设置 <code>queryHistoryCount</code> 和 <code>resultHistoryCount</code> 选项来改变。你可以将它们设置为 <code>0</code> 来禁用它们。</p><h3 id="完整键盘支持" tabindex="-1"><a class="header-anchor" href="#完整键盘支持" aria-hidden="true">#</a> 完整键盘支持</h3><p>插件支持键盘导航，你可以：</p><ul><li>使用快捷键激活搜索框</li><li>使用 <code>↑</code> 和 <code>↓</code> 导航搜索结果和自动建议</li><li>使用 <code>Tab</code> 应用建议</li><li>使用 <code>Enter</code> 打开选中的结果</li><li>使用 <code>Esc</code> 关闭建议列表或搜索框</li></ul>',9),b=s("code",null,"Ctrl + K",-1),g=s("code",null,"Ctrl + /",-1),f=s("code",null,"hotkeys",-1),y=o(`<h2 id="自定义索引" tabindex="-1"><a class="header-anchor" href="#自定义索引" aria-hidden="true">#</a> 自定义索引</h2><p>无论是主题开发者还是用户，在 Frontmatter 中或者通过 <code>extendsPage</code> 生命周期为页面添加额外数据是一个常见的操作。很多情况下，你可能希望把这些数据也编入索引，所以我们提供了 <code>customFields</code> 选项。</p><p><code>customFields</code> 接受一个数组，其中每一项代表一项自定义搜索索引的配置项。每一个配置项包含两个部分:</p><ul><li><code>getter</code>: 该自定义项目的获取器。此函数需要接受 <code>page</code> 对象作为参数，并以字符串 (单个)、字符串数组 (多个)、<code>null</code> (该项目缺失) 的形式返回该自定义项目的值。</li><li><code>formatter</code>: 一个字符串控制项目该如何在自定义搜索结果中显示，其中 <code>$content</code> 会替换成 <code>getter</code> 返回的项目值。如果你在使用多语言，你还可以将其设置为对象，以分别设置每一个语言的显示格式。</li></ul><p>难以理解么？那我们来提供一个简单的例子。</p><div class="hint-container info"><p class="hint-container-title">在索引中添加作者</p><p>假定你在 Frontmatter 中通过 <code>author</code> 添加作者:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> Your name</span>
<span class="token punctuation">---</span></span>

Markdown content...
</code></pre></div><p>你可以通过如下配置将作者添加到索引中:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>author<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;作者：$content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很简单不是么？</p></div><details class="hint-container details"><summary>一个更加复杂但实际的例子</summary><p>假设你在使用 <code>@vuepress/plugin-git</code> 插件，并且你在 Frontmatter 中通过 <code>category</code> 和 <code>tag</code> 为文章添加分类和标签。</p><p>如果你还在 <code>/zh/</code> 和 <code>/</code> 下分别放置了中文和英文，你需要进行如下配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 我们假定你在使用如下多语言</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Category: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tag: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;updateTime&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>updateTime<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Update time: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;更新时间：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="搜索快捷键" tabindex="-1"><a class="header-anchor" href="#搜索快捷键" aria-hidden="true">#</a> 搜索快捷键</h2>`,8),q=s("code",null,"Ctrl + K",-1),_=s("code",null,"Ctrl + /",-1),x=s("code",null,"hotkeys",-1),w=s("h2",{id:"热更新",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#热更新","aria-hidden":"true"},"#"),n(" 热更新")],-1),C=s("code",null,"hotReload: true",-1),P=o(`<h2 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h2><p>你可以通过 <code>locales</code> 来新增特定语言的多语言配置或修改已支持语言的配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个没有收到插件支持的语言</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;mm-NN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 覆盖 placeholder</span>
          placeholder<span class="token operator">:</span> <span class="token string">&quot;开始搜索&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;/xx/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 在这里完整设置 \`mm-NN\` 的多语言配置</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),z=s("h2",{id:"高级",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#高级","aria-hidden":"true"},"#"),n(" 高级")],-1),N=s("h3",{id:"自定义索引生成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义索引生成","aria-hidden":"true"},"#"),n(" 自定义索引生成")],-1),j=s("p",null,[n("如果你正在索引其他不使用“单词”的语言，如中文、日语或韩语，你应该设置 "),s("code",null,"indexOptions"),n(" 和 "),s("code",null,"indexLocaleOptions"),n(" 以执行正确的分词。")],-1),S={href:"https://github.com/Mister-Hope/nodejs-jieba",target:"_blank",rel:"noopener noreferrer"},U=s("code",null,"nodejs-jieba",-1),E=o(`<p>如果你的文档只包含中文，你可以像这样对内容进行标记：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cut <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;nodejs-jieba&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 索引全部内容</span>
      indexContent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indexOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 nodejs-jieba 进行分词</span>
        <span class="token function-variable function">tokenize</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          fieldName <span class="token operator">===</span> <span class="token string">&quot;id&quot;</span> <span class="token operator">?</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token function">cut</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要在某些语言环境中进行分词，你可以设置 <code>indexLocaleOptions</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cut <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;nodejs-jieba&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      indexContent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      indexLocaleOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 使用 nodejs-jieba 进行分词</span>
          <span class="token function-variable function">tokenize</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            fieldName <span class="token operator">===</span> <span class="token string">&quot;id&quot;</span> <span class="token operator">?</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token function">cut</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义搜索选项" tabindex="-1"><a class="header-anchor" href="#自定义搜索选项" aria-hidden="true">#</a> 自定义搜索选项</h3><p>你可以通过在客户端配置文件中导入和调用 <code>defineSearchConfig</code> 来自定义搜索选项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineSearchConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineSearchConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 此处放置搜索选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>由于搜索是在 Web Worker 中完成的，因此不支持设置选项为函数类型的值。</p></div><h3 id="通过-api-使用" tabindex="-1"><a class="header-anchor" href="#通过-api-使用" aria-hidden="true">#</a> 通过 API 使用</h3><p>如果你想要使用 API 来搜索，你可以从 <code>vuepress-plugin-search-pro/client</code> 中导入 <code>createSearchWorker</code> 来获取搜索结果:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createSearchWorker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> search<span class="token punctuation">,</span> terminate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createSearchWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用搜索 API</span>
<span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当不需要时终止 Worker</span>
<span class="token function">terminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发服务器中的限制" tabindex="-1"><a class="header-anchor" href="#开发服务器中的限制" aria-hidden="true">#</a> 开发服务器中的限制</h3><p>搜索服务由 Worker 提供支持，在开发模式下我们无法捆绑 Worker 文件。</p>`,13),A=s("code",null,'type: "module"',-1),L={href:"https://caniuse.com/mdn-api_worker_worker_options_type_parameter",target:"_blank",rel:"noopener noreferrer"},W=s("code",null,"hotReload: true",-1),F=s("h3",{id:"与服务端搜索比较",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#与服务端搜索比较","aria-hidden":"true"},"#"),n(" 与服务端搜索比较")],-1),$=s("p",null,"客户端搜索有优点，比如没有后台服务，容易添加，但你应该知道它也有缺点。",-1),I=s("div",{class:"hint-container warning"},[s("p",{class:"hint-container-title"},"缺点"),s("ol",null,[s("li",null,"你需要在构建阶段为你的网站建立索引，这会增长网站部署时间与网站的构建体积。"),s("li",null,"用户在搜索前需要从你的服务器拉取整个索引，会为你的网站服务器带来额外的流量与带宽压力。这通常比在服务端搜索下执行一个网络请求获得结果要慢得多。"),s("li",null,"为了进行一次搜索，用户必须等待搜索索引下载并在本地解析完毕。，这会为用户消耗不必要的流量、同时增加客户点耗电。"),s("li",null,"由于搜索是在用户设备上执行的，速度完全取决于设备性能。")])],-1),O={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://vuejs.press/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},V=s("code",null,"@vuepress/plugin-docsearch",-1);function H(M,K){const t=c("ExternalLinkIcon"),e=c("RouterLink");return l(),u("div",null,[d,s("p",null,[n("通过 "),s("a",k,[v,a(t)]),n("，"),m,n(" 的搜索速度极快，即使在大型站点上也是如此。")]),h,s("p",null,[n("默认情况下，搜索快捷键为 "),b,n(" 和 "),g,n("。你可以通过 "),f,n(" 选项来自定义搜索快捷键，参见 "),a(e,{to:"/zh/config.html#hotkeys"},{default:p(()=>[n("配置 → 快捷键")]),_:1}),n("。")]),y,s("p",null,[n("默认情况下，搜索快捷键为 "),q,n(" 和 "),_,n("。你可以通过 "),x,n(" 选项来自定义搜索快捷键，参见 "),a(e,{to:"/zh/config.html#hotkeys"},{default:p(()=>[n("配置 → 快捷键")]),_:1}),n("。")]),w,s("p",null,[n("如果你正在校对或完善你的搜索结果，你可以通过设置 "),C,n(" 选项来开启热更新，参见 "),a(e,{to:"/zh/config.html#hotreload"},{default:p(()=>[n("配置 → 热更新")]),_:1}),n("。")]),P,s("p",null,[n("具体的选项详见 "),a(e,{to:"/zh/config.html#locales"},{default:p(()=>[n("配置 → 多语言配置")]),_:1}),n("。")]),z,N,j,s("p",null,[n("如果你正在构建中文文档，则可以使用 "),s("a",S,[n("nodejs-jieba"),a(t)]),n(" 进行分词。 (日语和韩语没有内置词典，但你可以提供自己的词典，并使用 "),U,n(" 拆分单词)。")]),E,s("p",null,[n("为了在开发模式下加载搜索索引，我们使用了带有 "),A,n(" 的现代 Worker，但是目前 Safari 不支持此功能。 因此，如果你想尝试在 devServer 中搜索，你应该使用支持的浏览器，请参阅 "),s("a",L,[n("CanIUse"),a(t)]),n(" 了解支持详情。")]),s("p",null,[n("为了更好的性能，在开发模式下添加/编辑/删除 Markdown 内容不会触发搜索索引的更新。如果你正在校对或优化你的搜索结果，你可以通过设置 "),W,n(" 选项来启用热重载，参见 "),a(e,{to:"/zh/config.html#hotreload"},{default:p(()=>[n("配置 → 热重载")]),_:1}),n("。")]),F,$,I,s("p",null,[n("在大多数情况，如果你在构建一个大型站点，你应该选择服务提供商为你的站点提供搜索服务，例如 "),s("a",O,[n("Algolia"),a(t)]),n("，或者选择开源工具在自己的服务器上加载搜索服务并定期为自己的网站生成索引。对于大型站点这很必要因为用户通过网络请求向搜索 API 发送搜索字词，并直接得到搜索结果。")]),s("p",null,[n("特别提示，"),s("a",B,[n("DocSearch"),a(t)]),n(" 是 Algolia 为开源项目提供的免费搜索服务。如果你在创建开源项目文档或开源技术博客，你可 "),s("a",T,[n("申请它"),a(t)]),n("，并使用 "),s("a",R,[V,a(t)]),n(" 插件提供搜索。")])])}const G=i(r,[["render",H],["__file","guide.html.vue"]]);export{G as default};
