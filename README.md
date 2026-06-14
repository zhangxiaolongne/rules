# Clash Custom Rules

自定义 Clash / Mihomo 规则，避免订阅更新后手写规则被覆盖。

## 文件

- `override.yaml`: 给支持 YAML 覆写、Mixin、Merge 的客户端使用。
- `parser.js`: 给支持 JavaScript Parser / 扩展脚本的客户端使用。
- 名称：自定义代理规则
- 描述：AI、加密、金融站点按指定策略分流；OCBC、Wise、iFAST、Schwab 直连。

## GitHub Raw 链接格式

上传到 GitHub 后，把下面的 `<owner>` 和 `<repo>` 换成你的仓库：

```text
https://raw.githubusercontent.com/<owner>/<repo>/main/override.yaml
```

如果客户端的“覆写”要求 JavaScript Parser，用这个：

```text
https://raw.githubusercontent.com/<owner>/<repo>/main/parser.js
```

## 注意

`🇭🇰 香港丨Core 01` 必须和你订阅配置里的策略组名字完全一致。名字不一致，规则会失效。
