module.exports = {
    team: "CDT",
    branch: "QA",
    repository: "bbog-ncm-mfe-web-ui",
    framework: "Angular",
    version: "^14.2.9",
    crawlFrom: "./src",
    globs: ["**/!(*.test|*.spec).@(xhtml|html)?(x)","**/js/!(*.test|*.spec).@(js)?(x)"],
    url: "https://3mt8atlcre.execute-api.us-east-1.amazonaws.com/v1/v1/utilities/web-components/use-report",
    processors: [
      [
        "count-components",
        {
          outputTo: "./sherpa-report-angular.json",
        },
      ],
    ]
  };
