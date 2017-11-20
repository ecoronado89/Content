@Library("pipeline") _

buildTemplate("web-automation-header", {
    node('build') {
        fetchSource()
        nodeJSBuild()
    }
});