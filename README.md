# Clash Custom Rules

自定义 Clash / Mihomo / Stash 规则，避免订阅更新后手写规则被覆盖。

## 文件

- `override.yaml`: 给支持 YAML 覆写、Mixin、Merge 的客户端使用。
- `parser.js`: 给支持 JavaScript Parser / 扩展脚本的客户端使用。
- 名称：自定义代理规则
- 分类：分流规则
- 描述：AI、加密、金融站点按指定策略分流；OCBC、Wise、iFAST、Schwab 直连。
- 图标使用 PNG，兼容性比 SVG 更高。
- Stash 描述字段使用 `desc`，文件里也保留了 `description` 兼容其他客户端。

## 规则备注

- `etherfi` 已改为 `ether`。
- OpenAI / ChatGPT 额外补充：`chatgpt.com`、`openai.com`、`oaistatic.com`、`oaiusercontent.com`。

## Raw 链接

YAML 覆写：

```text
https://raw.githubusercontent.com/zhangxiaolongne/rules/main/override.yaml
```

JavaScript Parser：

```text
https://raw.githubusercontent.com/zhangxiaolongne/rules/main/parser.js
```

图标：

```text
https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png
```

## 注意

`🇭🇰 香港丨Core 01` 必须和你订阅配置里的策略组名字完全一致。名字不一致，规则会失效。
