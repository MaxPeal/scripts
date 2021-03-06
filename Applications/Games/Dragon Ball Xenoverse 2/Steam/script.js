const SteamScript = include("engines.wine.quick_script.steam_script");
const { getLatestStagingVersion } = include("engines.wine.engine.versions");

const CSMT = include("engines.wine.plugins.csmt");

new SteamScript()
    .name("Dragon Ball Xenoverse 2")
    .editor("QLOC, DIMPS")
    .author("ImperatorS79")
    .wineVersion(getLatestStagingVersion)
    .wineDistribution("staging")
    .wineArchitecture("amd64")
    .appId(454650)
    .preInstall((wine /*, wizard*/) => {
        new CSMT(wine).go();
        //might need dxfullsetup d3d11 and d3d_43 compiler, but test result is old (2.10)
    });
