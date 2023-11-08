import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,b as s,d as n,a as t,e as a}from"./app-f7f1fe73.js";const l={},r=a(`<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项" aria-hidden="true">#</a> 插件选项</h2><h3 id="indexcontent" tabindex="-1"><a class="header-anchor" href="#indexcontent" aria-hidden="true">#</a> indexContent</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否索引内容。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认情况下，插件只会索引页面的标题和摘要以及你的自定义索引项，不会索引页面的正文内容。如果需要索引页面的正文内容，可以将该选项设置为 <code>true</code>。</p></div><h3 id="autosuggestions" tabindex="-1"><a class="header-anchor" href="#autosuggestions" aria-hidden="true">#</a> autoSuggestions</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否自动提示搜索建议。</p><h3 id="customfields" tabindex="-1"><a class="header-anchor" href="#customfields" aria-hidden="true">#</a> customFields</h3><ul><li><p>类型: <code>SearchProCustomFieldOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProCustomFieldOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 自定义项目的获取器
   */</span>
  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 展示的内容
   *
   * <span class="token keyword">@description</span> \`$content\` 会被 \`getter\` 返回的内容替换
   *
   * <span class="token keyword">@default</span> \`$content\`
   */</span>
  formatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>自定义搜索项目。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>假如你的主题在 Frontmatter 中使用 category 和 tag 标记文章的分类和标签，你可以使用以下配置：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
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
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys" aria-hidden="true">#</a> hotKeys</h3><ul><li><p>类型: <code>SearchProHotKeyOptions[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchProHotKeyOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 热键的 \`event.key\` 值
   */</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.altKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.ctrlKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  ctrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.shiftKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  shift<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否同时按下 \`event.metaKey\`
   *
   * <span class="token keyword">@default</span> false
   */</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[{ key: &quot;k&quot;, ctrl: true }, { key: &quot;/&quot;, ctrl: true }]</code></p></li></ul>`,14),u={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>当热键被按下时，搜索框的输入框会被聚焦，设置为空数组以禁用热键。</p><h3 id="queryhistorycount" tabindex="-1"><a class="header-anchor" href="#queryhistorycount" aria-hidden="true">#</a> queryHistoryCount</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>5</code></li></ul><p>存储搜索查询词历史的最大数量，可以设置为 <code>0</code> 以禁用。</p><h3 id="resulthistorycount" tabindex="-1"><a class="header-anchor" href="#resulthistorycount" aria-hidden="true">#</a> resultHistoryCount</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>5</code></li></ul><p>存储搜索结果历史的最大数量，可以设置为 <code>0</code> 以禁用。</p><h3 id="searchdelay" tabindex="-1"><a class="header-anchor" href="#searchdelay" aria-hidden="true">#</a> searchDelay</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>150</code></li></ul><p>结束输入到开始搜索的延时</p><div class="hint-container note"><p class="hint-container-title">注</p><p>有大量内容时，进行客户端搜素可能会很慢，在这种情况下你可能需要增加此值来确保开始搜索时用户已完成输入。</p></div><h3 id="sortstrategy" tabindex="-1"><a class="header-anchor" href="#sortstrategy" aria-hidden="true">#</a> sortStrategy</h3><ul><li>类型: <code>&quot;max&quot; | &quot;total&quot;</code></li><li>默认值: <code>&quot;max&quot;</code></li></ul><p>结果排序策略</p><p>当有多个匹配的结果时，会按照策略对结果进行排序。<code>max</code> 表示总分更高的页面会排在前面。<code>total</code> 表示最高分更高的页面会排在前面。</p><h3 id="worker" tabindex="-1"><a class="header-anchor" href="#worker" aria-hidden="true">#</a> worker</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>search-pro.worker.js</code></li></ul><p>输出的 Worker 文件名称</p><h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload" aria-hidden="true">#</a> hotReload</h3><ul><li>类型: <code>boolean</code></li><li>默认值: 是否使用 <code>--debug</code> 标记</li></ul><p>是否在开发服务器中启用实时热重载。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>它是默认禁用的，因为此功能会对内容巨大的站点产生极大性能影响，并且在编辑 Markdown 时剧烈增加热重载的速度。</p><p>通常情况下，在开发中，用户并不需要实时更新索引数据库。</p></div><h3 id="indexoptions" tabindex="-1"><a class="header-anchor" href="#indexoptions" aria-hidden="true">#</a> indexOptions</h3><ul><li><p>类型: <code>SearchProIndexOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SearchProIndexOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 用于对索引字段项进行分词的函数。
   */</span>
  tokenize<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fieldName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用于处理或规范索引字段中的术语的函数。
   */</span>
  processTerm<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    term<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>创建索引选项。</p><h3 id="indexlocaleoptions" tabindex="-1"><a class="header-anchor" href="#indexlocaleoptions" aria-hidden="true">#</a> indexLocaleOptions</h3><ul><li><p>类型: <code>Record&lt;string, SearchProIndexOptions&gt;</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SearchProIndexOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 用于对索引字段项进行分词的函数。
   */</span>
  tokenize<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fieldName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用于处理或规范索引字段中的术语的函数。
   */</span>
  processTerm<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    term<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>分语言的创建索引选项。</p><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型: <code>SearchProLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \`vuepress-plugin-search-pro\` 插件的多语言配置
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 搜索框占位符文字
   */</span>
  placeholder<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 搜素文字
   */</span>
  search<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 搜素中文字
   */</span>
  searching<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消文字
   */</span>
  cancel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 默认标题
   */</span>
  defaultTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 选择提示
   */</span>
  select<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 选择提示
   */</span>
  navigate<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 自动补全提示
   */</span>
  autocomplete<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 关闭提示
   */</span>
  exit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 加载提示
   */</span>
  loading<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 搜索历史文字
   */</span>
  history<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 无搜索历史提示
   */</span>
  emptyHistory<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 无结果提示
   */</span>
  emptyResult<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SearchProLocaleConfig</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> SearchProLocaleData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>搜索插件的多语言配置。</p><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h2><h3 id="definesearchconfig" tabindex="-1"><a class="header-anchor" href="#definesearchconfig" aria-hidden="true">#</a> defineSearchConfig</h3>`,33),k={href:"https://mister-hope.github.io/slimsearch/interfaces/SearchOptions.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineSearchConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineSearchConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 此处放置搜索选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="createsearchworker" tabindex="-1"><a class="header-anchor" href="#createsearchworker" aria-hidden="true">#</a> createSearchWorker</h3><p>创建一个搜索 Worker 以便你可以通过 API 搜索。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Word</span> <span class="token operator">=</span> <span class="token punctuation">[</span>tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TitleMatchedItem</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  display<span class="token operator">:</span> Word<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HeadingMatchedItem</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;heading&quot;</span><span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  display<span class="token operator">:</span> Word<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CustomMatchedItem</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  display<span class="token operator">:</span> Word<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ContentMatchedItem</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  header<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  display<span class="token operator">:</span> Word<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MatchedItem</span> <span class="token operator">=</span>
  <span class="token operator">|</span> TitleMatchedItem
  <span class="token operator">|</span> HeadingMatchedItem
  <span class="token operator">|</span> ContentMatchedItem
  <span class="token operator">|</span> CustomMatchedItem<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SearchResult</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  contents<span class="token operator">:</span> MatchedItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SearchWorker</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    query<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    locale<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    searchOptions<span class="token operator">?</span><span class="token operator">:</span> SearchOptions<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>SearchResult<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token function-variable function">terminate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">createSearchWorker</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> SearchWorker<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,h){const e=o("ExternalLinkIcon");return i(),c("div",null,[r,s("p",null,[n("指定热键的 "),s("a",u,[n("event.key"),t(e)]),n("。")]),d,s("p",null,[n("自定义 "),s("a",k,[n("搜索选项"),t(e)]),n("。")]),v])}const f=p(l,[["render",m],["__file","config.html.vue"]]);export{f as default};
