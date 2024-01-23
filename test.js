function getDefaultConfigs() {
  return [
    {
      name: "localhost",
      alert: false,
      favicon: false,
      style: {
        backgroundColor: "rgb(48,209,88)",
      },
      url: "^https?://(127.0.0.1|localhost):(.+83|8080)",
    },
    {
      name: "development",
      alert: false,
      favicon: false,
      style: {
        backgroundColor: "rgb(10,132,255)",
      },
      url: "^https?://dev-.+-admin.+",
    },
    {
      name: "staging",
      alert: false,
      favicon: {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "data:image/png;base64,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",
      },
      style: {
        backgroundColor: "rgb(255,214,10)",
      },
      url: "^https?://.*stage-admin.+|^https?://admin-.+stage.+",
    },
    {
      name: "production",
      alert: false,
      favicon: {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "data:image/png;base64,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",
      },
      style: {
        backgroundColor: "rgb(255,69,58)",
      },
      url: "^https?://.*admin.+",
    },
  ];
}

function getMatchedConfig(url, configs) {
  let origin = new URL(url).origin;
  return configs.find((config) => origin.match(new RegExp(config.url)));
}

function testUrl(expect, url) {
  let configs = getDefaultConfigs();
  let result = getMatchedConfig(url, configs);

  if (!result) {
    result = { name: "unknown" };
  }

  console.assert(
    expect === result.name,
    url + " should be match as " + expect + ", but matched " + result.name
  );

  if (expect === result.name) {
    console.log("- [x] " + url + " matched as " + expect);
  }
}

testUrl("localhost", "http://localhost:8080");
testUrl("localhost", "http://localhost:8083");
testUrl("localhost", "http://localhost:8083/");
testUrl("localhost", "http://localhost:8083/path");
testUrl("development", "https://dev-foo-bar-admin-hoge.foo-bar.hoge.test");
testUrl("development", "https://dev-foo-bar-admin-hoge.foo-bar.hoge.test/");
testUrl("development", "https://dev-foo-bar-admin-hoge.foo-bar.hoge.test/path");
testUrl("staging", "https://stage-admin-foo.bar.test");
testUrl("staging", "https://stage-admin-foo.bar.test/");
testUrl("staging", "https://stage-admin-foo.bar.test/path");
testUrl("staging", "https://admin-feature-stage-foo.bar.test");
testUrl("staging", "https://admin-feature-stage-foo.bar.test/");
testUrl("staging", "https://admin-feature-stage-foo.bar.test/login");
testUrl("production", "https://admin-feature-foo.bar.test");
testUrl("production", "https://admin-feature-foo.bar.test/");
testUrl("production", "https://admin-feature-foo.bar.test/path");
testUrl("production", "https://foo-admin-bar.foo.test");
testUrl("production", "https://foo-admin-bar.foo.test/");
testUrl("production", "https://foo-admin-bar.foo.test/path");
testUrl("unknown", "https://foo.test");
testUrl("unknown", "https://foo.test/?q=admin-feature-foo.bar.test");
