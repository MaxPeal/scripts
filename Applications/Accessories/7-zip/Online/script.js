const OnlineInstallerScript = include("engines.wine.quick_script.online_installer_script");

new OnlineInstallerScript()
    .name("7-zip")
    .editor("Igor Pavlov")
    .applicationHomepage("http://www.7-zip.org/")
    .author("MaxPeal")
    .url("https://www.7-zip.org/a/7z1900.exe")
    .checksum("2f23a6389470db5d0dd2095d64939657d8d3ea9d")
    .category("Accessories")
    .executable("7zFM.exe");
