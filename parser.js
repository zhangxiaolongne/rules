// @name 自定义代理规则
// @desc AI、加密、金融站点按指定策略分流；OCBC、Wise、iFAST、Schwab 直连。
// @description AI、加密、金融站点按指定策略分流；OCBC、Wise、iFAST、Schwab 直连。
// @category 分流规则
// @icon https://raw.githubusercontent.com/zhangxiaolongne/rules/main/icon.svg

const customRules = [
  "DOMAIN-KEYWORD,infini,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,etherfi,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,wirex,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,chatgpt,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,openai,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,interactivebrokers,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,ibkr,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,binance,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,digitalcard,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,dtcpay,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,plasma,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,kast,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,kraken,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,flkey,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,fluidkey,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,tuyo,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,fuse,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,coca,🇭🇰 香港丨Core 01",
  "DOMAIN-KEYWORD,ocbc,DIRECT",
  "DOMAIN-KEYWORD,wise,DIRECT",
  "DOMAIN-KEYWORD,ifast,DIRECT",
  "DOMAIN-KEYWORD,schwab,DIRECT",
];

function main(config) {
  const existingRules = Array.isArray(config.rules) ? config.rules : [];
  const customSet = new Set(customRules);
  config.rules = [
    ...customRules,
    ...existingRules.filter((rule) => !customSet.has(rule)),
  ];
  return config;
}
